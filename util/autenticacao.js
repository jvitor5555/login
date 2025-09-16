'use client'

import { flightRouterStateSchema } from "next/dist/server/app-render/types";
import { showAlert } from "../util/notificacao";

export function Autenticacao(email, senha) {

    const erros = [];

    if (!email || email.trim().length === 0) {
        erros.push("• Login");
    }

    if (!senha || senha.trim().length === 0) {
        erros.push("• Senha");
    }

    if (erros.length) {
        showAlert({
            title: 'Erro',
            text: '',
            imageUrl: '/alerts/erro.png',
            imageAlt: 'Imagem de Erro',
            html: `
        <p>
        <div style="margin-bottom: 10px;">Foram encontrados ${erros.length} erro(s)</div>
        <div style="margin-bottom: 5px;">Preencha o(s) campo(s):</div>
          ${erros.map((erro) => `<div style="margin: 5px;">${erro}</div>`).join("")}
        </p>`
        });
        return false;
    }

    if (email === 'admin' && senha === 'admin123') {
        return true;
    } else {
        showAlert({
            title: 'Erro',
            text: 'Login ou senha incorreto',
            imageUrl: '/alerts/erro.png',
            imageAlt: 'Imagem de Erro'
        });
        return false;
    }
}
