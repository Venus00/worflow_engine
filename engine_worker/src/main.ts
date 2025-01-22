import { Engine } from "./utils/Engine";
import {parse} from 'ts-command-line-args';
import { data } from "./utils/INodes";
async function main() {

    const args = parse({
        dir:String,
    });

    const engine = new Engine();
    const workflow = await engine.init(args.dir,data);
    engine.run(workflow);
}

main();