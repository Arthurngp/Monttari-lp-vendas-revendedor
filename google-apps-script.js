// This file should be created in Google Apps Script (script.google.com)
// and deployed as a web app

function doPost(e) {
  try {
    // Get the active spreadsheet (create one first and get its ID)
    const spreadsheetId = "YOUR_SPREADSHEET_ID" // Replace with your Google Sheets ID
    const sheet = SpreadsheetApp.openById(spreadsheetId).getActiveSheet()

    // Parse the incoming data
    const data = JSON.parse(e.postData.contents)

    // If this is the first row, add headers
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Data/Hora", "Nome", "Email", "CNPJ", "Telefone", "Tipo de Orçamento"])
    }

    // Add the form data to the sheet
    sheet.appendRow([data.timestamp, data.nome, data.email, data.cnpj, data.telefone, data.orcamento])

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}

// Allow GET requests for testing
function doGet() {
  return ContentService.createTextOutput("Monttari Form Handler is running").setMimeType(ContentService.MimeType.TEXT)
}
