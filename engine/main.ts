import {parse} from 'ts-command-line-args';

export const args = parse({
    load:String
});

console.log(args.load)
const file = args.load
const {BasicNode} = require(file)
//console.log(BasicNode)
const newObject = new BasicNode()