
// IMAGES
import Cart from '../../../../assets/icons/cart.svg';

// SASS
import style from './style.module.scss'

// HOOKS
import useDevice from '../../../../hooks/useDevice';

// CONTEXT
import { useMinicart } from '../../../../context/MinicartContext';

const Minicart = () => {
    const { isMobile } = useDevice();
    const { itemsMinicart } = useMinicart();

    return (
        <span className={style.cart}>
            <img className={style.icon} src={Cart} alt="Icon Cart" />
            {isMobile ? '' : 'Meu Carrinho'}
            <span className={style.quantity_minicart}>{itemsMinicart.length}</span>
        </span>
    )
}

export default Minicart