// IMAGES
import Facebook from '../../assets/social-networks/facebook.svg';
import Linkedin from '../../assets/social-networks/linkedin.svg';
import Instagram from '../../assets/social-networks/instagram.svg';
import Youtube from '../../assets/social-networks/youtube.svg';
import Visa from '../../assets/forms-payments/visa.svg';
import Mastercard from '../../assets/forms-payments/mastercard.svg';
import Vtex from '../../assets/logos/logo-vtex.svg';
import Maeztra from '../../assets/logos/logo-maeztra-white.svg';

// SASS
import style from './style.module.scss'

const BottomBar = () => {
    return (
        <div className={style.container_bottom_bar}>
            <div className={style.container_larg_bottom_bar}>
                <div className={style.container_social_networks}>
                    <a href="" className={style.link_social_network}>
                        <img className={style.image_social_network} src={Facebook} alt="Facebook" />
                    </a>
                    <a href="" className={style.link_social_network}>
                        <img className={style.image_social_network} src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href="" className={style.link_social_network}>
                        <img className={style.image_social_network} src={Instagram} alt="Instagram" />
                    </a>
                    <a href="" className={style.link_social_network}>
                        <img className={style.image_social_network} src={Youtube} alt="Youtube" />
                    </a>
                </div>
                <div className={style.container_forms_payment}>
                    <img className={style.item_form_payment} src={Visa} alt="Visa" />
                    <img className={style.item_form_payment} src={Mastercard} alt="Mastercard" />
                    <img className={style.item_form_payment} src={Visa} alt="Visa" />
                    <img className={style.item_form_payment} src={Mastercard} alt="Mastercard" />
                </div>
                <div className={style.container_developed}>
                    <div className={style.powered_by}>
                        <span className={style.text}>Powered by</span>
                        <img className={style.vtex_image} src={Vtex} alt="VTEX" />
                    </div>
                    <div className={style.developed_by}>
                        <span className={style.text}>Developed by</span>
                        <img className={style.maeztra_image} src={Maeztra} alt="Maeztra" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomBar