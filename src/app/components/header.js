'use client'

import React, { useState, useEffect } from "react"
import "../../../css/header.css"
import { useTema } from "../../../util/tema"

export default function Header({ buscar = false }) {
    const { tema } = useTema()
    const [mounted, setMounted] = useState(false)
    const [pesquisa, setPesquisa] = useState(false)
    const [busca, setBusca] = useState("")
    const [scrollAnterior, setScrollAnterior] = useState(null)

    const secoes = [
        { id: "administrador", titulo: "Área do Administrador" },
        { id: "relatorios", titulo: "Relatórios" },
        { id: "usuarios", titulo: "Usuários" },
        { id: "alertas", titulo: "Alertas" },
        { id: "configuracoes", titulo: "Configurações" },
        { id: "logs", titulo: "Logs" }
    ]

    function estaTotalmenteVisivel(el) {
        const rect = el.getBoundingClientRect()
        const alturaViewport = window.innerHeight || document.documentElement.clientHeight
        return !(rect.top < 0 || rect.bottom > alturaViewport)
    }

    useEffect(() => setMounted(true), [])
    useEffect(() => setPesquisa(buscar === true), [buscar])

    useEffect(() => {
        if (!mounted) return
        let timeoutId

        secoes.forEach(secao => {
            const el = document.getElementById(secao.id)
            if (el) el.style.outline = ""
        })

        if (busca === "") {
            if (scrollAnterior !== null) {
                window.scrollTo({ top: scrollAnterior, behavior: "smooth" })
                setScrollAnterior(null)
            }
            return
        }

        timeoutId = setTimeout(() => {
            const secaoEncontrada = secoes.find(secao =>
                secao.titulo.toLowerCase().includes(busca.toLowerCase())
            )

            if (secaoEncontrada) {
                const elemento = document.getElementById(secaoEncontrada.id)
                if (elemento) {
                    if (!estaTotalmenteVisivel(elemento)) {
                        if (scrollAnterior === null) setScrollAnterior(window.scrollY)
                        elemento.scrollIntoView({ behavior: "smooth" })
                    }
                    elemento.style.outline = "3px solid #FF0"
                }
            }
        }, 300)

        return () => clearTimeout(timeoutId)
    }, [busca, mounted])

    if (!mounted) return null

    const classeHeader = tema === "claro" ? "header-claro" : "header-escuro"
    const handleBusca = (e) => setBusca(e.target.value)

    return (
        <header className={classeHeader}>
            <div className="bt-container-mensagem">
                <h1>EcoFlow <span>Admin</span></h1>
            </div>

            {pesquisa && (
                <div className="bt-container-relativo">
                    <div className="bt-container-pesquisa">
                        <input
                            type="text"
                            placeholder="Buscar..."
                            onChange={handleBusca}
                            value={busca}
                        />
                    </div>
                </div>
            )}

            <nav className="bt-container-links">
                {secoes.map(secao => (
                    <a key={secao.id} href={`#${secao.id}`}>
                        {secao.titulo}
                    </a>
                ))}
                <div className="bt-container-imagem">
                    <img src="/perfil/perfil.webp" alt="Imagem de perfil" />
                </div>
            </nav>
        </header>
    )
}