// IMAGES
import InfoCardDesktop from '../../assets/banners/info-card-desktop.png';
import InfoCardMobile from '../../assets/banners/info-card-mobile.png';

// SASS
import style from './style.module.scss'

// HOOKS
import useDevice from '../../hooks/useDevice';

const InfoCard = () => {
    const {isMobile} = useDevice();

    return (
        <div className={style.container_info_card}>
            <div className={style.larg_info_card}>
                <div className={style.container_text_info_card}>
                    <h2 className={style.title_info_card}>Lorem Ipsum</h2>
                    <p className={style.text_info_card}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque placerat consequat. Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat aliquet. Sed sed pellentesque porttitor phasellus donec condimentum sit sapien.</p>
                </div>
                <div className={style.container_banner}>
                    {isMobile ? 
                        <img className={style.banner} src={InfoCardMobile} alt='Banner Info Card' />
                    :
                        <img className={style.banner} src={InfoCardDesktop} alt='Banner Info Card' />
                    }
                </div>
            </div>
        </div>
    )
}

export default InfoCard