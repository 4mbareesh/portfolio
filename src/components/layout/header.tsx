import IconGithub from '@/components/assets/icons/icon-github'
import IconLinkedin from '@/components/assets/icons/icon-linkedin'
import IconX from '@/components/assets/icons/icon-x'
import IconInstagram from '@/components/assets/icons/icon-instagram'
import IconEmail from '@/components/assets/icons/icon-email'
import Link from 'next/link'
import { iSocialLink } from '@/types'

function Navbar() {
  const className = 'size-4 sm:size-5 fill-white'
  const socialLinks: iSocialLink[] = [
    {
      id: 1,
      name: 'github',
      icon: <IconGithub className={className} />,
      href: 'https://www.github.com/4mbareesh',
    },
    {
      id: 2,
      name: 'linkedin',
      icon: <IconLinkedin className={className} />,
      href: 'https://www.linkedin.com/in/4mbareesh/',
    },
    {
      id: 3,
      name: 'X',
      icon: <IconX className={className} />,
      href: 'https://www.x.com/4mbareesh',
    },
    {
      id: 4,
      name: 'instagram',
      icon: <IconInstagram className={className} />,
      href: 'https://www.instagram.com/ambareesh.exe',
    },
    {
      id: 5,
      name: 'mail',
      icon: <IconEmail className={className} />,
      href: 'mailto:ambareesh.exe@gmail.com',
    },
  ]

  return (
    <header
      id="navbar"
      className="flex h-14 w-full justify-between px-4 lg:px-10"
    >
      <div className="my-auto text-sm sm:text-base">
        <span className="text-verdant-fg">
          ambareesh<span className="text-verdant-blue">.me</span>
        </span>
      </div>
      <div className="flex items-center">
        <ul className="flex w-full justify-around gap-4">
          {socialLinks.map((data) => (
            <li
              key={data.id}
              className="transition duration-200 hover:scale-110"
            >
              <Link
                href={data.href}
                target="_blank"
                className="text-white"
                aria-label={data.name}
              >
                {data.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
