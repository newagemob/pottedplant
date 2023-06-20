---
title: "Homekit Media Server"
author: "I.M. Wright"
category: "programming"
date: "2023-06-20"
bannerImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/W2I6OCDQIMI6VIKWABELMLG3KE.jpg&w=1484"
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
cd homekit/server && ./start_homekit.sh
```

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
