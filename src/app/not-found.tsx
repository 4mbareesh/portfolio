import Link from 'next/link'

function Notfound() {
  return (
    <div className="grid place-content-center gap-5">
      <h1 className="text-xl uppercase tracking-widest text-verdant-bg selection:bg-verdant-red dark:text-verdant-fg">
        404 | Not Found
      </h1>
      <Link
        className="rounded-md border border-transparent bg-verdant-blue p-2 text-center font-bold uppercase tracking-widest text-verdant-fg transition duration-500 hover:scale-105 hover:border-verdant-blue hover:bg-transparent hover:text-verdant-bg dark:hover:text-verdant-fg dark:hover:backdrop-blur-[2px]"
        href="/"
      >
        Go Home
      </Link>
    </div>
  )
}

export default Notfound
