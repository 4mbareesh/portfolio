'use client'

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="my-5 rounded-md bg-verdant-blue p-2 transition duration-500 visited:bg-verdant-green hover:scale-105">
      {children}
    </button>
  )
}

export default Button
