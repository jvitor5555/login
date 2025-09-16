'use client'

import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useState } from "react"

import Sppiner from "../components/util/spinner"
import { showAlert } from "../components/util/notificacao"
import Autenticacao from "../components/util/autenticacao"

import "./page.css"

export default function Login() {

    const router = useRouter();
    const expirationDate = 7;

    console.log(expirationDate);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            Cookies.set('token', 'token_coletado', {
                expires: expirationDate,
                secure: true,
                sameSite: 'strict'
            })
            router.push('/dashboard');
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container-login">
            <form className="conteudo-login" onSubmit={handleSubmit}>
                <div className="texto-login">
                    <h1>Login</h1>
                </div>
                <div className="inputs-login">
                    <input type="text" placeholder="Usuário" />
                    <input type="password" placeholder="Senha" />
                </div>
                <div className="container-botao-login">
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    )
}