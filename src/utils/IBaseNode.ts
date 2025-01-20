export class IBaseNode {
    public name:string = Object(this).name;
    constructor(){}
    run(...args:any[]):any{}
    validate(...args:any[]):boolean{
        return true;
    }
    execute(...args:any[]){
        if(this.validate(...args)) return this.run(...args)
        else this.error(500,"invalid args")
    }

    error(code:number,text:string){
        console.error(`code : [${code}] message : [${text}]`)
    }
}