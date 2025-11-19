import { useState } from 'react';
import { Search, MapPin, Users, Plus, Calendar } from 'lucide-react';
import { Header } from '../../components/Header';
import { TextField } from '../../components/TextField';

export const ArtistPage = () => {
    const [activeTab, setActiveTab] = useState('places');
    const [showRequestForm, setShowRequestForm] = useState(false);
    const [selectedEspaco, setSelectedEspaco] = useState(null);
    const [showEventForm, setShowEventForm] = useState(false);

    const handleRequestSpace = (spaceId) => {
        setSelectedEspaco(spaceId);
        setShowRequestForm(true);
    };

    return (
        <div className="min-h-screen">
            <Header />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex gap-4 mb-8 border-b border-slate-200">
                    <button
                        onClick={() => setActiveTab('places')}
                        className={`px-6 py-3 font-medium transition-colors border-b-2 ${activeTab === 'places'
                            ? 'border-slate-900 text-slate-900'
                            : 'border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                    >
                        Buscar Espaços
                    </button>
                    <button
                        onClick={() => setActiveTab('request')}
                        className={`px-6 py-3 font-medium transition-colors border-b-2 ${activeTab === 'request'
                            ? 'border-slate-900 text-slate-900'
                            : 'border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                    >
                        Minhas Solicitações
                    </button>
                    <button
                        onClick={() => setActiveTab('events')}
                        className={`px-6 py-3 font-medium transition-colors border-b-2 ${activeTab === 'events'
                            ? 'border-slate-900 text-slate-900'
                            : 'border-transparent text-slate-600 hover:text-slate-900'
                            }`}
                    >
                        Meus eventos
                    </button>
                </div>

                {activeTab === 'places' && (
                    <div>
                        <section className="mb-6">
                            <fieldset className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Buscar espaços por localização, capacidade..."
                                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none"
                                />
                            </fieldset>
                        </section>

                        {showRequestForm && (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Solicitar Uso do Espaço</h3>
                                <form className="space-y-6">
                                    <TextField label="Título do Evento" name="title" id="title" type="text" />

                                    <div className="grid grid-cols-2 gap-4">
                                        <TextField label="Data" name="date" id="date" type="date" />
                                        <TextField label="Horário" name="time" id="time" type="time" />
                                    </div>

                                    <TextField label="Descrição do Evento" name="description" id="description" type="text" />


                                    <div className="flex gap-3">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                                        >
                                            Enviar Solicitação
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowRequestForm(false)}
                                            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    id: 1,
                                    img: "https://images.unsplash.com/photo-1680573346177-16adaf21f56f",
                                    name: "Workshop de Fotografia",
                                    address: "Galeria de arte Moderna",
                                    capacity: 300
                                }].map((espaco) => (
                                    <div key={espaco.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-all">
                                        <figure className="h-48 bg-linear-to-br from-slate-200 to-slate-300">
                                            <img src={espaco.img} alt={espaco.name} className="w-full h-full object-cover" />
                                        </figure>

                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                                {espaco.name}
                                            </h3>
                                            <section className="space-y-2 mb-4">
                                                <figure className="flex items-center gap-2 text-slate-600 text-sm">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>{espaco.address}</span>
                                                </figure>
                                                <figure className="flex items-center gap-2 text-slate-600 text-sm">
                                                    <Users className="w-4 h-4" />
                                                    <span>Capacidade: {espaco.capacity} pessoas</span>
                                                </figure>
                                            </section>

                                            <button
                                                onClick={() => handleRequestSpace(espaco.id)}
                                                className="w-full py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 font-medium"
                                            >
                                                <Plus className="w-4 h-4" />
                                                Solicitar Espaço
                                            </button>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                )}

                {activeTab === 'request' && (
                    <div>
                        <div className="space-y-4">
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-slate-900">Exposição de Fotografia</h3>
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-700">
                                        Pendente
                                    </span>
                                </div>
                                <div className="space-y-2 text-sm text-slate-600">
                                    <figure className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>Centro Cultural Paulista</span>
                                    </figure>
                                    <figure className="flex items-center gap-2">
                                        <Calendar className="w-4 h-4" />
                                        <span>15 de Dezembro, 2024 - 19h</span>
                                    </figure>
                                </div>
                                <p className="mt-3 text-slate-600">Aguardando aprovação do apoiador do espaço.</p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'events' && (
                    <div>
                        <div className="flex justify-end mb-6">
                            <button
                                onClick={() => setShowEventForm(!showEventForm)}
                                className="px-6 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2 font-medium"
                            >
                                <Plus className="w-5 h-5" />
                                Criar Novo Evento
                            </button>
                        </div>

                        {showEventForm && (
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Criar Evento</h3>
                                <form className="space-y-6">
                                    <TextField label="Título do Evento" name="title" id="title" type="text" />
                                    
                                    <TextField label="Descrição" name="description" id="description" type="text" />
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        <TextField label="Data" name="date" id="date" type="date" />
                                        <TextField label="Horário" name="time" id="time" type="time" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <TextField label="Meta de Arrecadação" name="goal" id="goal" type="number" />
                                       
                                       
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            type="submit"
                                            className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium"
                                        >
                                            Criar Evento
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowEventForm(false)}
                                            className="px-6 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                {
                                    id: 1,
                                    status: "approved",
                                    date: "04 de dezembro de 2025",
                                    goal: 500,
                                    amount: 450
                                }
                            ].map((evento) => {
                                const progressPercentage = (evento.amount / evento.goal) * 100;

                                return (
                                    <div key={evento.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-slate-900">{evento.titulo}</h3>
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${evento.status === 'approved' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-700'
                                                }`}>
                                                {evento.status}
                                            </span>
                                        </div>
                                        <div className="space-y-3 mb-4">
                                            <div className="flex items-center gap-2 text-slate-600 text-sm">
                                                <Calendar className="w-4 h-4" />
                                                <span>{evento.date}</span>
                                            </div>
                                            
                                        </div>
                                        <div>
                                            <div className="flex justify-between text-sm mb-2">
                                                <span className="text-slate-600">Progresso</span>
                                                <span className="font-semibold text-slate-900">{progressPercentage.toFixed(0)}%</span>
                                            </div>
                                            <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                                                <div
                                                    className="bg-linear-to-r from-emerald-500 to-emerald-600 h-full rounded-full"
                                                    style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                                                />
                                            </div>
                                            <div className="flex justify-between text-sm mt-2">
                                                <span className="text-slate-600">R$ {evento.amount.toLocaleString('pt-BR')}</span>
                                                <span className="font-semibold text-slate-900">R$ {evento.goal.toLocaleString('pt-BR')}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}