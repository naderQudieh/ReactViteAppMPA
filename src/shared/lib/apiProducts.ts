 
import { from } from "rxjs";
import { clientApi } from "./httpClient";
import type { Product } from "./models";
import { appDelay } from "./lib";
 
class Api_Products {
     api_base = 'https://fakestoreapi.com';
    constructor() {
        this.initialize();
    }

    initialize() {

    }
    getProducts = async (): Promise<Product[]> => {
        await appDelay(500)
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error('Failed to fetch posts')
        }
        return response.json()
    }
    getAll = () => {
        let _url = `${this.api_base}/products`
        return from(clientApi.getRows(_url));
    }
    //await deleteById(userid); 
    deleteById = (_id: any) => {
        let _url = `${this.api_base}/products/`;
        return clientApi.deleteRow(_url,_id);
    }
}
var apiProducts = new Api_Products();
export { apiProducts };