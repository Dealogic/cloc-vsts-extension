import * as path from "path";
import { MockTestRunner } from "vsts-task-lib/mock-test";
import { assert } from "chai";
import * as fs from "fs";

const mockRunnerDefinitions = "mockRunnerDefinitions";

export function executeTest(done: MochaDone): void {
        // tslint:disable-next-line:no-invalid-this
        this.timeout(15000);

        const testPath = path.join(__dirname, mockRunnerDefinitions, "shouldProduceClocResultMdFile.js");
        const testRunner = new MockTestRunner(testPath);

        testRunner.run();

        assert.isTrue(fs.existsSync("tests/cloc.result.md"));
        const clocResultMdFileContent = fs.readFileSync("tests/cloc.result.md", {
                encoding: "utf8"
        });

        assert.include(clocResultMdFileContent, "SUM:|2|0|1|2");

        done();
}
