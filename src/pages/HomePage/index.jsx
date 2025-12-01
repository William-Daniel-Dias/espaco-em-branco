import axios from "axios"
import { EventCard } from "../../components/EventCard"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { useState, useEffect } from "react"

export const HomePage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        getEvents()
    }, [])

    const getEvents = async () => {
        try {
            const response = await axios.get("/events", {
                baseURL: import.meta.env.VITE_API_URL

            })

            setEvents(response.data)
        } catch (error) {
            console.error({ getSpacesError: error })
        }
    }

    return (
        <div className="min-h-screen bg-gray-200">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-950 mb-2">Eventos Ativos</h2>
                    <p className="text-slate-500">
                        Apoie eventos culturais em Araraquara
                    </p>
                </article>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {events.map(item => (
                        <EventCard
                            key={item.id}
                            id={item.id}
                            img={item.imageUrl}
                            title={item.title}
                            capacity={item.space.capacity}
                            address={item.space.address}
                            date={new Date(item.dateTime).toLocaleDateString('pt-BR', { hour12: false })}
                        />
                    ))}

                </div>
            </main>

            <Footer />
        </div>
    )
}