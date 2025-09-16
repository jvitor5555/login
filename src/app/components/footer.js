'use client'

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaGithub
} from 'react-icons/fa';

import "../../../css/footer.css"

export default function Footer({ mensagem, texto1, texto2, texto3 }) {

    return (
        <footer>
            <div className="mensagem">
                <h1>{mensagem}</h1>
            </div>
            <div className="texto">
                <p>{texto1}</p>
                <p>{texto2}</p>
            </div>
            <div className="icones">
                <FaFacebook style={{ color: '#1877f2' }} />
                <FaTwitter style={{ color: '#1DA1F2' }} />
                <FaInstagram style={{ color: '#E1306C' }} />
                <FaLinkedin style={{ color: '#0077b5' }} />
                <FaYoutube style={{ color: '#FF0000' }} />
                <FaGithub style={{ color: '#333' }} />
            </div>
            <div className="texto-final">
                <p>{texto3}</p>
            </div>
        </footer>
    )
}