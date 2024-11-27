import { FaWhatsapp } from "react-icons/fa"

export function Home() {
    return (
        <main>

            <section className="mt-16 mx-8 flex flex-col gap-4 md:gap-8 md:items-start md:mx-16 lg:mx-24">
                <h1 className="max-w-52 font-extrabold text-3xl md:max-w-full md:text-4xl lg:text-5xl">A MELHOR DISTRIBUIDORA DE STELLA E REGIÃO</h1>
                <div className="flex items-center gap-1">
                    <a href="https://api.whatsapp.com/send/?phone=%2B5571988545049&text&type=phone_number&app_absent=0" className="bg-black rounded-md text-white font-bold text-xl px-4 py-1 text-center self-start">Fale conosco</a>
                    <a href="https://api.whatsapp.com/send/?phone=%2B5571988545049&text&type=phone_number&app_absent=0"><FaWhatsapp className="size-8"/></a>
                </div>
                <h3 className="font-semibold text-gray-500">Faça seu pedido pelo whatsapp</h3>
            </section>

            <section className="mx-8 mt-8 md:mx-16 lg:mx-24" id="loc">
                <h2 className="font-extrabold text-3xl">Nossa unidade</h2>
                <div className="flex justify-center items-center my-8 md:justify-start">
                    <div className="w-full max-w-4xl h-96 shadow-lg rounded-lg overflow-hidden border border-gray-200">
                        <iframe 
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.6264112841632!2d-38.3321925166933!3d-12.936338731236779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71617f00158fb1d%3A0x8a8fbc40c4fbcd8d!2sSTELLA%20EXPRESS!5e0!3m2!1spt-BR!2sbr!4v1732665864515!5m2!1spt-BR!2sbr"
                         className="w-full h-full border-0" 
                         loading="lazy">
                        </iframe>
                    </div>
                </div>
            </section>
            
        </main>
    )
}