import {parse} from 'ts-command-line-args';
import * as fs from 'fs'
export const args = parse({
    dir:String,
});



const NodeAdd = require(file1)
const NodeMinus = require(file2)

const AddObject = new NodeAdd.default()
const MinusObject = new NodeMinus.default();

console.log(AddObject.execute(5,MinusObject.execute(-2,"teet")));

async function loadNodes(dir:string){
    const Nodes:{name:string,builder:ObjectConstructor}[] = [] ;

    const files = fs.readdir(dir,(error,files)=>{
        if (error) console.log(error);
        return files;
    });
    
}