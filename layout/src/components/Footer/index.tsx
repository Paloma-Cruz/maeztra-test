
// INTERFACES
import { LinkType, SessionFooterProps } from '../../interfaces/footer';

// SASS
import style from './style.module.scss'

// HOOKS
import useDevice from '../../hooks/useDevice';
import Accordion from './components/Accordion';

const Footer = () => {
    const {isMobile} = useDevice();

    const sessionsFooter = [
        {
            title: "Informações",
            links: [
                {
                    text: "Quem Somos",
                    path: "#"
                },
                {
                    text: "Prazo de Envio",
                    path: "#"
                },
                {
                    text: "Trocas e Devoluções",
                    path: "#"
                },
                {
                    text: "Promoções e Cupons",
                    path: "#"
                }
            ]
        },
        {
            title: "Minha Conta",
            links: [
                {
                    text: "Minha Conta",
                    path: "#"
                },
                {
                    text: "Meus Pedidos",
                    path: "#"
                },
                {
                    text: "Cadastre-se",
                    path: "#"
                }
            ]
        },
        {
            title: "Onde nos Encontrar",
            links: [
                {
                    text: "Lojas",
                    path: "#"
                },
                {
                    text: "Endereço",
                    path: "#"
                }
            ]
        }
    ];

    if (isMobile) {
        return (
            <footer className={style.container_accordions_footer}>
                {sessionsFooter.map((session: SessionFooterProps) => (
                    <Accordion key={session.title} title={session.title} links={session.links} />
                ))}
            </footer>
        )
    }
    
    return (
        <footer className={style.container_footer}>
            <div className={style.container_larg_footer}>
                {sessionsFooter.map((session: SessionFooterProps) => (
                    <div key={session.title} className={style.container_session_footer}>
                        <span className={style.title_session_footer}>{session.title}</span>
                        {session.links.map((link: LinkType) => (
                            <a key={link.text} href={link.path} className={style.link_session_footer}>{link.text}</a>
                        ))}
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer