import { IBaseNode } from "../utils/IBaseNode";
import { authenticate }from '@google-cloud/local-auth';
import { google } from 'googleapis';
import { OAuth2Client } from 'google-auth-library';

export default class MailS extends IBaseNode{
    private scope = ['https://www.googleapis.com/auth/gmail.send'];
    private token:any;
    private credentials:any;
    private to:string='';
    private subject:string='';
    constructor(name:string,properties:{token:any,credentials:any,message:string,to:string,subject:string}){
        const options = {
            inputs:["string"]
        }
        super(name,options);
        this.to = properties.to;
        this.subject = properties.subject;
        this.credentials = properties.credentials;
        this.token = google.auth.fromJSON(properties.token) as OAuth2Client;
        this.log("node Mail Sender inited Succefully")
    }
    
    async run(message:string){
        
        this.sendEmail(this.token,this.to,this.subject,message);
    }
    
    validate(...args:any[])
    {

        return true;
    }

    async authorize(): Promise<OAuth2Client> {
        let client = this.token;
        if (client) {
            return client;
        }
        client = (await authenticate({
            scopes: this.scope,
            keyfilePath: this.credentials,
        })) as OAuth2Client;
        return client;
    }

    async sendEmail(auth: OAuth2Client,to: any,subject: any,html: any): Promise<void> {
        console.log()
        const gmail = google.gmail({ version: 'v1', auth });
        const email = [
            `To: ${to}`,
            `Subject: ${subject}`,
            'Content-Type: text/html; charset="UTF-8"',
            '',
            `${html}`,
          ].join('\n');

        const encodedMessage = Buffer.from(email)
            .toString('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');

        try {
            const res = await gmail.users.messages.send({
                userId: 'me',
                requestBody: {
                    raw: encodedMessage,
                },
            });
            console.log('Email sent:', res.data);
        } catch (error) {
            console.error('Error sending email:', error);
        }
    }


}