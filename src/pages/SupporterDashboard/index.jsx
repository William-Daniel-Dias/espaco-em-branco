import { useState } from "react"
import { Button } from "../../components/Button"
import { EventCard } from "../../components/EventCard"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { RequestCard } from "../../components/RequestCard"
import { TextField } from "../../components/TextField"

export const SupporterDashboard = () => {
    const [showAddForm, setShowAddForm] = useState(false)

    return (
        <div className="min-h-screen bg-neutral-200">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-slate-900">Painel do Apoiador</h2>

                        <Button onClick={() => setShowAddForm(!showAddForm)}>
                            Adicionar Espaço
                        </Button>
                    </div>

                    {
                        showAddForm && (
                            <div className="bg-neutral-50 rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Novo espaço</h3>

                                <form className="grid md:grid-cols-2 gap-6">
                                    <TextField label="Nome do espaço" name="place-name" id="place-name" type="text" placeholder="Ex. Galeria de Arte Moderna" />
                                    <TextField label="Capacidade" name="capaccity" id="capaccity" type="number" min="1" step="1" placeholder="Ex. 100" />
                                    <div className="md:col-span-2">

                                        <TextField label="Endereço" name="address" id="address" type="text" placeholder="Rua, número, bairro, cidade" />
                                    </div>
                                    <div className="md:col-span-2">

                                        <TextField label="URL da foto" name="photo_url" id="photo_url" type="text" placeholder="http://exemplo.com/foto.png" />
                                    </div>
                                    <div className="md:col-span-2">

                                        <fieldset>
                                            <label htmlFor="rules" className="block text-sm font-medium text-slate-700 mb-2">Regras do espaço</label>
                                            <textarea
                                                className="w-full resize-none px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                                                name="rules"
                                                id="rules"
                                                rows={4}
                                                placeholder="Descreva as regras e condições de uso do espaço...">
                                            </textarea>
                                        </fieldset>
                                    </div>
                                    <div className="md:col-span-2">
                                        <Button>
                                            Cadastrar Espaço
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        )
                    }

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
                        <RequestCard
                            title="Workshop de Fotografia "
                            status="approved"
                            address="Galeria de arte Moderna"
                            date="04 de dezembro de 2025"
                            artist={{ name: "Juninho Pray" }}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, eveniet maiores. Asperiores ut eaque voluptatem? Sit quia impedit error tempora accusamus vel exercitationem placeat consequatur quasi, dolorum assumenda esse est."
                        />

                        <RequestCard
                            title="Workshop de Fotografia "
                            status="reject"
                            address="Galeria de arte Moderna"
                            date="04 de dezembro de 2025"
                            artist={{ name: "Juninho Pray" }}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, eveniet maiores. Asperiores ut eaque voluptatem? Sit quia impedit error tempora accusamus vel exercitationem placeat consequatur quasi, dolorum assumenda esse est."


                        />

                        <RequestCard
                            title="Workshop de Fotografia "
                            status="pending"
                            address="Galeria de arte Moderna"
                            date="04 de dezembro de 2025"
                            artist={{ name: "Juninho Pray" }}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, eveniet maiores. Asperiores ut eaque voluptatem? Sit quia impedit error tempora accusamus vel exercitationem placeat consequatur quasi, dolorum assumenda esse est."


                        />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}