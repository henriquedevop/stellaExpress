import { ArrowUpOnSquareStackIcon } from "@heroicons/react/16/solid"
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa"

export function Contact() {
    return (
        <>
        <section className="mx-8 mt-8">
            <h3 className="font-extrabold text-3xl flex items-center gap-1">Redes sociais</h3>
            <div className="bg-white rounded-lg w-full shadow-md mt-8">
                <h4 className="p-4 font-semibold text-lg flex items-center gap-2">Instagram <FaInstagram className="size-4"/> </h4>
            </div>
        </section>

        <section className="mx-8 mt-8" id="contact">
            <h3 className="font-extrabold text-3xl flex items-center gap-1">Contato <ArrowUpOnSquareStackIcon className="size-8"/></h3>
                <div className="bg-white rounded-lg w-full shadow-md mt-8">
                    <h4 className="p-4 font-semibold text-lg flex items-center gap-2">Instagram <FaInstagram className="size-4"/> </h4>
                    <h4 className="p-4 font-semibold text-lg flex items-center gap-2 border-y-2">Whatsapp <FaWhatsapp className="size-4"/> </h4>
                    <h4 className="p-4 font-semibold text-lg flex items-center gap-2">Telefone <FaPhone className="size-4"/> </h4>
                </div>
        </section>

        </>
    )
}