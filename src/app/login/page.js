'use client'

import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

import Spinner from "../../../util/spinner"

import { Autenticacao } from "../../../util/autenticacao"
import { showAlert } from "../../../util/notificacao"

import "./page.css"

export default function Login() {

    const [spinner, setSpinner] = useState(false);

    const [lembrarUsuario, setLembraUsuario] = useState(false);

    const [dados, setDados] = useState({
        email: "",
        senha: ""
    })

    const router = useRouter();
    const expirationDate = 7;

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        setDados(
            (prev) => ({
                ...prev,
                [name]: value,
            })
        )
    }

    const handleChangeCheckBox = (e) => {
        setLembraUsuario(e.target.checked)
    }

    useEffect(() => {

        console.log(lembrarUsuario)

        const email = dados?.email;

        if (email && lembrarUsuario === true) {

            localStorage.setItem('usuario', email);
        }
        else {
            localStorage.clear('usuario');
        }

    }, [lembrarUsuario])

    const handleSubmit = async (e) => {

        e.preventDefault()

        const email = localStorage.getItem('usuario') || dados?.email;
        const senha = dados?.senha;

        setSpinner(true);
        setTimeout(() => {
            const resposta = Autenticacao(email, senha);
            setSpinner(false);

            if (resposta === true) {
                try {
                    Cookies.set('token', 'token_coletado', {
                        expires: expirationDate,
                        secure: true,
                        sameSite: 'strict'
                    });
                    router.push('/dashboard');
                } catch (error) {
                    showAlert({
                        title: 'Erro',
                        text: 'Erro ao prosseguir',
                        imageUrl: '/alerts/erro.png',
                        imageAlt: 'Imagem de Erro'
                    });
                    console.log(error);
                }
            }
        }, 2000); 
    }

    return (
        <div className="container-login">
            {spinner && <Spinner />}
            <form className="conteudo-login" onSubmit={handleSubmit}>
                <div className="texto-login">
                    <h1>Login</h1>
                </div>
                <div className="inputs-login">
                    <input name="email" type="text" placeholder="Usuário" id="usuario" onChange={handleChangeInput} value={dados?.email} />
                    <input name="senha" type="password" placeholder="Senha" id="senha" onChange={handleChangeInput} value={dados?.senha} />
                </div>
                <div className="container-lembrar-usuario">
                    <input name="lembrar-email" type="checkbox" checked={lembrarUsuario} onChange={handleChangeCheckBox} />
                    Lembrar Usuário
                </div>
                <div className="container-botao-login">
                    <button>Entrar</button>
                </div>
            </form>
        </div>
    )
}