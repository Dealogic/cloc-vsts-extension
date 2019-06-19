import * as fs from "fs";
import * as download from "download";
import * as url from "url";

const downloadClocCli = (clocExeDownloadUrl: string, downloadFinishedCallback: (error?: Error) => void) => {
    try {
        const clocExeFilename = "cloc.exe";
        const downloadUrl = url.parse(clocExeDownloadUrl);

        console.log(`Downloading cloc.exe from:`);
        console.log(downloadUrl);

        switch (downloadUrl.protocol) {
            case "file:":
                const downloadPath = url.fileURLToPath ? url.fileURLToPath(downloadUrl.href) : downloadUrl.href.slice(5);

                console.log(`Copying file from '${downloadPath}'`);
                fs.copyFile(downloadPath, clocExeFilename, (err) => downloadFinishedCallback(err));
                break;
            case "http:":
            case "https:":
                download(downloadUrl.href).then((data) => fs.writeFile(clocExeFilename, data, (err) => downloadFinishedCallback(err)));
                break;
            default:
                console.log(`Copying file from '${downloadUrl.href}'`);
                fs.copyFile(downloadUrl.href, clocExeFilename, (err) => downloadFinishedCallback(err));
                break;
        }
    } catch (err) {
        downloadFinishedCallback(err);
    }
};

export default downloadClocCli;
