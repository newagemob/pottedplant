---
title: "NixOS Setup"
author: "I.M. Wright"
category: "programming"
date: "2023-06-21"
bannerImage: "https://i.redd.it/sqvhfb4cias21.png"
tags:
    - nixos
    - linux
    - operating-systems
    - guide
    - setup
---


# Installing NixOS

NixOS is a Linux distribution based on the Nix package manager, which might seem a bit confusing at first. However, it's simple to install and use, and it offers a lot of [advantages](#before-we-begin) over other Linux distributions.

## Download NixOS ISO

Grab the [latest NixOS ISO](https://nixos.org/download.html#download-nixos) and burn it to a USB drive (or save it to a directory on your PC if you want to run it in a virtual machine). You can use [Rufus](https://rufus.ie/) to burn the ISO to a USB drive.

## Boot from USB

### Bare Metal

Boot from the USB drive and select the "Graphical Installation" option. This will launch the NixOS installer. If you're unfamiliar with booting from a USB drive, DO NOT be intimidated. This has become one of the easiest parts of installing a modern operating system. You'll simply need to press a key (usually F12 or F2) during the boot process to access the boot menu. From there, you can select the USB drive as the boot device. If you accidentally slip into the BIOS, or you miss your window of opportunity with the boot menu, simply restart your computer and try again.

### Virtual Machine

If you're running NixOS in a virtual machine, you'll need to configure the virtual machine to boot from the ISO file that you downloaded. This is usually done by selecting the ISO file as the boot device in the virtual machine's settings. If you're using VirtualBox, you can find the settings under the "Storage" tab. Look up specific instructions for your virtual machine if you're having trouble. ***I prefer Boxes, which is a simple virtual machine manager for GNOME.***

## Partitioning

***If you're installing NixOS on a virtual machine, you can skip this step.***

☢️ Ensure that your data has been backed up ☢️

Once you've booted into the NixOS installer, you'll need to partition your hard drive. This is a very important step, so make sure you understand what you're doing. If you're not sure, you can always use the default partitioning scheme. However, if you want to customize your partitioning scheme, you can do so by selecting the "Manual Partitioning" option (this is not recommended). If you're not sure what to do, you can always use the default partitioning scheme.

## Installation

Once you've partitioned your hard drive, you can begin the installation process. This is a very simple process with a great user interface that guides you through the installation process. You'll be asked to select your keyboard layout, set your hostname, and create a user account. Once you've completed these steps, you can begin the installation process. When it comes time to pick a desktop environment, I recommend XFCE.

## Reboot

Once the installation is complete, you'll be prompted to reboot your system, and you're to go.

# Before We Begin

***You should know a bit more about the system.***

NixOS stands out, of course, for its powerful and unique package management system. At the heart of NixOS is the Nix package manager, which offers a declarative and reproducible approach to managing software packages. This basically means that you can roll back to previous versions of a package, or even roll back to a previous state of the entire system, and everything will be as it was before. This is a very powerful feature, especially for system administrators.

Unlike traditional package managers, Nix treats each package as an isolated entity, ensuring that dependencies are fully specified and avoiding conflicts between different versions. This level of package isolation provides a reliable and consistent environment.

One of the key advantages of Nix package management is its extensive package collection known as Nixpkgs. Nixpkgs is a curated library of thousands of packages, ranging from popular programming languages and development tools to desktop applications and system utilities. With Nixpkgs, you can easily install, update, and manage software on your NixOS system using simple commands. For example, to install the Python programming language, you can run nix-env -iA nixpkgs.python. This ensures that the specified version of Python is installed along with its dependencies, creating a reproducible development environment.

NixOS takes package management a step further with its support for custom package definitions. If you need to install software that is not available in the Nixpkgs collection, you can define your own package expressions. These expressions specify how to build and install the software, along with its dependencies.

Let's say you want to install a specific version of the "myapp" package. You can create a `myapp.nix` file with the necessary instructions and then use the `nix-env -if myapp.nix` command to build and install it.

Let's go ahead and create a `myapp.nix` file with the following contents:

```python
# Contents of myapp.nix
with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "myapp-1.2.3"; # Package name
  src = fetchurl {
    url = "https://example.com/myapp-1.2.3.tar.gz"; # Package source URL
    sha256 = "..."; # SHA-256 hash of the source archive
  };
  buildInputs = [ openssl zlib ]; # Dependencies -- you can find the dependency names in the Nixpkgs collection
  buildPhase = "make"; # Build instructions
  installPhase = "make install"; # Installation instructions
}
```

This might seem like overkill, but this is extremely useful fo installing custom software or software that is not from the Nixpkgs collection. For example, if you want to install a nightly build of Python, you can create a `python.nix` file with the following contents:

```python
# Contents of python.nix
with import <nixpkgs> {};
stdenv.mkDerivation {
  name = "python-nightly";
  src = fetchurl {
    url = "https://www.python.org/ftp/python/nightly/3.x/python-3.x.y.tar.xz";
    sha256 = "...";
  };
  buildInputs = [ openssl zlib ];
  buildPhase = '''
                ./configure --prefix=$out
                make
              '''
  installPhase = "make install";
}
```

## Coming Up Next

Next, we'll look at NixOS Configuration, which is a declarative approach to system configuration. It allows you to define your system configuration in a single file, which can then be used to build and deploy your system. This is a very powerful feature, as it allows you to easily reproduce your system configuration on multiple machines.
