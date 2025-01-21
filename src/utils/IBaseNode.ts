import { Ram } from "../../engine/utils/Ram";

export type NodeOption = {
    inputs : string[];
}

export class IBaseNode {
    public name:string;
    private options:NodeOption;
    constructor(name:string,options:NodeOption){
        this.name = name;
        this.options = options;
    }
    run(...args:any[]):any{}
    validate(...args:any[]):boolean{
        return true;
    }
    execute(ram:Ram){
        let args:any[] = [];
        for(let i=0;i<this.options.inputs.length;i++)
        {
            args.push(ram.take());
        }
        args.reverse();
        if(this.validate(...args)){
            ram.push(this.run(...args))
        }
        else {
            this.error(500,"invalid args")
            return [];
        }
    }

    log(message:string){
        console.log(`${this.name}:[${message}]`);
    }
    error(code:number,text:string){
        console.error(`code : [${code}] message : [${text}]`)
    }
}