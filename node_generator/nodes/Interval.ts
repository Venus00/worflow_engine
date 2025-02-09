import { IBaseAsyncNode } from "utils/IBaseAsyncNode";

export default class Interval extends IBaseAsyncNode{
    private interval:number;
    private output:number;
    constructor(name:string,properties:{interval:number,output:number}){
        const options = {
            inputs:[]
        }
        super(name,options);
        this.output = properties.output;
        this.interval = properties.interval;
        this.log("node Interval inited Succefully")
    }
    
    async run(queue:any[]){

        setInterval(()=>{
            queue.push(this.output);
        },this.interval)
       
    }
    
    validate(...args:any[])
    {
        return true;
    }
}