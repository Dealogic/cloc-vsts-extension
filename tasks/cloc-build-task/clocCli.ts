import * as child_process from "child_process";
import * as process from "process";
import * as path from "path";

const executeClocCli = (taskDisplayName: string, clocCliArguments: string) => {
    const clocCliResultFilename = "cloc.result.md";
    const commandToExecute = `cloc.exe ${clocCliArguments} --sum-one --md --out ${clocCliResultFilename}`;

    console.log(`Executing command: ${commandToExecute}`);

    child_process.exec(commandToExecute, (error: Error, stdout: string) => {
        if (error) {
            throw error;
        }

        console.log(stdout);

        const workingFolder = process.cwd();

        console.log(`Uploading result file from ${path.resolve(workingFolder, clocCliResultFilename)}`);
        console.log(`##vso[task.addattachment type=Distributedtask.Core.Summary;name=${taskDisplayName};]${path.resolve(workingFolder, clocCliResultFilename)}`);
    });
};

export default executeClocCli;
