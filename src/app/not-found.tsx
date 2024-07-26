import Link from 'next/link'

function Notfound() {
  return (
    <div className='grid h-screen px-4 bg-verdant-bg place-content-center'>
      <h1 className='tracking-widest uppercase text-verdant-fg'>404 | Not Found</h1>
      <Link
        className='p-2 my-5 tracking-widest text-center uppercase transition duration-500 rounded-md bg-verdant-blue hover:scale-105'
        href='/'
      >
        Go Home
      </Link>
    </div>
  )
}

export default Notfound
