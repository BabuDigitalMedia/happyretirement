
# Google Form Setup Instructions

## Step 1: Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Click "Create a new form"
3. Add the following fields:
   - **Name** (Short answer)
   - **Email** (Short answer)
   - **Phone** (Short answer)
   - **Source** (Short answer - optional, for tracking)

## Step 2: Get the Form URL and Field IDs

1. Click "Send" in your Google Form
2. Click the link icon to get the shareable link
3. Copy the form ID from the URL (the long string after `/forms/d/` and before `/edit`)

Example URL: `https://docs.google.com/forms/d/1FAIpQLSe...abc123.../edit`
Form ID: `1FAIpQLSe...abc123...`

## Step 3: Get Field IDs

1. Open your form in "preview" mode
2. Right-click on the first field and "Inspect Element"
3. Look for `name="entry.XXXXXXXXX"` - the number after "entry." is your field ID
4. Repeat for each field

## Step 4: Update the Code

Replace the placeholders in both `Hero.tsx` and `LeadMagnet.tsx`:

```javascript
// Replace YOUR_FORM_ID with your actual form ID
const googleFormUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';

// Replace the entry IDs with your actual field IDs
googleFormData.append('entry.YOUR_NAME_FIELD_ID', formData.name);
googleFormData.append('entry.YOUR_EMAIL_FIELD_ID', formData.email);
googleFormData.append('entry.YOUR_PHONE_FIELD_ID', formData.phone);
googleFormData.append('entry.YOUR_SOURCE_FIELD_ID', 'Hero Form - Retirement Guide');
```

## Step 5: Set Up Google Sheets (Optional)

1. In your Google Form, click "Responses"
2. Click the Google Sheets icon to create a linked spreadsheet
3. All form submissions will automatically appear in the spreadsheet

## Benefits of Google Forms

- ✅ 100% reliable - no API issues
- ✅ Free to use
- ✅ Automatic Google Sheets integration
- ✅ Built-in spam protection
- ✅ Easy to manage responses
- ✅ No authentication required

The forms will work immediately once you update the URLs and field IDs!
