import { Ram } from "./IRam";

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
    async run(...args:any[]):Promise<any>{}
    validate(...args:any[]):boolean{
        return true;
    }
    async execute(ram:Ram){
        let args:any[] = [];
        for(let i=0;i<this.options.inputs.length;i++)
        {
            args.push(ram.take());
        }
        args.reverse();
        if(this.validate(...args)){
            const result = await this.run(...args)
            if(result)
            ram.push(result);
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