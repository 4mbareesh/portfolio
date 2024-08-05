import ToggleTheme from './toggle-theme'

function Header() {
  return (
    <header
      id="navbar"
      className="flex h-14 w-full justify-between px-4 lg:px-10"
    >
      <div className="my-auto text-sm sm:text-base">
        <span className="text-verdant-bg dark:text-verdant-fg">
          ambareesh<span className="text-verdant-blue">.me</span>
        </span>
      </div>
      <div className="flex items-center">
        <ToggleTheme />
      </div>
    </header>
  )
}

export default Header
