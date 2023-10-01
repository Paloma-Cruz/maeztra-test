import { useState } from 'react';

// IMAGES
import Dress from '../../assets/icons/dress.svg';
import Hamburguer from '../../assets/icons/menu.svg';

// SASS
import style from './style.module.scss'

// HOOKS
import useDevice from '../../hooks/useDevice';

// COMPONENTS
import Drawer from '../Drawer';

const Menu = () => {
    const { isMobile } = useDevice();
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const itemsMenu = (
        <>
            <a className={style.link_menu_highlights} href="">
                <img src={Dress} alt="Icon Dress" />
                Novidades
            </a>
            <a href="" className={style.link_menu}>
                Vestidos
            </a>
            <a href="" className={style.link_menu}>
                Roupas
            </a>
            <a href="" className={style.link_menu}>
                Sapatos
            </a>
            <a href="" className={style.link_menu}>
                Lingerie
            </a>
            <a href="" className={style.link_menu}>
                Acessórios
            </a>
            <a href="" className={style.link_menu}>
                OUTLET
            </a>
        </>
    )

    if (isMobile) {
        return (
            <>
                <div className={style.drawer_menu} onClick={() => setIsOpenDrawer(true)}>
                    <img className={style.icon} src={Hamburguer} alt="Menu Icon" />
                </div>
                <Drawer direction="left" control={() => setIsOpenDrawer(!isOpenDrawer)} open={isOpenDrawer}>
                    <nav className={style.container_menu}>
                        <div className={style.larg_menu}>
                            {itemsMenu}
                        </div>
                    </nav>
                </Drawer>
            </>
        )
    }

    return (
        <nav className={style.container_menu}>
            <div className={style.larg_menu}>
                {itemsMenu}
            </div>
        </nav>
    )
}

export default Menu