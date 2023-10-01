
// HOOKS
import { useFetch } from '../../hooks/useFetch';

// COMPONENTS
import Product from './components/Product';
import Slide from '../Slide';

// SASS
import style from './style.module.scss'
import Loading from './components/Loading';
import useDevice from '../../hooks/useDevice';

// INTERFACE
import { ProductItemType } from '../../interfaces/product';

const Shelf = () => {
    
    const {isMobile} = useDevice();

    const url = "https://maeztra-db.vercel.app/products";
    const { data: products, error, loading }: any = useFetch(url);

    const listProducts = products?.map((item: ProductItemType) => (
        <Product key={item.id} item={item} />
    ))

    return (
        <div className={style.container_shelf}>
            <div className={style.larg_container_shelf}>
                <h2 className={style.title_shelf}>As Mais pedidas</h2>
                {loading && <Loading />}
                {error && <h2 className={style.title_shelf}>Algo deu errado. Verifique a conexão.</h2>}
                {products && <Slide list={listProducts} centeredSlides={isMobile ? true : false} navigation={isMobile ? false : true} pagination={false} spaceBetween={isMobile ? 14 : 15} slidesPerView={isMobile ? 'auto' : 5} />}
            </div>
        </div>
    )
}

export default Shelf