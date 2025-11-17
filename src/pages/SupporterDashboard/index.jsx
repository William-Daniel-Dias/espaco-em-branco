import { Button } from "../../components/Button"
import { EventCard } from "../../components/EventCard"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const SupporterDashboard = () => {
    return (
        <div className="min-h-screen bg-neutral-200">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">              
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">Painel do Apoiador</h2>

                        <Button>
                            Adicionar Espaço
                        </Button>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <EventCard
                            variant="supporter"
                            img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                            title="Exposiçao de Arte comtemporânea"
                            address="Galeria Arte Moderna"
                            capacity="200"
                            rules="Proibido cagar no chão"
                        />
                        <EventCard
                            variant="supporter"
                            img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                            title="Exposiçao de Arte comtemporânea"
                            address="Galeria Arte Moderna"
                            capacity="200"
                            rules="Proibido cagar no chão"
                        />
                        <EventCard
                            variant="supporter"
                            img="https://images.unsplash.com/photo-1680573346177-16adaf21f56f"
                            title="Exposiçao de Arte comtemporânea"
                            address="Galeria Arte Moderna"
                            capacity="200"
                            rules="Proibido cagar no chão"
                        />
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Solicitações de Uso</h2>

                    <div className="space-y-4">

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}