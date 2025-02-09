import { asyncWorkflow } from "./utils/INodes";
import { EngineAsync } from './utils/EngineAsync';
async function main() {

    // const args = parse({
    //     dir:String,
    // });
    const engine = new EngineAsync();
    const workflow = await engine.init("F:\\nextronic\\worflow_engine\\nodes",asyncWorkflow);
    engine.run(workflow);
}

main();