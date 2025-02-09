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



export const asyncWorkflow = {
    nodes:[
        {
            type:'Request',
            uuid:'0010',
            properties:{
                url:"http://127.0.0.1:3000"
            }
        },
        {
            type:'Delay',
            uuid:'0009',
            properties:{
                'timeout':6000
            }
        },
    ],
    connections:[
        ["0001","0002"],
        ["0002","0003"],
        ["0003","0004"],
        ["0002","0007"],
        ["0005","0006"],
    ]
}

export const data = {
    nodes:[
        {
            type:'Request',
            uuid:'0010',
            properties:{
                url:"http://127.0.0.1:3000"
            }
        },
        {
            type:'Delay',
            uuid:'0009',
            properties:{
                'timeout':6000
            }
        },
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
        ['0009','0004','0007','0000'],
        ['0006','0009','0001'],
        ['0007','0002','0009'],
        ['0008','0000']
    ]
}