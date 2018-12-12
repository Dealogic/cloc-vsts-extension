import tl = require("azure-pipelines-task-lib/task");
import downloadClocCli from "./clocCliDownloader";
import executeClocCli from "./clocCli";

async function run(): Promise<void> {
    let taskDisplayName = tl.getVariable("task.displayname");

    if (!taskDisplayName) {
        taskDisplayName = "cloc";
    }

    console.log(`task display name: ${taskDisplayName}`);

    let workingFolder = tl.getPathInput("workingFolder", false);

    if (!workingFolder) {
        workingFolder = __dirname;
    }

    console.log(`working folder: ${workingFolder}`);

    tl.cd(workingFolder);
    process.chdir(workingFolder);

    const clocCliDownloadUrl = tl.getInput("clocCliDownloadUrl", true);
    console.log(`cloc-cli download url: ${clocCliDownloadUrl}`);

    const clocCliArguments = tl.getInput("arguments", true);
    console.log(`arguments: ${clocCliArguments}`);

    try {
        downloadClocCli(
            clocCliDownloadUrl,
            () => {
                executeClocCli(clocCliArguments);
            });
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, `${taskDisplayName} failed`);
        tl.error(err);

        console.log(err);
    }
}

run();
