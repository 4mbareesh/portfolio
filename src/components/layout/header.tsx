import React from 'react'
import { FaGithub, FaInstagram, FaEnvelopeOpenText } from 'react-icons/fa'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'

function Navbar() {
  const iconSize = 22
  const iconColor = 'white'
  const socialLinks = [
    {
      id: 1,
      name: 'github',
      icon: <FaGithub size={iconSize} color={iconColor} />,
      href: 'https://www.github.com/4mbareesh',
    },
    {
      id: 2,
      name: 'linkedin',
      icon: <FaLinkedin size={iconSize} color={iconColor} />,
      href: 'https://www.linkedin.com/in/4mbareesh/',
    },
    {
      id: 3,
      name: 'X',
      icon: <FaXTwitter size={iconSize} color={iconColor} />,
      href: 'https://www.x.com/4mbareesh',
    },
    {
      id: 4,
      name: 'instagram',
      icon: <FaInstagram size={iconSize} color={iconColor} />,
      href: 'https://www.instagram.com/ambareesh.exe',
    },
    {
      id: 5,
      name: 'mail',
      icon: <FaEnvelopeOpenText size={iconSize} color={iconColor} />,
      href: 'mailto:ambareesh.exe@gmail.com',
    },
  ]
  return (
    <header
      id="navbar"
      className="flex h-14 w-full justify-between px-4 lg:px-10"
    >
      <div className="my-auto">
        <span className="text-verdant-fg">
          ambareesh<span className="text-verdant-blue">.me</span>
        </span>
      </div>
      <div className="flex items-center">
        <ul className="flex w-full justify-around gap-3">
          {socialLinks.map((data) => (
            <li
              key={data.id}
              className="transition duration-200 hover:scale-110"
            >
              <a href={data.href} target="_blank">
                {data.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
