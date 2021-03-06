# Count Lines of Code Build Task

### A build task for [Visual Studio Team Services (VSTS)](https://www.visualstudio.com/fr-fr/products/visual-studio-team-services-vs.aspx) made with ♥ by

[![dealogic logo](https://raw.githubusercontent.com/Dealogic/cloc-vsts-extension/master/dealogic-logo.png)](http://www.dealogic.com)

### to count your lines of code.

![build status](https://travis-ci.org/Dealogic/cloc-vsts-extension.svg?branch=master)

## Content

* [Installation](#installation)
* [Source Code](#source-code)
* [What The Build Step Does](#what-the-build-step-does)
* [Usage](#usage)
* [Release Notes](#release-notes)
* [License](#license)

## <a id="installation"></a>Installation

Installation can be done using [Visual Studio MarketPlace](https://marketplace.visualstudio.com/items?itemName=Dealogic.cloc-vsts-extension).

## <a id="source-code"></a>Source Code

Source code can be found on [GitHub](https://github.com/Dealogic/cloc-vsts-extension).

## <a id="what-the-build-step-does"></a>What The Build Step Does

This build step is counting your lines of code with using the [cloc CLI](https://github.com/AlDanial/cloc). The result is reported as a section on the build summary page.

![Result is reported on the build summary page](https://raw.githubusercontent.com/Dealogic/cloc-vsts-extension/master/screenshots/BuildSummary.png)

## <a id="usage"></a>Usage

Add the task to your build configuration:

![Add Count Line of Code task](https://raw.githubusercontent.com/Dealogic/cloc-vsts-extension/master/screenshots/TaskList.png)

Arguments have to be specified:

![Specify the arguments for the cloc CLI](https://raw.githubusercontent.com/Dealogic/cloc-vsts-extension/master/screenshots/Arguments.png)

By default the cloc CLI is running in the root of the repository, you can modify that in the advanced settings as the working folder task parameter:

![Working folder is the path, where the cloc CLI will run](https://raw.githubusercontent.com/Dealogic/cloc-vsts-extension/master/screenshots/WorkingFolder.png)

By default the cloc CLI is downloaded from the url: `https://github.com/AlDanial/cloc/releases/download/1.82/cloc-1.82.exe`:

![The download URL of the cloc-cli tool](https://raw.githubusercontent.com/Dealogic/cloc-vsts-extension/master/screenshots/ClocCliDownloadURL.png)

But now file shares and local files are supported to such as:
```
file://my-file-share/public/software/cloc-1.82.exe
```
or
```
./cloc.1.82.exe
```

## <a id="release-notes"></a>Release Notes

* 1.2.1 (19/06/2019)
    * New build/deployment badge on README page. (as build and deployment are on travis-ci.org)
    * File URLs are supported such as `file://my-file-share/public/software/cloc-1.82.exe` or local file path as `./cloc.1.82.exe`
* 1.1.2 (13/12/2018)
    * Display name of the task will be used as title for the summary on build summary page
    * Option to modify the cloc-cli download URL
* 1.0.0 (14/08/2017)
    * Counting lines of code with cloc CLI (by Al Danial)
    * Result of the cloc CLI is reported onto the Build Summary page
    * Custom arguments can be provided to the build task, to the cloc CLI
    * Working folder can be modified where the cloc CLI will run

## <a id="license"></a>License

[MIT](https://github.com/Dealogic/cloc-vsts-extension/blob/master/LICENSE)
