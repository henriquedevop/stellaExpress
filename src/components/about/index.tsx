import { BuildingStorefrontIcon } from "@heroicons/react/16/solid"
import { useState } from "react"

export function About() {

    const [isExpanded, setIsExpended] = useState(false)

    function toggleReadMore() {
        setIsExpended(!isExpanded)
    }

    return (
        <section className="mx-8 mt-8" id="about">
            <h3 className="font-extrabold text-3xl flex items-center gap-1">Quem somos <BuildingStorefrontIcon className="size-8"/></h3>
            <div className="bg-white rounded-lg w-full shadow-md mt-8">
                <p className={`p-4 text-neutral-400 text-lg font-semibold ${isExpanded ? 'opacity-100' : 'line-clamp-5 opacity-90 w-full shadow-sm'}`}>
                Nós da Stella Express, estamos localizados na Rua Cap. Melo, 8 , loja 01 e 02 - Stella Maris. 
                Nos destacamos no ramo de distribuidora de bebidas mais de 10 anos de experiencia sempre prezando por te atender de 
                forma rápida, com o melhor preço e sua bebida gelada. Aqui você encontra cerveja gelada, vodka, vinho, licor, whisky, 
                refrigerantes e gelo. De marcas nacionais e internacionais para que aproveite bastante seus momentos de diversão. 
                Contamos também com artigos de tabacaria. Tudo em embalagens… Entregamos em Stella Maris, Praia do flamengo e Farol de Itapuã. 
                Venha comprar sua bebida conosco, nos ligue ou chame pelo WhatsApp que também levamos até você para sua maior comodidade." 
                </p>
                <button onClick={toggleReadMore} className="px-4 underline">{isExpanded ? 'Ler menos' : 'Ler mais'}</button>
            </div>
        </section>
    )
}