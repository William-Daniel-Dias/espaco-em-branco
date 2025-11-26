import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <header className="bg-neutral-50 shadow-sm border-t border-slate-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <article className="text-center">
                   <Link to="/">
                    <h3 className="text-2x1 font-bold text-slate-950">Espaço em Branco - Plataforma Virtual de Eventos Culturais</h3>
                   </Link>
                    <p className="text-slate-500 mt-1">Conectando espaços, artistas e o pública em uma experência cultural única</p>
                </article>
            </div>
        </header>
    )
}