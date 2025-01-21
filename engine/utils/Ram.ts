
export class Ram {
    private ram:any[] = [];
    constructor(){}

    push(element:any){
        console.log(this.ram);
        this.ram.push(element)
    }
    
    take()
    {
        console.log(this.ram);
        if(this.ram.length === 0) throw new Error("ram overtake");
        return this.ram.pop();
    }
}