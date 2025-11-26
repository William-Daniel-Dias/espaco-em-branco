import { Plus } from "lucide-react"
import { HandFist } from "lucide-react"
import { Users } from "lucide-react"
import { Calendar } from "lucide-react"
import { MapPin } from "lucide-react"

export const EventCard = ({ img, title, address, date, capacity, rules, variant = "public" }) => {
    return (
        <div className="w-full bg-neutral-50 rounded-xl shadow-sm border border-slate-300 overflow-hidden hover:shadow-md transition-all cursor-pointer group">
            <figure className="h-48 bg-linear-to-br from-slate-200 to-slate-300 relative overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover grou=hover:scale-105 transition-transform duration-300" />
            </figure>

            <section className="p-6">
                <h3 className="text-xl font-bold text-slate-950 mb-2 group-hover:text-slate-600 transition-colors">
                    {title}
                </h3>

                <article className="space-y-2 mb-4">
                    <figure className="flex items-center gap-2 text-slate-600 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{address}</span>
                    </figure>

                    {variant === "supporter" || variant === "artist" && <figure className="flex items-center gap-2 text-slate-600 text-sm">
                        <Users className="w-4 h-4" />
                        <span> Capacidade: {capacity} pessoas</span>
                    </figure>}

                    {variant === "public" &&
                        <figure className="flex items-center gap-2 text-slate-600 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{date}</span>
                        </figure>
                    }
                </article>

                <article className={`${variant === "public" ? "flex items-center justify-end" : ""} pt-4 border-t border-slate-100`}>
                    {variant === "supporter" &&
                        <p className="text-sm text-slate-600">{rules}</p>}

                    {variant === "public" &&
                        <button className="cursor-pointer px-4 py-2 bg-slate-950 text-neutral-50 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium">
                            <HandFist className="w-4 h-4" />
                            Apoiar
                        </button>
                    }

                    {variant === "artist" &&
                        <button className="cursor-pointer px-4 py-2 bg-slate-900 text-neutral-50 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium">
                            <Plus className="w-4 h-4" />
                            Solicitar espaço
                        </button>
                    }
                </article>
            </section>
        </div>
    )
}