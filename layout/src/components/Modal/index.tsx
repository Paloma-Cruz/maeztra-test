
// SASS
import style from './style.module.scss';
import { ModalProps } from '../../interfaces/modal';

// INTERFACE

const Modal = ({children, closeModal, open}: ModalProps) => {

    if (open) {
        return (
            <div className={style.modal_overlay}>
                <span className={style.close_modal} onClick={() => closeModal()}>Fechar</span>
                <div className={style.modal}>
                    {children}
                </div>
            </div>
        )
    }

    return <></>
   
}

export default Modal