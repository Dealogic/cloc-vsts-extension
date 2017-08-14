import tl = require("vsts-task-lib/task");
import downloadClocCli from "./clocCliDownloader";
import executeClocCli from "./clocCli";

async function run(): Promise<void> {
    let taskDisplayName = tl.getVariable("task.displayname");

    if (!taskDisplayName) {
        taskDisplayName = "cloc";
    }

    console.log(taskDisplayName);

    let workingFolder = tl.getPathInput("workingFolder", false);

    if (!workingFolder) {
        workingFolder = __dirname;
    }

    tl.cd(workingFolder);
    process.chdir(workingFolder);

    try {
        downloadClocCli(() => {
            executeClocCli("");
        });
    } catch (err) {
        tl.setResult(tl.TaskResult.Failed, `${taskDisplayName} failed`);
        tl.error(err);

        console.log(err);
    }
}

run();
