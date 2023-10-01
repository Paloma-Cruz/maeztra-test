
// IMAGES
import AnnTaylor from '../../assets/brands/ann-taylor.png';
import Comma from '../../assets/brands/comma.png';
import Forever21 from '../../assets/brands/forever-21.png';
import Melissa from '../../assets/brands/melissa.png';
import Zara from '../../assets/brands/zara.png';

// SASS
import style from './style.module.scss';

// HOOKS
import useDevice from '../../hooks/useDevice';
import Slide from '../Slide';

const Brands = () => {

    const {isMobile} = useDevice();

    const listBrands = [
        {
            image: AnnTaylor,
            alt: "Ann Taylor"
        },
        {
            image: Comma,
            alt: "Commma"
        },
        {
            image: Forever21,
            alt: "Forever21"
        },
        {
            image: Melissa,
            alt: "Melissa"
        },
        {
            image: Zara,
            alt: "Zara"
        }
    ];

    const containerBrands = listBrands.map((brand: {image: string, alt: string}) => (
        <div key={brand.alt}>
            <img className={style.brand_image} src={brand.image} alt={brand.alt} />
        </div>
    ))

    return (
        <div className={style.container_brands}>
            <div className={style.larg_container_brands}>
                <h2 className={style.title_brands}>Marcas Parceiras</h2>
                {isMobile ? 
                    <Slide list={containerBrands} navigation={false} pagination={false} slidesPerView={'auto'} spaceBetween={16} centeredSlides={true} /> 
                :
                    <div className={style.list_brands}>
                        {containerBrands}
                    </div>
                }
            </div>
        </div>
    )
}

export default Brands