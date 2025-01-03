//Assume, this function takes 2 second to generate summary from a Document
function generateSummarySync(docLink) {
    console.log("Processing - " + docLink);
    // Simulate a delay by blocking the execution
    var start = new Date().getTime();
    while (new Date().getTime() - start < 2000); // Wait for 2 seconds
    return `Summary of ${docLink}`;
}

//Function to iterate over a list of documents, and generate summaries
function generateReport(docLinkArray, filePath) {
    let report = "";

    for (let i = 0; i < docLinkArray.length; i++) {
        const summary = generateSummarySync(docLinkArray[i]);
        report += summary + "\n";
    }

    if (!filePath) {
        throw new Error("File path not defined");
    }

    // Assume File.write is a function to write to a file
    // File.write(filePath, report);
    console.log("Report written to file");

    return report;
}

//Generate report for a list of documents
const docLinkArray = ["doc1", "doc2", "doc3", "doc4", "doc5"];
const report = generateReport(docLinkArray);
