import * as https from "https";
import * as http from "http";
import * as fs from "fs";

const downloadClocCli = (clocExeDownloadUrl: string, downloadFinishedCallback: () => void) => {
    const clocExeFilename = "cloc.exe";
    const clocExeFile = fs.createWriteStream(clocExeFilename);

    console.log(`Downloading cloc.exe from '${clocExeDownloadUrl}'`);
    https.get(clocExeDownloadUrl, (clocExeDownloadResponse: http.IncomingMessage) => {
        https.get(clocExeDownloadResponse.headers["location"].toString(), (redirectionResponse: http.IncomingMessage) => {
            const stream = redirectionResponse.pipe(clocExeFile);
            stream.on("close", () => {
                console.log(`Download is completed.`);
                downloadFinishedCallback();
            });
        });
    });
};

export default downloadClocCli;
