import { ITestRunConfiguration } from "./ITestRunConfiguration";
import * as fs from "fs";
import * as path from "path";
import createTaskMockRunner from "./taskMockRunnerFactory";

const runTestTask = (testRunConfiguration: ITestRunConfiguration) => {
    if (!testRunConfiguration.taskDisplayName && !testRunConfiguration.nullTaskDisplayName) {
        testRunConfiguration.taskDisplayName = "webpack test";
    }

    if (testRunConfiguration.nullTaskDisplayName) {
        testRunConfiguration.taskDisplayName = "";
    }

    if (!testRunConfiguration.workingFolder) {
        testRunConfiguration.workingFolder = path.resolve(__dirname, "..", "..");
    }

    const taskMockRunner = createTaskMockRunner();

    taskMockRunner.setInput("workingFolder", testRunConfiguration.workingFolder);

    taskMockRunner.run();
};

export default runTestTask;
