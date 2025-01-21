import { IBaseNode } from "../utils/IBaseNode";

export default class Minus extends IBaseNode{
    

    constructor(name:string){
        const options = {
            inputs:["number","number"]
        }
        super(name,options);
        this.log("node Minus inited Succefully")
    }
    
    run(input1:number,input2:number){
        const result = input1-input2
        this.log(result+'');
        return  result
    }
    
    validate(...args:any[])
    {
        if (args.length !== 2) return false;
        if (isNaN(args[0]) || isNaN(args[1])) return false
        return true;
    }
}