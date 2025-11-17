import { Link } from "react-router-dom"
import { Logo } from "../../assets/Logo"
import { Button } from "../Button"

export const Header = () => {
    const token = !!localStorage.getItem("token")

    return (
        <header className="bg-neutral-50 shadow-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex justify-between items-center">
                    <section className="flex gap-4">
                        <Link to="/">
                            <Logo />
                        </Link>
                    </section>

                    <section className="flex gap-3">
                        {!token ? (
                            <Link to="/entrar">
                                <Button>
                                    Entrar
                                </Button>
                            </Link>
                        ) : (
                            <Button>
                                Sair
                            </Button>
                        )}

                    </section>
                </div>
            </div>
        </header>
    )
}