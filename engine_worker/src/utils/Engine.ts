import * as fs from 'fs'
import { Nodes } from './INodes';
import { IBaseNode } from '../../src/utils/IBaseNode';
import { Ram } from './Ram';

export class Engine {
    private nodes:{id:string,node:IBaseNode}[] = [];
    constructor(){}

    async init(dir:string,data:any){
        //load nodes
        try {
            const allNodes = await this.loadNodes(dir);
            this.nodes = data.nodes.map((node:any)=>{
                const nodeContructor = allNodes.find((n:any)=>n.type===node.type)
                if(nodeContructor) 
                {
                    return {
                        id:node.uuid,
                        node:(new nodeContructor.builder(`${node.type}[${node.uuid}]`,node.properties)) as IBaseNode
                    }
                    
                }
                else return null;
            }).filter((nItem:any)=>nItem!==null)
            return data.connections;
            } catch (error) {
            console.error(error);
        }
    }
    async run(worflow:string[][]){
        const ram = new Ram(); 
        for(let i=0;i<worflow.length;i++)
        {
            for(let j=0;j<worflow[i].length;j++)
            {
                
                const node = this.nodes.find((n)=>n.id === worflow[i][j]);
                if(node)
                await node?.node.execute(ram);
            }
        }
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

