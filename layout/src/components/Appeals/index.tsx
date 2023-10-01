// IMAGES
import World from '../../assets/appeals/world.png';
import Stock from '../../assets/appeals/stock.png';
import Replacement from '../../assets/appeals/replacement.png';
import Tag from '../../assets/appeals/tag.png';
import Car from '../../assets/appeals/car.png';

// SASS
import style from './style.module.scss'

// COMPONENTS
import Slide from '../Slide';
import CardAppeal from './components/CardAppeal';

// HOOKS
import useDevice from '../../hooks/useDevice';

// INTERFACES
import { AppealType } from '../../interfaces/appeal';

const Appeals = () => {

    const {isMobile} = useDevice();

    const listAppeals = [
        {
            icon: World,
            title: "Produtos importados",
            text: "Produto de Alta Qualidade"
        },
        {
            icon: Stock,
            title: "Estoque no Brazil",
            text: "Produtos mais perto de você!"
        },
        {
            icon: Replacement,
            title: "Trocas Garantidas",
            text: "Trocas em até 48 horas, vejas as regras"
        },
        {
            icon: Tag,
            title: "Ganhe 5% off",
            text: "Pagando à vista no Cartão"
        },
        {
            icon: Car,
            title: "Frete Grátis",
            text: "Em compras acima de R$ 499,00"
        }
    ]

    const containerAppeals = listAppeals.map((appeal: AppealType) => (
        <CardAppeal appeal={appeal} key={appeal.title} />
    ));

    return (
        <div className={style.container_appeals}>
            <div className={style.larg_container_appeals}>
                <h2 className={style.title_appeals}>Por que comprar na Maeztra?</h2>
                {isMobile ? 
                    <Slide list={containerAppeals} centeredSlides={true} navigation={false} pagination={false} spaceBetween={16} slidesPerView={'auto'} />
                :
                    <div className={style.list_appeals}>
                        {containerAppeals}
                    </div>
                }
                </div>
        </div>
    )
}

export default Appeals