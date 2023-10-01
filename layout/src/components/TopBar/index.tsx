import style from './style.module.scss';

const TopBar = () => {
    return (
        <div className={style.container_top_bar}>
            <span className={style.text_top_bar}>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</span>
        </div>
    )
}

export default TopBar;