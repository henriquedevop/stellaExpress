import { InboxIcon } from "@heroicons/react/16/solid";

export function Products() {
    return (
        <section className="mx-8 mt-8 md:mx-16 lg:mx-24" id="products">
            <h3 className="font-extrabold text-3xl flex items-center gap-1">
                Nossos Produtos <InboxIcon className="size-8" />
            </h3>
            <div className="bg-white rounded-lg w-full shadow-md mt-8">
                <ul className="font-semibold text-2xl text-neutral-400 p-4 flex flex-col gap-2">
                    <li>- Cerveja</li>
                    <li>- Refrigerante</li>
                    <li>- Água (garrafão)</li>
                    <li>- Carvão</li>
                    <li>- Gelo</li>
                    <li>- Bebidas em geral</li>
                    <li>- Aluguel de caixas térmicas</li>
                    <li>- Tabacaria</li>
                    <li>- Embalagens</li>
                    <li>- Artigos para festa</li>
                </ul>
            </div>
        </section>
    );
}
