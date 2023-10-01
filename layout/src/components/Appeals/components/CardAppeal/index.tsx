// SASS
import style from './style.module.scss';

// INTERFACE
import { AppealProps } from '../../../../interfaces/appeal';

const CardAppeal = ({appeal}: AppealProps) => {
    return (
        <div className={style.container_item_appeal}>
            <div className={style.container_item_icon}>
                <img src={appeal.icon} alt={appeal.title} className={style.icon} />
            </div>
            <div className={style.container_text_item_appeal}>
                <p className={style.item_appeal_title}>{appeal.title}</p>
                <p className={style.item_appeal_text}>{appeal.text}</p>
            </div>
        </div>
    )
}

export default CardAppeal