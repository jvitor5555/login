'use client'

import { useState, useEffect } from "react";

export default function ClaroEscuro() {
    const [tema, setTema] = useState('claro');

    const alternarTema = () => {
        setTema(prev => prev === 'claro' ? 'escuro' : 'claro');
        localStorage.removeItem('tema');
        localStorage.setItem('tema', tema);
    }

    useEffect(() => {
        document.body.setAttribute('data-tema', tema);
    }, [tema]);

    useEffect(() => {
        const temaSalvo = localStorage.getItem('tema');
        if (temaSalvo) setTema(temaSalvo);
    }, []);

    useEffect(() => {
        document.body.setAttribute('data-tema', tema);
        localStorage.setItem('tema', tema);
    }, [tema]);

    return (
        <button onClick={alternarTema} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '300px', height: '30px', borderRadius: '10px', border: '1px solid black', fontFamily: "Roboto", letterSpacing: "0.5px", color: 'black', backgroundColor: 'aliceblue', cursor: 'pointer' }}>
            {tema === 'claro' ? 'Tema Escuro' : 'Tema Claro'}
        </button>
    )
}
