// SASS
import style from './style.module.scss';

// HOOKS
import useDevice from '../../../../hooks/useDevice';

// IMAGES
import SearchIcon from '../../../../assets/icons/search.svg';

const Search = () => {

    const { isMobile } = useDevice();

    const form = (
        <form className={style.container_search}>
            <input 
                className={style.input}
                type="text" 
                placeholder='O Que Você Busca?'
                required
            />
            <input className={style.submit_search} type="submit" value="Buscar" />
        </form>
    )

    if (isMobile) {
        return (
            <div className={style.search_mobile}>
                <img className={style.icon} src={SearchIcon} alt="Search Icon" />
            </div>
        )
    }

    return (
        <>
            {form}
        </>
    )
}

export default Search