# Google Sheets Integration v2 (With Date Formatting & Security)

To secure your form and fix the date format, we need to update the Google Apps Script.

### Step 1: Get Cloudflare Turnstile Keys
1.  Go to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2.  Navigate to **Turnstile** (in the sidebar).
3.  Click **Add Site**.
4.  Site Name: `Meme Comp`.
5.  Domain: `memecomp.aquacatcoin.xyz` (and `localhost` for testing).
6.  Widget Mode: **Managed**.
7.  Click **Create**.
8.  **Copy the Site Key** and **Secret Key**.

### Step 2: Update Google Apps Script
1.  Open your [Google Apps Script project](https://script.google.com/).
2.  Replace the existing code with this new **Secure Version**:

```javascript
var SHEET_NAME = "Sheet1";
var CLOUDFLARE_SECRET_KEY = "YOUR_CLOUDFLARE_SECRET_KEY_HERE"; // <--- PASTE YOUR SECRET KEY HERE

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    // 1. Validate Cloudflare Turnstile Token
    var token = e.parameter['cf-turnstile-response'];
    if (!token) {
      throw new Error("Missing Captcha Token");
    }

    var validationResponse = UrlFetchApp.fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "post",
      payload: {
        secret: CLOUDFLARE_SECRET_KEY,
        response: token
      }
    });
    
    var validationResult = JSON.parse(validationResponse.getContentText());
    if (!validationResult.success) {
      throw new Error("Captcha Validation Failed");
    }

    // 2. Process Data
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName(SHEET_NAME);
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow() + 1;
    var newRow = [];

    // 3. Get Date in DD/MM/YYYY Format
    var formattedDate = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "dd/MM/yyyy HH:mm:ss");

    for (var i = 0; i < headers.length; i++) {
        var header = headers[i];
        if (header === "Timestamp") {
            newRow.push(formattedDate);
        } else {
            newRow.push(e.parameter[header]);
        }
    }

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": nextRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": e.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
```

3.  **Paste your Secret Key** into the code where indicated.
4.  **Save** (Ctrl+S).
5.  **Click Deploy > Manage Deployments**.
6.  Click the **Pencil icon** (Edit) next to your current deployment.
7.  Version: Select **New version**.
8.  Click **Deploy**. (The URL should stay the same).

### Step 3: Update React Code
1.  Open `src/pages/MemeCompetition.jsx`.
2.  Paste your **Site Key** into the `SITE_KEY` variable I added for you.
