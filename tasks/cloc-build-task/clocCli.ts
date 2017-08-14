import * as child_process from "child_process";
import * as path from "path";

const executeClocCli = (clocCliArguments: string) => {
    const workingFolder = __dirname;
    const clocCliResultFilename = "cloc.result.md";
    const commandToExecute = `${path.resolve(workingFolder, "cloc-1.72.exe")} ${clocCliArguments} --sum-one --md --out ${clocCliResultFilename}`;

    console.log(`Executing command: ${commandToExecute}`);

    child_process.exec(commandToExecute, (error: Error, stdout: string) => {
        if (error) {
            throw error;
        }

        console.log(stdout);
        console.log(`Uploading result file from ${path.resolve(workingFolder, clocCliResultFilename)}`);
        console.log(`##vso[task.addattachment type=Distributedtask.Core.Summary;name=Lines of Code;]${path.resolve(workingFolder, clocCliResultFilename)}`);
    });
};

export default executeClocCli;
