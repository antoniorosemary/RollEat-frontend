import Menu from './Menu'
import Schedule from './Schedule'
import Product from './Product'

interface Restaurant{
    Image: string,
    Name: string,
    City: string,
    ZipCode: Number,
    Adress: string,
    Rating: number,
    Schedule: Schedule,
    Products: Array<Produit>,
    Menus: Array<Menu>,
}

export default Restaurant