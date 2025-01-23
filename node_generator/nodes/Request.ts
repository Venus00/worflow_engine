import { IBaseNode } from "../utils/IBaseNode";
import axios from 'axios'
export default class Request extends IBaseNode{
    
    private url:string;
    constructor(name:string,properties:{url:string}){

        const inputs:any[] = [];
        super(name,{inputs});
        this.url = properties.url;
        this.log("node Request inited Succefully")
    }
    
    async run(){
        try {
            return  (await axios.get(this.url)).data 
        } catch (error) {
            throw new Error("error get Request");
        }
       
    }
    
    validate(...args:any[])
    {
        return true;
    }
}