import * as https from "https";
import * as fs from "fs";

const downloadClocCli = (clocExeDownloadUrl: string, downloadFinishedCallback: () => void) => {
    const clocExeFilename = "cloc.exe";
    const clocExeFile = fs.createWriteStream(clocExeFilename);

    console.log(`Downloading cloc.exe from '${clocExeDownloadUrl}'`);
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
