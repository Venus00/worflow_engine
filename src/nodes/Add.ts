import { IBaseNode } from "../utils/IBaseNode";

export default class ADD extends IBaseNode{
    

    constructor(){
        super();
        console.log("node ADD inited Succefully")
    }
    
    run(input1:number,input2:number){
        return input1+input2
    }
    
    validate(...args:any[])
    {
        if (args.length !== 2) return false;
        if (isNaN(args[0]) || isNaN(args[1])) return false
        return true;
    }
}