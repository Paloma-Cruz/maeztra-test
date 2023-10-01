
// INTERFACE
import { ProductItemType, ProductProps, SkuType, VariationType } from '../../../../interfaces/product';

// SASS
import style from './style.module.scss'

// CONTEXT
import { useMinicart } from '../../../../context/MinicartContext'

const Product = ({item}: ProductProps) => {
    const {setItemsMinicart} = useMinicart();
    const getFirstSku = item.skus[0];

    const getVariationColor = (sku: SkuType) => {
        const findColor = sku?.variations?.find((variation: VariationType) => {
            return variation.name === "Color"
        });

        return findColor?.value
    }

    const addToCart: React.MouseEventHandler<HTMLSpanElement> = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setItemsMinicart((prevItemsMinicart: ProductItemType) => [...prevItemsMinicart as any, item])
    }

    return (
        <a href='#' className={style.container_product}>
            <div className={style.container_image_product}>
                <img className={style.image_product} src={getFirstSku.image} alt={`Product Id ${item.id}`}/>
            </div>
            <div className={style.container_info_product}>
                <div className={style.variations_color}>
                    {item.skus?.map((sku: SkuType) => {
                        const color = getVariationColor(sku);

                        return (
                            <span className={style.container_color} key={sku.skuId} style={{backgroundColor: color}}></span>
                        )
                    })}
                </div>
                
                <span className={style.price}>R$ {item.price}</span>
                <span className={style.name}>{item.name}</span>
                <span className={style.description}>{item.description}</span>
                <span onClick={addToCart} className={style.add_cart}>Adicionar</span>
                
            </div>
        </a>
    )
}

export default Product