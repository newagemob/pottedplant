---
title: "NixOS Setup"
author: "I.M. Wright"
category: "programming"
date: "2023-06-21"
bannerImage: "https://i.redd.it/sqvhfb4cias21.png"
tags:
    - programming
    - webassembly
    - wasm
    - cpp
    - c++
---


WebAssembly is a binary instruction format that serves as a portable target for the execution of high-level programming languages on the web. It allows developers to write code in languages other than JavaScript and run them in web browsers.

Here's a key of the highlights:

1. WASM is Low-Level: WebAssembly is a low-level bytecode format designed for efficient execution. It provides a compact binary representation of code that can be quickly loaded and executed by web browsers. We're diving deep into the core of web programming, bypassing the surface-level fluff and taking control of the bare metal.

2. WASM is Language Agnostic: WebAssembly is not tied to any specific programming language. It allows you to compile code from various languages, like C/C++, Rust, and even languages like TypeScript or Kotlin, into a common format that can run in the browser.

3. WASM is a Secure Sandbox: WebAssembly runs in a secure sandboxed environment within the web browser, ensuring that it cannot access or modify sensitive browser APIs or user data directly. It provides a controlled execution environment for untrusted code. We can wreak havoc without compromising user security or privacy. It's a safe haven for our digital mayhem.

4. Efficiency: WebAssembly is designed to be fast and efficient. It uses a compact binary format that can be quickly loaded and executed by web browsers. This efficiency enables web applications to run smoothly and responsively, even with complex computational tasks.

5. Browser Compatibility: WebAssembly is supported by major web browsers, including Chrome, Firefox, Safari, and Edge. It allows you to run complex applications on the web without relying solely on JavaScript, opening up new possibilities for web development.


We will primarily be utilizing C++ for this introduction. This will allow us to get a feel for the low-level nature of WASM. We will also be using the [Emscripten](https://emscripten.org/) compiler, which is a toolchain for compiling to WebAssembly, and it is the most popular tool for compiling C/C++ to WASM.

## Prerequisites

I am going to be using NixOS, but you are absolutely able to use whatever distribution you prefer. I will be using the [Nix package manager](https://nixos.org/) to install the Emscripten compiler. If you are using a different distribution, you can follow the [official Emscripten installation guide](https://emscripten.org/docs/getting_started/downloads.html).
