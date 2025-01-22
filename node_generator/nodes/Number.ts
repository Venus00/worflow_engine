import { IBaseNode } from "../utils/IBaseNode";

export default class Number extends IBaseNode{
    
    
    constructor(name:string){
        const options= {
            inputs:[]
        }
        super(name,options);
        this.log("node Number inited Succefully")
    }
    
    async run(){
        const number = Math.floor(Math.random()*100);
        return number;
    }
    
    validate()
    {
        return true;
    }
}