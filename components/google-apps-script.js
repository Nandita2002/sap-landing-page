// ============================================================
// Rise Infotech — Google Apps Script
// Paste this entire file into your Google Apps Script editor
// (script.google.com → New Project → replace all code → Deploy)
// ============================================================

const SHEET_NAME = "Leads"; // Name of the sheet tab to write into

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
      || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Auto-create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "Source",
        "Name",
        "Email",
        "Phone",
        "Message",
      ]);

      // Style the header row
      const headerRange = sheet.getRange(1, 1, 1, 6);
      headerRange.setBackground("#1d4ed8");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontWeight("bold");
      sheet.setFrozenRows(1);
    }

    // Append the new lead row
    sheet.appendRow([
      new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      data.source   || "Unknown",
      data.name     || "",
      data.email    || "",
      data.phone    || "",
      data.message  || "",
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 6);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Required for Apps Script Web App — handles browser preflight
function doGet() {
  return ContentService
    .createTextOutput("Rise Infotech Lead Capture — OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
