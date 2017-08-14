import * as fs from "fs";
import * as shouldProduceClocResultMdFile from "./shouldProduceClocResultMdFile";

describe("cloc build task", () => {
    after((done: MochaDone) => {
        const filesToDelete = [
            "tests/cloc-1.72.exe",
            "tests/cloc.result.md"
        ];

        for (const fileToDelete of filesToDelete) {
            if (fs.existsSync(fileToDelete)) {
                fs.unlinkSync(fileToDelete);
            }
        }

        done();
    });

    it(
        "should produce cloc.result.md file",
        shouldProduceClocResultMdFile.executeTest);
});
