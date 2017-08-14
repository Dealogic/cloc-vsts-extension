import * as https from "https";
import * as fs from "fs";
import * as child_process from "child_process";
import * as path from "path";

const downloadClocCli = (downloadFinishedCallback: () => void) => {
    const clocExeFilename = "cloc-1.72.exe";
    const clocExeDownloadUrl = "https://github.com/AlDanial/cloc/releases/download/v1.72/cloc-1.72.exe";

    const clocExeFile = fs.createWriteStream(clocExeFilename);

    console.log(`Downloading cloc.exe from '${clocExeDownloadUrl}' as '${clocExeFilename}'`);
    https.get(clocExeDownloadUrl, (clocExeDownloadResponse: https.IncomingMessage) => {
        https.get(clocExeDownloadResponse.headers["location"].toString(), (redirectionResponse: https.IncomingMessage) => {
            const stream = redirectionResponse.pipe(clocExeFile);
            stream.on("close", () => {
                downloadFinishedCallback();
            });
        });
    });
};

export default downloadClocCli;
