import ItemMenu from './ItemMenu'
import Schedule from './Schedule'

interface Restaurant{
    Image: string,
    Name: string,
    Ville: string,
    Note: number,
    Horraires: Schedule,
    Carte: Array<ItemMenu>,
}

export default Restaurant