import { Clock } from "lucide-react"
import { Calendar } from "lucide-react"
import { MapPin } from "lucide-react"
import { XCircle } from "lucide-react"
import { CheckCircle } from "lucide-react"

const STATUS = {
    approved: "Aprovado",
    reject: "Reprovado",
    pending: "Pendente"
}

export const RequestCard = ({ variant = "supporter", title, status, address, date, artist, description }) => {

    return (
        <div className="bg-neutral-50 rounded-xl shadow-sm border border-slate-600 p-6">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <article className="flex items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold text-slate-900">
                            {title}
                        </h3>

                        <figure className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 ${status === "approved" ? "bg-emerald-100 text-emerald-700" : status === "reject" ? "bg-red-100 text-red-700" : "bg-amber-100 text-ambert-700"
                            }`}>
                            {status === "approved" && <CheckCircle className="w-3 h-3" />}
                            {status === "reject" && <XCircle className="w-3 h-3" />}
                            {status === "pending" && <Clock className="w-3 h-3" />}

                            {STATUS[status]}
                        </figure>
                    </article>

                    <div className="grid md:grid-cols-2 gap-3 text-sm text-slate-600">
                        <figure className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{address}</span>
                        </figure>

                        {variant === "supporter" &&
                            <>
                                <figure className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{date}</span>
                                </figure>

                                <article className="md:col-span-2">
                                    <span className="font-medium text-slate-900">{artist.name}</span>
                                </article>

                                <p className="mt-3 text-slate-600">{description}</p>
                            </>
                        }

                        {variant === "artist" && (
                            <figure className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{date}</span>
                            </figure>
                        )}
                    </div>
                </div>

                {variant === "supporter" && status === "pending" && (
                    <div className="flex gap-2 ml-4">
                        <button className="px-4 py-2 bg-emerald-600 cursor-pointer text-neutral-50 rounded-lg hover:bg-emerald-700 transition-colors flex items-center gap-2">
                            <CheckCircle className="w-4 h-4" />
                            Aprovar
                        </button>

                        <button className="px-4 py-2 bg-red-600 cursor-pointer text-neutral-50 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2">
                            <XCircle className="w-4 h-4" />
                            Aprovar
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}