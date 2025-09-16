'use client'

import React, { useState, useEffect } from "react";

import "../css/header.css"

import '../../perfil.webp'

export default function Header({ buscar }) {

    const [pesquisa, setPesquisa] = useState(false);

    useEffect(() => {
        if (buscar === true) {
            setPesquisa(true);
        } else {
            setPesquisa(false);
        }
    }, [buscar])

    return (
        <>
            <header>
                <div className="bt-container-mensagem">
                    <h1>EcoFlow <span>Admin</span></h1>
                </div>
                {pesquisa === true ? (
                    <div className="bt-container-relativo">
                        <div className="bt-container-pesquisa">
                            <input type="text" placeholder="Buscar..." />
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                <nav className="bt-container-links">
                    <a href="">Dashboard</a>
                    <a href="">Solicitações</a>
                    <a href="">Detalhes de Solicitação</a>
                    <a href="">Monitoramento de Sensores</a>
                    <div className="bt-container-imagem">
                        <img 
                        src={urlImage} 
                        alt="Imagem de perfil" 
                        />
                    </div>
                </nav>
            </header>
        </>
    )
}