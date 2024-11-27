import { InboxIcon, ArrowDownIcon, ArrowLeftIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export function Products() {

    const products = [
        { id: "cerveja", name: "Cerveja", details: ["Heineken", "Stella", "Devassa", "Brahma"] },
        { id: "refrigerante", name: "Refrigerantes", details: ["Coca-Cola", "Guaraná", "Pepsi"] },
        { id: "agua", name: "Água", details: ["Água mineral", "Água 20L"] },
        { id: "carvao", name: "Carvão", details: ["Carvão para churrasco"] }, 
        { id: "gelo", name: "Gelo", details: ["Gelo até 20Kg", "Gelo de coco"] }, 
        { id: "bebidasGeral", name: "Bebidas em geral", details: ["Whisky", "Gin", "Vinhos"] },
        { id: "tabacaria", name: "Tabacaria", details: ["Tabacos", "Sedas", "Charuto", "Isqueiro"] },
        { id: "embalagens", name: "Embalagens", details: ["Sacos plásticos", "Caixas de papelão", "Caixa de pizza", "Barca"] }, 
        { id: "festa", name: "Artigos de festa", details: ["Pratos", "Copos", "Talheres", "Guarda-napo"] }, 
    ];

    const [expendedItems, setExpandedItems] = useState<Record<string, boolean>>({})

    function toggleReadMore(id: string) {
        setExpandedItems((prev) => ({
            ...prev,
            [id]: !prev[id],
        }))
        console.log(expendedItems)
    }

    return (
        <section className="mx-8 mt-8 md:mx-16 lg:mx-24" id="products">
            <h3 className="font-extrabold text-3xl flex items-center gap-1">
                Nossos Produtos <InboxIcon className="size-8" />
            </h3>
            <div className="bg-white rounded-lg w-full shadow-md mt-8 flex flex-col justify-center">
                <ul className="font-semibold text-2xl text-neutral-400 p-4 flex flex-col gap-2">
                    {products.map((item) => (
                        <li key={item.id}>
                            <div className="flex justify-between">
                               - {item.name}
                               <button onClick={ () => toggleReadMore(item.id)}>{expendedItems[item.id] ? <ArrowLeftIcon className="size-6"/>
                                : <ArrowDownIcon className="size-6"/> }</button>
                            </div>
                            {expendedItems[item.id] && (
                                <ul>
                                    {item.details.map((detail, index) => (
                                        <li className="text-base my-1 text-gray-400 border-b mr-auto" key={index}>{detail}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <span className="text-gray-400 text-sm mb-3 w-full text-center font-semibold">Tudo isso e muito mais</span>
                <span className="text-gray-300 text-xs mb-3 w-full text-center font-semibold">Sempre consulte nossos vendedores para saber da disponibilidade</span>
            </div>
            <div className="flex flex-wrap gap-5 justify-between">
                <div className="lg:w-5/12 lg:h-40 w-full h-20 mt-5 bg-black rounded-md">
                    <div className="lg:mt-0 lg:h-40 bg-pratileira-bg w-full h-20 bg-cover bg-center opacity-50 rounded-md"></div>
                </div>
                <div className="lg:w-5/12 lg:h-40 w-full h-20 mt-5 bg-black rounded-md">
                    <div className="lg:mt-0 lg:h-40 bg-wine-bg w-full h-20 bg-cover bg-center opacity-50 rounded-md"></div>
                </div>
                <div className="lg:w-5/12 lg:h-40 w-full h-20 mt-5 bg-black rounded-md">
                    <div className="lg:mt-0 lg:h-40 bg-embalagem-bg w-full h-20 bg-cover bg-center opacity-50 rounded-md"></div>
                </div>
                <div className="lg:w-5/12 lg:h-40 w-full h-20 mt-5 bg-black rounded-md">
                    <div className="lg:mt-0 lg:h-40 bg-tabacaria-bg w-full h-20 bg-cover bg-center opacity-50 rounded-md"></div>
                </div>
                <div className="lg:w-5/12 lg:h-40 w-full h-20 mt-5 bg-black rounded-md">
                    <div className="lg:mt-0 lg:h-40 bg-snacks-bg w-full h-20 bg-cover bg-center opacity-50 rounded-md"></div>
                </div>
                <div className="lg:w-5/12 lg:h-40 w-full h-20 mt-5 bg-black rounded-md">
                    <div className="lg:mt-0 lg:h-40 bg-bebidas-bg w-full h-20 bg-cover bg-center opacity-50 rounded-md"></div>
                </div>
            </div>
        </section>
    );
}
