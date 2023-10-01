// IMAGES
import LogoMaeztra from '../../assets/logos/logo-maeztra-black.svg';
import User from '../../assets/icons/user.svg';
import Heart from '../../assets/icons/heart.svg';

// COMPONENTS
import Search from './components/Search';
import Menu from '../Menu';
import Minicart from './components/Minicart';

// SCSS
import style from './style.module.scss';

// HOOKS
import useDevice from '../../hooks/useDevice';


const Header = () => {

    const { isMobile } = useDevice();

    if (isMobile) {
        return (
            <header className={style.container_header}>
                <div className={style.larg_header}>
                    <div className={style.header_col}>
                        <Menu />
                    </div>
                    <div className={style.header_col_grow}>
                        <a className={style.link_logo} href="/">
                            <img className={style.logo} src={LogoMaeztra} alt="Logo Maeztra" />
                        </a>
                    </div>
                    <div className={style.header_col}>
                        <Search />
                    </div>
                    <div className={style.header_col}>
                        <Minicart />
                    </div>
                </div>
            </header>
        )
    }

    return (
        <header className={style.container_header}>
            <div className={style.larg_header}>
                <div className={style.header_col}>
                    <a className={style.link_logo} href="/">
                        <img className={style.logo} src={LogoMaeztra} alt="Logo Maeztra" />
                    </a>
                </div>
                <div className={style.header_col_grow}>
                    <Search />
                </div>
                <div className={style.header_col}>
                    <span className={style.my_account}>
                        <img className={style.icon} src={User} alt="Icon User" />
                        Minha Conta
                    </span>
                </div>
                <div className={style.header_col}>
                    <span className={style.wish_list}>
                        <img className={style.icon} src={Heart} alt="Icon Heart" />
                        Favoritors
                    </span>
                </div>
                <div className={style.header_col}>
                    <Minicart />
                </div>
            </div>
        </header>
    )
}

export default Header