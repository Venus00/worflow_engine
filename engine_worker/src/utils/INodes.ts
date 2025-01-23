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
        // {
        //     type:'Request',
        //     uuid:'0010',
        //     properties:{
        //         url:"http://127.0.0.1:3000"
        //     }
        // },
        // {
        //     type:'Delay',
        //     uuid:'0009',
        //     properties:{
        //         'timeout':6000
        //     }
        // },
        // {
        //     type:'Number',
        //     uuid:'0004'
        // },
        // {
        //     type:'Number',
        //     uuid:'0005'
        // },
        // {
        //     type:'Number',
        //     uuid:'0006'
        // },
        // {
        //     type:'Number',
        //     uuid:'0007'
        // },
        // {
        //     type:'Number',
        //     uuid:'0008'
        // },
        // {
        //     type:'Add',
        //     uuid:'0000',
        // },
        // {
        //     type:'Minus',
        //     uuid:'0001',
        // },
        // {
        //     type:'Add',
        //     uuid:'0002',
        // },
        {
            type:'Request',
            uuid:'0040',
            properties:{
                url:"http://127.0.0.1:3000"
            }
        },
        {
            type:'OpenAI',
            uuid:'0030',
            properties:{
               token:"Bearer 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",
               system_prompt:'need recap'
            }
        },
        {
            type:'MailS',
            uuid:'0020',
            properties:{
                subject:"test mail sent from worker",
                message:'hello from worker',
                to:"o.farhat@nextronic.io",
                credentials:{"web":{"client_id":"847875444299-vb33tvkpnkrsqlf8g345n497qlt31525.apps.googleusercontent.com","project_id":"sacred-booking-446710-q0","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_secret":"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","redirect_uris":["http://localhost:3000/oauth2callback"]}},
                token:{"type":"authorized_user","client_id":"847875444299-vb33tvkpnkrsqlf8g345n497qlt31525.apps.googleusercontent.com","client_secret":"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","refresh_token":"1//03-7fMG838O0zCgYIARAAGAMSNwF-L9IrKydZb-yoQKdnJNx7NsOgFaKPOJWTMApIlzFeXCH5vSM3tgPtlhiQa1OlNIlA7CComiU"}            
            }
        }
    ],
    connections:[["0040","0030","0020"]],
    // connections:[
    //     ['0009','0004','0007','0000'],
    //     ['0006','0009','0001'],
    //     ['0007','0002','0009'],
    //     ['0008','0000']
    // ]
}