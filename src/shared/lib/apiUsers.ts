 
import { defer, from } from "rxjs";
import { clientApi } from "./httpClient";
import { appDelay } from "./lib";
import type { User } from "./models";
 
class Api_Users {
    api_base = 'https://jsonplaceholder.typicode.com';
            
    constructor() {
       // this.api_base = url_user ?? this.api_base;
        this.initialize();
    }
     
    initialize() {

    }


    //await deleteUserById(userid); 
    AddUser = (data: any) => {
        let _url = `${this.api_base}/users/`;
        return clientApi.addRow(_url, data);
    }


    //await deleteUserById(userid); 
   deleteUserById = (user_id: any) => {
       let _url = `${this.api_base}/users/`;
        return clientApi.deleteRow(_url, user_id);
    }

    //getUserById1().subscribe(data => { });
    getUserById = (user_id: any) => {
        let _url = `${this.api_base}/users/`;
        const apiCall = () => clientApi.getRowById(_url, user_id);
        return defer(() => from(apiCall()));

    }
    //getUsers11().subscribe(data => { });
    getUsers = () => {
        let _url = `${this.api_base}/users`
        return from(clientApi.getRows(_url));
    }
    getUsersNoWait = async (): Promise<User[]> => {
        await appDelay(500)
        let _url = `${this.api_base}/users`
        const response = await fetch(_url)
        if (!response.ok) {
            throw new Error('Failed to fetch posts')
        }
        return response.json()
    }
}
var apiUsers = new Api_Users();
export { apiUsers };
 