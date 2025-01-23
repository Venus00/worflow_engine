
export class Ram {
    private ram:any[] = [];
    constructor(){}

    push(element:any){
        console.log("ram add this : ",element);
        this.ram.push(element)
    }
    
    take()
    {
        console.log("state ram now : ",this.ram);
        if(this.ram.length === 0) throw new Error("ram overtake");
        return this.ram.pop();
    }
}