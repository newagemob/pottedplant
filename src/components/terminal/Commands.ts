import { useState } from 'react'

const Commands = () => {

  const ls = () => {
    return 'ls'
  }

  const cd = () => {
    return 'cd'
  }

  const pwd = () => {
    return 'pwd'
  }

  const directory = () => {
    return 'directory'
  }

  const whoami = () => {
    return 'whoami'
  }

  const clear = () => {
    return 'clear'
  }

  const help = () => {
    return 'help'
  }

  return {
    ls,
    cd,
    pwd,
    directory,
    whoami,
    clear,
    help
  }
}
