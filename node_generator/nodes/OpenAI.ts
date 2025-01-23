import { IBaseNode } from "../utils/IBaseNode";
import axios from 'axios'
export default class OpenAI extends IBaseNode{
    
    private token:string='';
    private user_prompt:string | undefined = undefined;
    private system_prompt:string='';
    constructor(name:string,properties:{token:string,system_prompt:string,user_prompt:string,}){
        const options = {
            inputs:["string"]
        }
        super(name,options);
        this.token = properties.token;
        this.system_prompt = properties.system_prompt;
        this.log("node OpenAI inited Succefully")
    }
    
    async run(user_prompt:string){
        const payload = {
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content:this.system_prompt,
              },
              { role: "user", content: user_prompt },
            ],
            temperature: 0,
          };
        try {
            const result = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                payload,
                {
                    headers:{
                        Authorization:this.token
                    }
                }
            );
            return result.data.choices[0].message.content;
        } catch (error) {
            
            console.log(error);
            throw new Error("error OpenAI");

        }
       
    }
    
    validate(...args:any[])
    {
        return true;
    }
}