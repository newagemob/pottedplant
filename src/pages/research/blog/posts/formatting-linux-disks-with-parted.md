---
title: "Formatting Linux Disks with Parted"
author: "I.M. Wright"
category: "programming"
date: "2023-06-20"
bannerImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/W2I6OCDQIMI6VIKWABELMLG3KE.jpg&w=1484"
tags:
    - programming
    - disk-partitioning
    - linux
    - media-server
---

# Formatting Linux Disks with Parted

***How to format a disk in Linux using the parted command like a Chad***

## Introduction

I had a 1TB drive that used to be a Windows boot drive. I wanted to use it as a media drive for my [Homekit Media Server](), but it was using MBR partitioning, and I wanted to use GPT. I had to use parted to do this, and it was a bit abstract to me, so I wanted to write a quick guide on how to do it and what I learned about it.

This guide is primarily for Linux users, but it should work on MacOS as well, or any other Unix-like system that has parted installed. I personally use Fedora.

## What is Parted?

Parted is a command line tool for partitioning disks. It can be used to create, delete, resize, and move partitions. It can also be used to create and delete disk labels (MBR, GPT, etc.).

## How to use Parted

First things first, you need to know what disk you want to partition. You can find this out by running `lsblk` or `fdisk` and looking at the output. In my case, I wanted to partition `/dev/sdb`.

```bash
fdisk -l
```

Once you know what disk you want to partition, you can open it in Parted by running `parted /dev/sdb`. This will open the disk in interactive mode, which is useful for creating and deleting partitions

```bash
sudo parted /dev/sdb
```

Once you're in interactive mode, you can use the `mklabel` command to create a new disk label. In my case, I wanted to use GPT, so I ran `mklabel gpt`.

```bash
(parted) mklabel gpt
```

Now that the disk label is created, you can use the `mkpart` command to create a new partition. In my case, I wanted to create a primary partition utilizing my entire 1TB drive, with the `ext4` filesystem.

```bash
(parted) mkpart primary ext4 0% 100%
```

The partition has been created, but the filesystem still needs to be created.

```bash
(parted) mkfs.ext4 /dev/sdb1
```

Your disk is now formatted and ready to use! All that's left is to mount it.

```bash
(parted) quit
```

then

```bash
sudo mount /dev/sdb1 /path/to/mount/point
```
