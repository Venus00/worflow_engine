

export default class BasicNode {
    private a=0;
    constructor(){
        console.log("node inited Succefully")
    }
    increment(value:number){
        this.a += value;
    }
    
}