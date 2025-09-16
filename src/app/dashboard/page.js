'use client'

import Header from "../components/header"
import Footer from "../components/footer"
import ClaroEscuro from "../../../util/claro-escuro"
import { ProvedorDeTema } from "../../../util/tema";

import "./page.css"

export default function Dashboard() {
    return (
        <ProvedorDeTema>
            <div className="container-principal">
                <Header buscar={true} />
                <main className="conteudo-principal">
                    <section>
                        <ClaroEscuro />
                    </section>
                    <section id="administrador" className="secao-administrador">
                        <h2>Área do Administrador</h2>
                        <p>
                            Esta seção é dedicada aos administradores do sistema. Aqui é possível monitorar o status de todos os dispositivos, visualizar relatórios em tempo real e gerenciar usuários e permissões do sistema.
                        </p>
                    </section>
                    <section id="relatorios" className="secao-relatorios">
                        <h2>Relatórios em Tempo Real</h2>
                        <p>
                            Nesta seção, os administradores podem acessar relatórios detalhados sobre o desempenho do sistema, status de dispositivos e atividades dos usuários. Permite tomar decisões rápidas e monitorar métricas críticas em tempo real.
                        </p>
                    </section>
                    <section id="usuarios" className="secao-usuarios">
                        <h2>Gerenciamento de Usuários</h2>
                        <p>
                            Aqui é possível adicionar, remover ou atualizar usuários do sistema, atribuir permissões específicas e garantir que apenas pessoas autorizadas tenham acesso às funcionalidades críticas.
                        </p>
                    </section>
                    <section id="alertas" className="secao-alertas">
                        <h2>Alertas do Sistema</h2>
                        <p>
                            Nesta seção, os administradores podem visualizar alertas e notificações em tempo real, garantindo que qualquer problema seja identificado e resolvido rapidamente.
                        </p>
                    </section>
                    <section id="configuracoes" className="secao-configuracoes">
                        <h2>Configurações do Sistema</h2>
                        <p>
                            Aqui você pode ajustar parâmetros do sistema, definir limites, preferências e personalizar a experiência do monitoramento de acordo com as necessidades da empresa.
                        </p>
                    </section>
                    <section id="logs" className="secao-logs">
                        <h2>Logs de Atividade</h2>
                        <p>
                            Esta seção mostra todos os registros de ações realizadas no sistema, permitindo auditoria completa e rastreabilidade das operações realizadas pelos administradores e usuários.
                        </p>
                    </section>
                </main>
                <Footer
                    mensagem={"EcoFlow Admin"}
                    texto1={"Obrigado por nos visitar"}
                    texto2={"Siga nossas redes sociais"}
                    texto3={"© 2025 EcoFlow Admin - Todos os direitos reservados"}
                />
            </div>
        </ProvedorDeTema>
    )
}
