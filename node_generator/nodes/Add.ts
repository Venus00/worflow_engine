import { IBaseNode } from "../utils/IBaseNode";

export default class ADD extends IBaseNode{
    

    constructor(name:string){

        const inputs = ["number","number"];
        super(name,{inputs});
        this.log("node ADD inited Succefully")
    }
    
    async run(input1:number,input2:number){
        
        const result = input1+input2
        return result
       
    }
    
    validate(...args:any[])
    {
        if (args.length !== 2) return false;
        if (isNaN(args[0]) || isNaN(args[1])) return false
        return true;
    }
}