import React, { useEffect, useState } from 'react'
import { Loading } from '../'
import { useCopy } from '../../hooks'
import { FaDiscord, FaInstagram, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      platform: 'Email',
      address: ['isaiah@pottedplant.dev', 'isaiah@divemelon.com', 'isaiah@liquid.cards'],
      icon: <FaEnvelope />
    },
    {
      platform: 'Discord',
      url: 'https://discord.gg/cDRxR86Q',
      icon: <FaDiscord />
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/pot.tedplant/',
      icon: <FaInstagram />
    }
  ]

  return (
    <>
      <div className='contact-container'>
        {contactInfo.map((info) => (
          <div key={info.platform} className='contact-info'>
            <h1 className='contact-platform'>
              {info.platform}
            </h1>
            {info.address && (
              <>
                <div className='contact-link'>
                  <button className='contact-address'>
                    {info.address[0]}
                  </button>
                </div>

                <div className='contact-icon'>
                  {info.icon}
                </div>
              </>
            )}
            {info.url && (
              <>
                <div className='contact-link'>
                  <button className='contact-address'>
                    {info.url}
                  </button>
                </div>

                <div className='contact-icon'>
                  {info.icon}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default Contact
