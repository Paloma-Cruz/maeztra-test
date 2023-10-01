// SASS
import style from './style.module.scss';

// IMAGES
import BannerDesktop from '../../assets/banners/banner-principal-desktop.png'
import BannerMobile from '../../assets/banners/banner-principal-mobile.png'

// COMPONENTS
import Slide from '../Slide';

// HOOKS
import useDevice from '../../hooks/useDevice';

const Banners = () => {

    const { isMobile } = useDevice();

    const banner_01 = (
        <div className={style.container_banner}>
            {isMobile ? 
                <img src={BannerMobile} alt="Banner 01"/> 
            : 
                <img src={BannerDesktop} alt="Banner 01"/>
            }
            <div className={style.container_text_banner}>
                <span className={style.big_text_banner}>Promoções de Outono</span>
                <span className={style.small_text_banner}>Confiras os melhores looks para combinar com você nesse Outono</span>
                <a className={style.link_banner} href="#">Conferir</a>
            </div>
        </div>
    )

    const listBanners = [
        banner_01,
        banner_01,
        banner_01
    ]

    return (
        <div className={style.container_banners}>
            <Slide 
                key="Banners"
                list={listBanners}
                navigation={true}
                pagination={true}
                slidesPerView={1}
                spaceBetween={0}
                centeredSlides={true}
            />
        </div>
    )
}

export default Banners