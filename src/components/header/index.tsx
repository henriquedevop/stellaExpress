import logo from "../../assets/logo.png"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { useState } from "react"

export function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="w-full flex items-center justify-between py-6 pr-11 pl-8 border-b-2 relative">

            <div>
                <img 
                alt="Logo stellaExpress"
                src={logo}/>
            </div>

            <nav className="font-medium hidden md:flex gap-5">
                <a>Home</a>
                <a>Localização</a>
                <a>Produtos</a>
                <a>Quem somos</a>
                <a>Contato</a>
            </nav>

            <div className="md:hidden">
                <button
                className="relative"
                onClick={toggleMenu}
                >
                  <Bars3Icon
                  className={`size-8
                  ${isMenuOpen ? "hidden" : "block"}`}
                  />
                  <XMarkIcon
                  className={`size-8
                  ${isMenuOpen ? "block" : "hidden"}`}
                  />
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full flex flex-col right-0 w-1/3 py-5 px-3 font-semibold bg-gray-200 gap-5 rounded-lg">
                <a href="#" className="text-gray-800">Home</a>
                <a href="#loc" className="text-gray-800">Localização</a>
                <a href="#products" className="text-gray-800">Produtos</a>
                <a href="#about" className="text-gray-800">Quem somos</a>
                <a className="text-gray-800">Contato</a>
                </div>
            )}

        </header>
    )
}