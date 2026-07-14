function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.email || '',
    data.instagramLink || '',
    data.platforms || '',
    data.socialLinks || '',
    data.additionalInfo || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
