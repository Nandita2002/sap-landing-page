# 📋 Google Sheets Integration — Setup Guide
## Rise Infotech Lead Capture

---

## Step 1 — Create your Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a **new spreadsheet**
2. Rename the first sheet tab (bottom) to: **`Leads`**
3. Leave the sheet empty — the script will auto-create the header row on first submission

---

## Step 2 — Open Google Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**
2. Delete all existing code in the editor
3. Copy the entire contents of **`google-apps-script.js`** and paste it in
4. Click **Save** (💾 icon or Ctrl+S)
5. Name the project something like `Rise Infotech Lead Capture`

---

## Step 3 — Deploy as a Web App

1. Click **Deploy → New deployment**
2. Click the ⚙️ gear icon next to "Select type" → choose **Web app**
3. Fill in the settings:
   - **Description:** Lead Capture v1
   - **Execute as:** Me
   - **Who has access:** ✅ **Anyone** ← this is important!
4. Click **Deploy**
5. Click **Authorize access** → choose your Google account → Allow
6. **Copy the Web App URL** — it looks like:
   ```
   https://script.google.com/macros/s/AKfycb.../exec
   ```

---

## Step 4 — Add the URL to your project

1. Open **`lib/useSheetSubmit.ts`** in your Next.js project
2. Replace the placeholder URL on this line:
   ```ts
   export const APPS_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec";
   ```
   With your actual deployed URL from Step 3.

---

## Step 5 — Add the hook file to your project

Copy **`useSheetSubmit.ts`** into your project at:
```
your-project/
  lib/
    useSheetSubmit.ts   ← put it here
```

If you don't have a `lib/` folder, create one at the root of your project.

---

## Step 6 — Test it

1. Run your Next.js app locally: `npm run dev`
2. Fill out any form (Hero, Popup, Sticky, or Floating Widget)
3. Click Submit
4. Open your Google Sheet — a new row should appear within seconds ✅

---

## What gets captured

| Column | Description |
|--------|-------------|
| Timestamp | Date & time in IST (Asia/Kolkata) |
| Source | Which form was used (Hero Form / Popup Form / Sticky Enquiry / Floating Widget) |
| Name | Student's name |
| Email | Student's email |
| Phone | Student's phone number |
| Message | Optional message field |

---

## Troubleshooting

**Submissions not appearing in the sheet?**
- Make sure "Who has access" is set to **Anyone** (not "Anyone with Google account")
- Re-deploy after any script changes: Deploy → Manage deployments → Edit → New version

**Getting a CORS error?**
- This is expected and safe to ignore — we use `mode: "no-cors"` which prevents reading the response but the data still reaches Google

**Want email notifications for new leads?**
Add this to `google-apps-script.js` inside the `doPost` function after `sheet.appendRow(...)`:
```javascript
MailApp.sendEmail("your@email.com", "New Lead — Rise Infotech", 
  `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nSource: ${data.source}`
);
```
