import { Building2 } from "lucide-react"
import { Users } from "lucide-react"
import { Palette } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { TextField } from "../../components/TextField"
import { Button } from "../../components/Button"

const ROLES = [
    {
        id: "supporter",
        title: "Apoiador",
        description: "Tenho um espaço para oferecer",
        icon: Building2,
        color: "from-blue-500 to-blue-600"
    },
    {
        id: "artist",
        title: "Artista",
        description: "Encontro espaços e realize seus eventos",
        icon: Palette,
        color: "from-purple-500 to-purple-600"
    },
    {
        id: "public",
        title: "Público",
        description: "Descubra e apoie eventos culturais",
        icon: Building2,
        color: "from-emerald-500 to-emerald-600"
    }
]

export const SignUpPage = () => {
    const [isRegister, setIsRegister] = useState(false)
    const [selectedRole, setSelectedRole] = useState(null)

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-6xl">
                <Link to="/" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 transition-colors">
                    <ArrowLeft className="w-6 h-5">Voltar</ArrowLeft>
                </Link>

                <div className="w-full bg-neutral-50 rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="bg-linear-to-br from-slate-900 to-slate-800 p-12 text-neutral-50">
                            <h2 className="text-4xl font-black mb-4">
                                Bem-vindo ao Espaço em Branco
                            </h2>
                            <p className="text-slate-300 text-lg font-extralight mb-8">
                                A plataforma que conecta espaços cuturais, artistas e púplico em uma experiência única.
                            </p>

                            <div className="space-y-4">
                                <section className="flex items-start gap-3">
                                    <figure className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Building2 className="w-5 h-5" />
                                    </figure>

                                    <article>
                                        <h3 className="font-semibold mb-1">Para apoiadores</h3>
                                        <p className="text-slate-300 text-sm">Ofereça seu espaço e apoie a cultura local </p>
                                    </article>
                                </section>

                                <section className="flex items-start gap-3">
                                    <figure className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Palette className="w-5 h-5" />
                                    </figure>

                                    <article>
                                        <h3 className="font-semibold mb-1">Para Artista</h3>
                                        <p className="text-slate-300 text-sm">Encontre espaços e realize seus eventos</p>
                                    </article>
                                </section>

                                <section className="flex items-start gap-3">
                                    <figure className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                                        <Users className="w-5 h-5" />
                                    </figure>

                                    <article>
                                        <h3 className="font-semibold mb-1">Para o Público </h3>
                                        <p className="text-slate-300 text-sm">Descubra e apoie eventos culturais</p>
                                    </article>
                                </section>
                            </div>
                        </div>

                        <div className="p-12">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                {isRegister ? "Criar conta" : "Entrar"}
                            </h3>
                            <p className="text-slate-600 mb-8">
                                Selecione como você quer participar
                            </p>

                            <form className="space-y-6">
                                <div className="grid gap-4">
                                    {ROLES.map(role => {
                                        const Icon = role.icon

                                        return (
                                            <button
                                                key={role.id}
                                                type="button"
                                                onClick={() => setSelectedRole(role.id)}
                                                className={`p-4 rounded-xl cursor-pointer border-2 transition-all text-left ${selectedRole === role.id ? 'border-slate-900 bg-slate-50' : "border-slate-200 hover:slate-300"}`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <figure className={`w-12 h-12 bg-linear-to-br ${role.color} rounded-lg flex items-center justify-center shrink-0`}>
                                                        <Icon className="w-6 h-6 text-neutral-50" />
                                                    </figure>

                                                    <article>
                                                        <h4 className="font-semibold text-slate-900">{role.title}</h4>
                                                        <p className="text-sm text-slate-600">{role.description}</p>
                                                    </article>
                                                </div>
                                            </button>
                                        )
                                    })}

                                    <TextField type="email" label="E-mail" id="email" name="email" placeholder="seu@email.com" required />

                                    <TextField type="password" label="Senha" id="password" name="password" placeholder="********" required />

                                    {
                                        isRegister && <TextField type="name" label="Nome Completo" id="name" name="name" placeholder="Seu nome" required />
                                    }

                                    <Button disabled={!selectedRole}>{isRegister ? "Criar conta" : "Entrar"}</Button>

                                    <p className="text-center text-sm text-slate-600">
                                        {isRegister ? "Já tem uma conta?" : "Não tem uma conta?"}{" "} 

                                        <button
                                        type="button"
                                        onClick={() => setIsRegister(!isRegister)}
                                        className="text-slate-900 font-semibold hover:underline cursor-pointer"
                                        >
                                            {!isRegister ? "Criar conta" : "Entrar"}
                                        </button>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}