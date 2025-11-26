import { EventCard } from "../../components/EventCard"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const HomePage = () => {
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
                    <EventCard
                        img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                        title="Exposiçao de Arte Comtemporânea"
                        address="Galeria Arte Moderna"
                        date="15 de Dezembro 2029"
                    />
                     <EventCard
                        img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                        title="Festival de Música Independente"
                        address="Centro Cultural Paulista"
                        date="20 de Janeiro 2026"
                    />
                     <EventCard
                        img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                        title="Noite de Teatro Experimental"
                        address="Teatro Municipal"
                        date="30 de Junho 2026"
                    />
                </div>
            </main>

            <Footer />
        </div>
    )
}