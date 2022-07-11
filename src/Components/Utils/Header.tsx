import Logo from './Logo'

export function Header() {
  return (
    <header className="w-full flex justify-center items-center py-3 bg-gray-700 border-b border-gray-500">
      <Logo />
    </header>
  )
}
