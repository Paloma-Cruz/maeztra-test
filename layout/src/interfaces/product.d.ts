export interface ProductProps {
    item: ProductItemType
 }
 
 export type ProductItemType = {
    id: number
    name: string
    description: string
    price: number
    skus: SkuType[]
 }
 
 export type SkuType = {
    skuId: number, 
    variations: VariationType[],
    image: string
 }
 
 export type VariationType = {
    name: string
    value: string
 }