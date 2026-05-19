---
sidebar_position: 1
title: Upload Strings
---

Add your translatable strings to Wordiy. Navigate to your project and open the **Keys** page to get started.

![Keys Overview](/img/screenshots/upload-strings-keys-overview.png)

## Upload Methods

### 1. File Upload

Import your existing translation files directly into Wordiy.

1. Go to your project
2. Click the **Import** icon in the left sidebar
3. Drop your file or click **Select File** to choose from your computer
4. Set the **Locale** (optional) and **Import Mode**
5. Click **Import**

![Import Page](/img/screenshots/upload-strings-import.png)

Supported formats:

- JSON
- XLIFF / Apple XLIFF
- PO PHP / PO C/C++ / PO Python
- Apple Strings / Apple Stringsdict / Apple Strings Catalog
- Android XML
- Compose Multiplatform XML
- Flutter ARB
- Ruby YAML
- i18next
- .NET RESX
- XLSX / CSV

### 2. Manual Entry

Add individual strings directly from the Keys page.

1. Click the **+ KEY** button in the top right
2. Enter the **Key** name (letters, numbers, `.`, `_`, `-` allowed)
3. Add an optional **Description** and **Tags**
4. Enter the base language translation
5. Click **Create**

![New Key Form](/img/screenshots/upload-strings-new-key.png)

### 3. API Integration

Use the REST API to automatically sync strings from your codebase.

```bash
curl -X POST https://app.wordiy.dev/v2/projects/{project_id}/keys \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"key": {"name": "welcome_message", "translations_attributes": [{"language_id": 1, "text": "Welcome"}]}}'
```

See the [API Reference](/docs/api) for full documentation.

## Format Examples

### JSON

```json
{
  "welcome_message": "Welcome to our app",
  "button_submit": "Submit",
  "error_404": "Page not found"
}
```

### Ruby YAML

```yaml
en:
  welcome_message: Welcome to our app
  button_submit: Submit
  error_404: Page not found
```

### CSV

```csv
key,value
welcome_message,Welcome to our app
button_submit,Submit
error_404,Page not found
```

## Next Steps

- [Translate strings](translate.md)
- [Review translations](review.md)
- [Export translations](export.md)
