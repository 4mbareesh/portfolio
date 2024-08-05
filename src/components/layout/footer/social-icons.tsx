import IconEmail from '@/components/assets/icons/icon-email'
import IconGithub from '@/components/assets/icons/icon-github'
import IconInstagram from '@/components/assets/icons/icon-instagram'
import IconLinkedin from '@/components/assets/icons/icon-linkedin'
import IconTelegram from '@/components/assets/icons/icon-telegram'
import IconX from '@/components/assets/icons/icon-x'

type IconProps = React.HTMLAttributes<SVGElement>

const className = 'fill-verdant-bg dark:fill-white size-full'

const Icons = {
  github: (props: IconProps) => <IconGithub className={className} {...props} />,
  linkedin: (props: IconProps) => (
    <IconLinkedin className={className} {...props} />
  ),
  x: (props: IconProps) => <IconX className={className} {...props} />,
  telegram: (props: IconProps) => (
    <IconTelegram className={className} {...props} />
  ),
  instagram: (props: IconProps) => (
    <IconInstagram className={className} {...props} />
  ),
  mail: (props: IconProps) => <IconEmail className={className} {...props} />,
}

export default Icons
