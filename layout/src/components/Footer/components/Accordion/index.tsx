import { useState } from 'react'

// INTERFACE
import { LinkType, SessionFooterProps } from '../../../../interfaces/footer'

// SASS
import style from './style.module.scss'

const Accordion = ({title, links}: SessionFooterProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={style.container_accordion}>
            <div className={style.accordion_panel} onClick={() => setIsOpen(!isOpen)}>
                <span className={style.title_panel}>{title}</span>
                <span className={style.activate_accordion}>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && 
                <div className={style.accordion}>
                    {links.map((link: LinkType) => (
                        <a className={style.link_accordion} key={link.text} href={link.path}>{link.text}</a>
                    ))}
                </div>
            }
        </div>
    )
}

export default Accordion