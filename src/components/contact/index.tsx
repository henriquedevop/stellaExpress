import { ArrowUpOnSquareStackIcon } from "@heroicons/react/16/solid"
import { FaInstagram, FaWhatsapp, FaPhone } from "react-icons/fa"

export function Contact() {
    return (
        <>
        <section className="mx-8 mt-8">
            <h3 className="font-extrabold text-3xl flex items-center gap-1">Redes sociais</h3>
            <div className="bg-white rounded-lg w-full shadow-md mt-8">
                <a href="https://www.instagram.com/express_stella?igsh=MWtzYmtra3J4YzY0" className="p-4 font-semibold text-lg flex items-center gap-2">Instagram <FaInstagram className="size-4"/> </a>
            </div>
        </section>

        <section className="mx-8 mt-8" id="contact">
            <h3 className="font-extrabold text-3xl flex items-center gap-1">Contato <ArrowUpOnSquareStackIcon className="size-8"/></h3>
                <div className="bg-white rounded-lg w-full shadow-md mt-8">
                <a href="https://www.instagram.com/express_stella?igsh=MWtzYmtra3J4YzY0" className="p-4 font-semibold text-lg flex items-center gap-2">Instagram <FaInstagram className="size-4"/> </a>
                    <a href="https://api.whatsapp.com/send/?phone=%2B5571988545049&text&type=phone_number&app_absent=0" className="p-4 font-semibold text-lg flex items-center gap-2 border-y-2">Whatsapp <FaWhatsapp className="size-4"/> </a>
                    <h4 className="p-4 font-semibold text-lg flex items-center gap-2">Telefone: 71 98854-5049 <FaPhone className="size-4"/> </h4>
                </div>
        </section>

        </>
    )
}