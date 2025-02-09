import * as fs from 'fs'
import { Nodes } from './INodes';
import { IBaseNode } from '../../src/utils/IBaseNode';
import { Queue } from './Ram';

export class EngineAsync {
    private nodes:{id:string,node:IBaseNode,queue:Queue}[] = [];
    async init(dir:string,data:any)
    {
        try {
            const allNodes = await this.loadNodes(dir);
            this.nodes = data.nodes.map((node:any)=>{
                const nodeContructor = allNodes.find((n:any)=>n.type===node.type)
                if(nodeContructor) 
                {
                    
                    return {
                        id:node.uuid,
                        node:(new nodeContructor.builder(`${node.type}[${node.uuid}]`,node.properties)) as IBaseNode,
                        queue:new Queue(),
                    }
                    
                }
                else return null;
            }).filter((nItem:any)=>nItem!==null)
            return data.connections;
        } catch (error) {
            
        }
    }

    async run(worflow:string[][]){
        let nodeWeight:{[key: string]: number}={};
        let orderArray:{[key: string]: any} = {}
        console.log(worflow)
        for(let i=0;i<worflow.length;i++)
        {
           
            const from = worflow[i][0];
            const to = worflow[i][1];

            if(!orderArray[from]) orderArray[from] = [];
            if(!orderArray[to]) orderArray[to] = [];

            orderArray[from].push(to);

            if (!nodeWeight[to])
            {
                nodeWeight[to] = 1; 
            }
            else
            {
                nodeWeight[to] = nodeWeight[to]+1; 
            }
            if (!nodeWeight[from]) nodeWeight[from] = 0; 

        }
        console.log("weight",nodeWeight)
        console.log("adj",orderArray)
        const sequence = Object.entries(nodeWeight).filter((key,index)=>key[1]===0)
        let result = [];
        console.log("sequence",sequence);

        // while(sequence.length)
        // {
        //     const node = sequence.shift();
            
        //     if(node)
        //     {
        //         const nodeId = node[0];
        //         result.push(nodeId);
        //         for(let nextNode of (orderArray[nodeId] || []))
        //         {
        //             nodeWeight[nextNode]--;
        //             if(nodeWeight[nextNode] === 0) sequence.push([nextNode,nodeWeight[nextNode]])
        //         }
        //     }
        // }
       // console.log(result)
    }
    
    loadNodes(dir:string){
        const Nodes:Nodes[] = [] ;
        return new Promise<Nodes[]>((resolve,reject)=>{
            fs.readdir(dir,(error,files)=>{
                if (error) reject(error);
                const jsFiles = files.filter((filename)=>filename.includes('.js'))
                const nodes = jsFiles.map((filename)=>{
                    const Node = require(`${dir}/${filename}`);
                    return {
                        name:'',
                        type:filename.split('.')[0],
                        builder:Node.default
                    }
                })
                resolve(nodes)
            });
        });
    }
}