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

    if (!testRunConfiguration.clocCliArguments) {
        testRunConfiguration.clocCliArguments = "./mockCodeFiles";
    }

    const taskMockRunner = createTaskMockRunner();

    taskMockRunner.setInput("workingFolder", testRunConfiguration.workingFolder);
    taskMockRunner.setInput("arguments", testRunConfiguration.clocCliArguments);

    taskMockRunner.run();
};

export default runTestTask;
