import * as path from "path";
import { MockTestRunner } from "vsts-task-lib/mock-test";
import { assert } from "chai";
import * as fs from "fs";

const mockRunnerDefinitions = "mockRunnerDefinitions";

export function executeTest(done: MochaDone): void {
        // tslint:disable-next-line:no-invalid-this
        this.timeout(30000);

        const testPath = path.join(__dirname, mockRunnerDefinitions, "shouldProduceClocResultMdFile.js");
        const testRunner = new MockTestRunner(testPath);

        testRunner.run();

        console.log(testRunner.stdout);

        assert.isTrue(fs.existsSync("tests/cloc.result.md"));
        const clocResultMdFileContent = fs.readFileSync("tests/cloc.result.md", {
                encoding: "utf8"
        });

        assert.include(clocResultMdFileContent, "SUM:|2|0|1|2");

        done();
}
