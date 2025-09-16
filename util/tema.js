'use client'
import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ProvedorDeTema({ children }) {
    const [tema, setTema] = useState('claro');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const temaSalvo = localStorage.getItem('tema') || 'claro';
            setTema(temaSalvo);
        }
    }, []);

    const toggleTema = () => {
        const novoTema = tema === 'claro' ? 'escuro' : 'claro';
        setTema(novoTema);
        localStorage.setItem('tema', novoTema);
    };

    return (
        <ThemeContext.Provider value={{ tema, toggleTema }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTema() {
    return useContext(ThemeContext);
}
