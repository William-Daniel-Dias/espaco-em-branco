import { ArrowLeft } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { Footer } from "../../components/Footer"
import { Share2 } from "lucide-react"
import { Heart } from "lucide-react"
import { Calendar } from "lucide-react"
import { MapPin } from "lucide-react"
import { Users } from "lucide-react"
import { useState, useEffect } from "react"
import { TrendingUp } from "lucide-react"
import axios from "axios"
import { toast } from "react-toastify"

export const EventPage = () => {
    const { id } = useParams()
    const token = !!localStorage.getItem("token")

    const [amount, setAmount] = useState(10)
    const [event, setEvent] = useState(null)

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = async () => {
        try {
            const response = await axios.get(`/events/${id}`, {
                baseURL: import.meta.env.VITE_API_URL
            })

            setEvent(response.data)
        } catch (error) {
            console.error({ getSpacesError: error })
        }
    }

    const handleSubmit = async () => {

        try {
            const payload = { value: amount, eventId: id }

            const response = await axios.post(`/payments`, payload, {
                baseURL: import.meta.env.VITE_API_URL,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })

            if(response.status === 201){

                toast.success("Contribuição realizada com sucesso")
    
                getEvents()
            }
        } catch (error) {
            console.error({ handleSubmitError: error })

            toast.error("ocorreu um erro! Tente novamente em instantes")

        }
    }

    if (!event) return

    const progressPercentage = (event.currentProgress / event.financialGoal) * 100;


    return (
        <div className="min-h-screen bg-neutral-200">
            <header className="bg-neutral-50 shadow-sm border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors">
                        <ArrowLeft className="w-6 h-5">Voltar</ArrowLeft>
                    </Link>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <div className="bg-neutral-50 rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
                            <figure className="h-96 bg-linear-to-br from-slate-200 to-slate-300">
                                <img
                                    src={event.imageUrl}
                                    alt={event.title}
                                    className="h-full w-full"
                                />
                            </figure>

                            <div className="p-8">
                                <section className="flex items-start justify-between mb-6">
                                    <article>
                                        <h1 className="text-4xl font-bold text-slate-900 mb-2">{event.title}</h1>

                                        <p className="text-slate-600">por {event.artist.name}</p>
                                    </article>

                                    <section className="flex gap-2">
                                        <button className="p-3 border cursor-pointer border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                                            <Share2 className="w-5 h-5 text-slate-600" />
                                        </button>

                                        <button className="p-3 border cursor-pointer border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
                                            <Heart className="w-5 h-5 text-slate-600" />
                                        </button>
                                    </section>
                                </section>

                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    <article className="bg-slate-50 rounded-lg p-4">
                                        <Calendar className="w-6 h-6 text-slate-900 mb-2" />
                                        <p className="text-sm text-slate-600">Data</p>
                                        <p className="font-semibold text-slate-900">{new Date(event.dateTime).toLocaleDateString('pt-BR', { hour12: false })}</p>
                                    </article>

                                    <article className="bg-slate-50 rounded-lg p-4">
                                        <MapPin className="w-6 h-6 text-slate-900 mb-2" />
                                        <p className="text-sm text-slate-600">Local</p>
                                        <p className="font-semibold text-slate-900">{event.space.name}</p>
                                    </article>

                                    <article className="bg-slate-50 rounded-lg p-4">
                                        <Users className="w-6 h-6 text-slate-900 mb-2" />
                                        <p className="text-sm text-slate-600">Capacidade</p>
                                        <p className="font-semibold text-slate-900">{event.space.capacity}</p>
                                    </article>
                                </div>

                                <article className="mb-8">
                                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Sobre o Evento</h2>
                                    <p className="text-slate-600 leading-relaxed">{event.description}</p>
                                </article>

                                <div className="bg-slate-50 rounded-lg p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">Informações do espaço</h3>

                                    <article className="space-y-2 text-slate-600">
                                        <p><span className="font-semibold text-slate-900">Endereço:</span>{event.space.address}</p>
                                        <p><span className="font-semibold text-slate-900">Capacidade:</span> {event.space.capacity} pessoas</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-neutral-50 rounded-xl shadow-sm border border-slate-200 p-6 sticky top-6">
                            <div className="mb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-sm text-slate-600">Progresso da Campanha</span>
                                    <span className="text-sm font-semibold text-slate-900">{progressPercentage.toLocaleString({ maximumFractionDigits: 0 })}%</span>
                                </div>

                                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden mb-3">
                                    <div className="bg-linear-to-r from-emerald-500 to-emerald-600 h-full rounded-full transition-all duration-500"
                                        style={{ width: `${progressPercentage}%` }} />
                                </div>

                                <div className="flex justify-between mb-6">
                                    <article>
                                        <p className="text-2xl font-bold text-slate-900">{event.currentProgress.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}</p>
                                        <p className="text-sm text-slate-600">Arrecadado</p>
                                    </article>

                                    <article className="text-right">
                                        <p className="text-2xl font-bold text-slate-900">{event.financialGoal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL', maximumFractionDigits: 2 })}</p>
                                        <p className="text-sm text-slate-600">Meta</p>
                                    </article>
                                </div>

                                <div className="border-t border-slate-200 pt-6">
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Valor da contribuição</label>

                                        <fieldset className="flex items-center gap-3">
                                            <button
                                                onClick={() => setAmount(Math.max(1, amount - 1))}
                                                className="cursor-pointer w-10 h-10 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-semibold">
                                                -
                                            </button>
                                            <input type="number" value={amount} onChange={event => setAmount(Math.max(1, parseInt(event.target.value) || 1))} step={1} className="flex-1 text-center px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none font-semibold" />
                                            <button
                                                onClick={() => setAmount(amount + 1)}
                                                className="cursor-pointer w-10 h-10 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors font-semibold">
                                                +
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>

                                <button onClick={handleSubmit} disabled={!token} className="w-full py-3 bg-slate-900 text-neutral-50 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 font-medium text-lg cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                                    <TrendingUp className="w-5 h-5" />
                                    Contribuir
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}