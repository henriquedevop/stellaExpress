import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";


export function Footer() {
    return (
      <footer className="bg-gray-200 border-1 mt-11 flex items-center justify-center p-5">
        <div className="text-gray-500">
          © {new Date().getFullYear()} Stella Express. Todos os direitos reservados.
        </div>
      </footer>
    );
  }
  