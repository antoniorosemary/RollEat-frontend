import ItemMenu from './ItemMenu'

interface Restaurant{
    Image: string,
    Name: string,
    Ville: string,
    Note: number,
    Carte: Array<ItemMenu>,
}

export default Restaurant