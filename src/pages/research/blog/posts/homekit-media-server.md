---
title: "Homekit Media Server"
author: "I.M. Wright"
category: "programming"
date: "2023-06-20"
bannerImage: "https://static01.nyt.com/images/2018/05/15/arts/01hal-voice1/merlin_135847308_098289a6-90ee-461b-88e2-20920469f96a-superJumbo.jpg"
tags:
    - programming
    - media-server
    - linux
---

# Homekit Media Server

***Pack-and-Go Media Server including [Jellyfin]() + [Black Candy]() + [Sonarr]() + [Radarr]() + [Jackett]() + [Transmission]()

## Introduction

Custom media servers are not new, but they're definitely becoming more popular. The idea is to have a central server that stores all of your media, and then you can access it from any device on your network, typically via a web interface.

Homekit Media Server is a custom media server that I built for my home network. The primary functions are to serve my movies and tv shows via Jellyfin, my music via Black Candy, and to download new content via Sonarr, Radarr, Jackett, and Transmission.

## Pre-requisites

In order to run Homekit Media Server, you'll need a few things before running the install script.

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Installation

Once you have all of the pre-requisites installed, download the repository and run the install script.

```bash
git clone https://github.com/newagemob/homekit.git
```

Now that you have the repository downloaded, go into the directory and run the install script.

```bash
cd homekit/server && chmod +x start_homekit.sh && ./start_homekit.sh
```

***If you're having issues with this part, you're probably on a Windows Machine. You can run the commands in the script manually.***

```bash
cd jellyfin && docker-compose up -d
cd ../black-candy && docker-compose up -d
cd ../sonarr && docker-compose up -d
cd ../radarr && docker-compose up -d
cd ../jackett && docker-compose up -d
cd ../transmission && docker-compose up -d
```

***If you're still having issues, make sure that Docker is running and that Docker Compose is installed.***

This should pull the repositories from Docker Hub and start the containers. You can check the status of the containers by running `docker ps`, but you should see `{DOCKER CONTAINER} ...done` for each of the containers. 

```bash
docker ps
```

***If you are having permission errors with Docker, you may need to use `sudo` or add your user to the `docker` group.***

```bash
sudo usermod -aG docker $USER
```

## Configuration

Once the containers are running, you can access the web interfaces for each of the services. Black Candy and Jellyfin both require you to create an account.

### Black Candy Setup

To add media, you can simply copy your music library into the `/media-server/music` directory.

Once you open the interface `(http://127.0.0.1:6969)` and create an account, click the icon in the top right corner and go to `Settings`. From there you should see **Media Path** with the /media-data library loaded. Click ***'Sync'** to load your music library.

### Jellyfin Setup

To add media, you can simply copy your movies and tv shows into the `/media-server/movies` and `/media-server/tv` directories.

Once you open the interface `(http://127.0.0.1:8096)`, you'll be prompted to create an account. Once you've created an account, you'll be prompted to add media. Click ***'Add Media'*** and select the `/media-server/movies` and `/media-server/tv` directories.

## Accessing the Server from Other Devices

If you want to access the server from other devices on your network, you'll need to find the IP address of the server. You can do this by running `ifconfig` and looking for your machine's IP address. This will probably be something like `192.x.x.x` or `10.x.x.x`.

***(Linux or MacOS)***
```bash
ifconfig
```

***(Windows)***
```bash
ipconfig
```

## Downloading New Media with Sonarr, Radarr, Jackett, and Transmission

Sonarr, Radarr, Jackett, and Transmission are all configured to work together. You can access the web interfaces for each of these services by going to the following URLs:

- Sonarr: `http://127.0.0.1:8989`
- Radarr: `http://127.0.0.1:7878`
- Jackett: `http://127.0.0.1:9117`
- Transmission: `http://127.0.0.1:9091`

The workflow goes like this:

1. Configure Jackett proxy to work with your favorite torrent sites.
2. Configure Sonarr and Radarr to work with Jackett.
3. Configure Sonarr and Radarr to work with Transmission.
4. Add a new show or movie to Sonarr or Radarr.
5. Sonarr or Radarr will search for the show or movie on your favorite torrent sites.
6. Sonarr or Radarr will send the torrent to Transmission.
7. Transmission will download the torrent and send it to the `/media-server/movies` or `/media-server/tv` directories.
8. Jellyfin will automatically detect the new media and add it to your library.
9. Black Candy will need to be synced to detect the new media.
