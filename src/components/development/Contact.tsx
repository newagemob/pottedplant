import React, { useEffect, useState } from 'react'
import { Loading } from '../'
import { useCopy } from '../../hooks'
import { FaDiscord, FaInstagram, FaEnvelope } from 'react-icons/fa'
import Link from 'next/link'

const Contact = () => {
  const contactInfo = [
    {
      platform: 'Email',
      address: ['isaiah@pottedplant.dev', 'isaiah@divemelon.com', 'isaiah@liquid.cards'],
      icon: <FaEnvelope />
    },
    {
      platform: 'Discord',
      url: 'https://discord.gg/vqxz2a8nGc',
      icon: <FaDiscord />
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/pot.tedplant/',
      icon: <FaInstagram />
    }
  ]

  const { copyMessage, handleCopy } = useCopy()

  return (
    <>
      <section className='contact-card'>
        {contactInfo.map((info) => (
          <div key={info.platform} className='contact-info'>
            <div className='contact-header'>
              <span className='contact-icon'>
                {info.icon}
              </span>
              &nbsp;
              <h1 className='contact-platform'>
                {info.platform}
              </h1>
            </div>
            {info.address && (
              <>
                <div className='contact-link'>
                  <button className='contact-address' onClick={() => handleCopy(info.address[0])}>
                    {info.address[0]}
                  </button>
                </div>

                {copyMessage ? <div id='copy-message'>📋 Copied &nbsp; <p id='copy-message-highlight'>{copyMessage}</p> &nbsp; to clipboard!</div> : null}
              </>
            )}
            {info.url && (
              <>
                <div className='contact-link'>
                  <Link className='contact-address' href={info.url} target='_blank' rel='noreferrer'>
                    {info.url}
                  </Link>
                </div>

              </>
            )}
          </div>
        ))}
      </section>
    </>
  )
}

export default Contact
