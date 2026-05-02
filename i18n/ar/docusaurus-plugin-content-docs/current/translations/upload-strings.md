---
sidebar_position: 1
title: Upload Strings
---

# Upload Translatable Strings

Add your translatable strings to Wordiy.

## Upload Methods

### 1. File Upload

1. Go to your project
2. Click **Upload Strings**
3. Select your file (JSON, YAML, CSV)
4. Click **Upload**

Supported formats:
- JSON
- YAML
- CSV
- Properties files

### 2. Manual Entry

1. Click **+ Add String**
2. Enter the string key and value
3. Click **Save**

### 3. API Integration

Use the REST API to automatically sync strings from your codebase.

## Format Examples

### JSON
```json
{
  "welcome_message": "Welcome to our app",
  "button_submit": "Submit",
  "error_404": "Page not found"
}
```

### YAML
```yaml
welcome_message: Welcome to our app
button_submit: Submit
error_404: Page not found
```

### CSV
```
key,value
welcome_message,Welcome to our app
button_submit,Submit
error_404,Page not found
```

## Next Steps

- [Configure translations](translate.md)
- [Invite your team](../team/invite-members.md)
- [Set up machine translation](../ai/machine-translation.md)

