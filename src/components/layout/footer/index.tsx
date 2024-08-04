import Link from 'next/link'
import { Dock, DockIcon } from '../../ui/dock'
import { socialLinks } from '@/constants/social-links'

function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <Dock magnification={60} distance={100}>
        {socialLinks.map((data) => (
          <DockIcon key={data.id} className="p-2">
            <Link href={data.href} target="_blank" aria-label={data.name}>
              {data.icon}
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </footer>
  )
}

export default Footer
