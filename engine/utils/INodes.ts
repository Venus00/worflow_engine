import { IBaseNode } from "../../src/utils/IBaseNode";

export interface IWorkflow {
    name:string;
    type:string;
    nodes:string[];
    connections:{
        inputNode:{
            name:string;
        }
    }
}


export interface Nodes {
    name:string;
    type:string;
    builder:any;
}



export const data = {
    nodes:[
        {
            type:'Number',
            uuid:'0004'
        },
        {
            type:'Number',
            uuid:'0005'
        },
        {
            type:'Number',
            uuid:'0006'
        },
        {
            type:'Number',
            uuid:'0007'
        },
        {
            type:'Number',
            uuid:'0008'
        },
        {
            type:'Add',
            uuid:'0000',
        },
        {
            type:'Minus',
            uuid:'0001',
        },
        {
            type:'Add',
            uuid:'0002',
        },
    ],
    connections:[
        ['0004','0007','0000'],
        ['0006','0001'],
        ['0007','0002'],
        ['0008','0000']
    ]
}