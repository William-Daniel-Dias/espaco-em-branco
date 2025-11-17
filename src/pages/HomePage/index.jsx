import { EventCard } from "../../components/EventCard"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const HomePage = () => {
    return (
        <div className="min-h-screen bg-neutral-200">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="mb-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Eventos Ativos</h2>
                    <p className="text-slate-600">
                        Apoie eventos culturais em Araraquara
                    </p>
                </article>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EventCard
                        img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                        title="Exposiçao de Arte comtemporânea"
                        address="Galeria Arte Moderna"
                        date="15 de Dezembro 2029"
                    />
                     <EventCard
                        img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                        title="Exposiçao de Arte comtemporânea"
                        address="Galeria Arte Moderna"
                        date="15 de Dezembro 2029"
                    />
                     <EventCard
                        img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                        title="Exposiçao de Arte comtemporânea"
                        address="Galeria Arte Moderna"
                        date="15 de Dezembro 2029"
                    />
                </div>
            </main>

            <Footer />
        </div>
    )
}