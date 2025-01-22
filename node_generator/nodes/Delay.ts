import { IBaseNode } from "../utils/IBaseNode";

export default class Delay extends IBaseNode{
    private timeout:number;
    constructor(name:string,properties:{timeout:number}){
        const options = {
            inputs:[]
        }
        super(name,options);
        this.timeout = properties.timeout;
        this.log("node Delay inited Succefully")
    }
    
    async run(input1:number,input2:number){
        return new Promise<void>((res)=>{
            setTimeout(()=>{
                res();
            },this.timeout)
        })
    }
    
    validate(...args:any[])
    {
        return true;
    }
}