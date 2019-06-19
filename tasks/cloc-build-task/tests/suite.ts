import * as fs from "fs";
import * as shouldWorkWithHttpDownload from "./shouldWorkWithHttpDownload";
import * as shouldWorkWithLocalCloc from "./shouldWorkWithLocalCloc";

describe("cloc build task", () => {
    afterEach((done: MochaDone) => {
        const filesToDelete = [
            "tests/cloc.exe",
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
        "should work with http download url",
        shouldWorkWithHttpDownload.executeTest);

    it(
        "should work with local file download url",
        shouldWorkWithLocalCloc.executeTest);
});
