import { InboxIcon } from "@heroicons/react/16/solid"

export function Products() {
    return (
        <section className="mx-8 mt-8" id="products">
            <h3 className="font-extrabold text-3xl flex items-center gap-1">Nossos produtos <InboxIcon className="size-8"/></h3>
            <div className="bg-white rounded-lg w-full shadow-md mt-8">
                <ul className="font-semibold text-2xl text-neutral-400 p-4 flex flex-col gap-2">
                    <li>-Cerveja</li>
                    <li>-Refrigerante</li>
                    <li>-Agua garrafao</li>
                    <li>-carvao</li>
                    <li>-gelo</li>
                    <li>-bebidas em geral</li>
                    <li>-aluguel de caixas termicas</li>
                    <li>-tabacaria</li>
                    <li>-embalagens</li>
                    <li>-artigos de festa</li>
                </ul>
            </div>
        </section>
    )
}