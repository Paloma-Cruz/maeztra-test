import { useState } from 'react';
import style from './style.module.scss';
import Modal from '../Modal';

// IMAGES
import NewsletterImage from '../../assets/banners/modal-newsletter-desktop.png';
import Message from '../../assets/icons/message.svg';
import Send from '../../assets/icons/send.svg';

// HOOKS
import useDevice from '../../hooks/useDevice';

const Newsletter = () => {

    const {isMobile} = useDevice();
    const [isOpenModal, setIsOpenModal] = useState(true);

    return (
        <>
            <div className={style.container_newsletter}>
                <form className={style.form_newsletter}>
                    <p className={style.title_newsletter}>Recebe nossa Newsletter</p>
                    <div className={style.input_group}>
                        <input className={style.input_newsletter} required type="email" placeholder='Digite seu e-mail' />
                        <input className={style.submit_newsletter} type="submit" value="Enviar" />
                    </div>
                </form>
            </div>

            <Modal open={isOpenModal} closeModal={() => setIsOpenModal(false)}>
                {!isMobile && 
                    <div className={style.container_modal_image}>
                        <img className={style.modal_image} src={NewsletterImage} alt="Newsletter Image" />
                    </div>
                }
                <div className={style.modal_content}>
                    <img className={style.message_icon} src={Message} alt="Message Icon" />
                    <span className={style.message_text}>Bem vindo à Maeztra</span>
                    <p className={style.message_newsletter}>
                        Receba em primeira mão <strong>desconto e ofertas exclusivas</strong>
                    </p>
                    <form className={style.modal_form}>
                        <input className={style.input_newsletter} required type="email" placeholder='Digite seu e-mail' />
                        <button className={style.button_newsletter}>
                        Enviar
                        <img src={Send} alt="Send Icon" />
                        </button>
                    </form>
                </div>
            </Modal>
        </>
       
    )
}

export default Newsletter