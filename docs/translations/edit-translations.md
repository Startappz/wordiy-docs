---
sidebar_position: 2
title: Edit Translations
---

Learn how to edit and manage translations in Wordiy.

## Accessing the Translation Editor

Navigate to your project and open the **Keys** page. Each row shows the key name on the left and its current translation on the right.

![Keys List](/img/screenshots/edit-translations-keys-list.png)

### Open a Translation

1. Navigate to your **Project**
2. Click on any translation row to open the inline editor
3. The editor opens on the right side of the screen

### Translation View

The translations view shows:

- **Source language** (original string) on the left
- **Target language** (translation) on the right
- **Comments** for context and notes
- **History** tracking all changes
- **Status** (pending, approved, rejected)

## Translation Editor Interface

Click any translation to open the editor. The right panel shows Machine Translation suggestions, Comments, Tasks, and History.

![Translation Editor](/img/screenshots/edit-translations-editor.png)

### Main Editing Panel

The editor includes:

- **Translation Input Field** — Where you type the translation
- **Character Counter** — Shows current/maximum characters (if limit is set)
- **Placeholder Indicators** — Visual markers for dynamic content
- **AI Suggestions** — Machine translation suggestions
- **Translation Memory** — Similar translations from past projects

### Editor Modes

#### Visual Mode (Default)

- Displays placeholders as highlighted boxes
- Easy to click and insert placeholders
- Best for most translators
- Shows formatted text as it appears

#### Code Mode

- Shows raw text with placeholder syntax
- Useful for complex formatting
- Allows direct text manipulation
- Good for advanced editors

**Toggle between modes:** Click the "Code/Visual" button in the editor

## Working with Placeholders

### Placeholder Types

**Variable Placeholders**

```text
Hello {name}!
```

- Replaced with dynamic content
- Common in user names, dates, numbers

**ICU Placeholders**

```text
{count, plural, one {# item} other {# items}}
```

- Handle pluralization rules
- Support conditional logic

### Inserting Placeholders

In Visual Mode:

1. Click where you want the placeholder
2. Click the placeholder from the suggestions
3. It's automatically inserted

In Code Mode:

1. Type the placeholder syntax directly
2. Example: `{variable_name}`
3. Save to validate

### Viewing Missing Placeholders

If a placeholder is missing:

1. Look for the red warning indicator
2. Click on the missing placeholder
3. Choose to insert it or continue

## Plural Translations

When a string has plural forms, each form appears in a separate field:

```text
One item: "1 item"
Other items: "{count} items"
```

Each field shows:

- **Example number** — How many items (1, 5, etc.)
- **Plural form** — The grammatical form
- **Translation field** — Where you type

Tips for plural translations:

- Use consistent variable names
- Keep structure similar across forms
- Test with example numbers

## Character Limits

Some strings have character limits (e.g., UI buttons, short labels):

```text
Translation: "Save"
Limit: 10 characters
Current: 4/10 ✓
```

### When Over Limit

- The counter turns red
- A warning appears
- You can still save with confirmation
- But it may break the UI layout

Best practices:

- Keep translations within limits when possible
- Use shorter synonyms
- Abbreviate when appropriate

## Comments & Context

### Viewing Comments

Comments provide context from developers:

- **Purpose** — Why this string exists
- **Context** — Where it appears in the app
- **Examples** — How the string is used

### Leaving Comments

1. Click the **Comments** panel on the right side of the editor
2. Type your question or note
3. Click **Post**
4. Others can reply to your comment

Good comments:

- Ask for clarification
- Point out translation issues
- Suggest improvements
- Report context problems

## Translation Status

Each translation can have a status:

| Status | Meaning | Who Can Set |
| --- | --- | --- |
| **Pending** | Waiting to be reviewed | Translator |
| **Approved** | Verified correct | Reviewer |
| **Rejected** | Needs changes | Reviewer |
| **In Progress** | Currently being worked on | Translator |

### Submitting for Review

1. Complete your translation
2. Click **Submit for Review**
3. Choose reviewers (optional)
4. Add a message
5. Submit

## Translation Memory

The right panel shows **Machine Translation** suggestions. Click **Fetch Suggestions** to get AI-powered translations for the current string.

![Machine Translation Panel](/img/screenshots/edit-translations-mt-suggestions.png)

Translation Memory (TM) also shows similar translations:

- **From this project** — Previous translations
- **From other projects** — Team's historical translations
- **AI suggestions** — Machine translations

### Using TM Suggestions

1. Review suggestions in the panel
2. Click to use a suggestion
3. Edit if needed
4. Save

**Tip:** Consistent use of TM ensures terminology consistency.

## Keyboard Shortcuts

| Shortcut | Action |
| --- | --- |
| `Tab` | Move to next translation |
| `Shift + Tab` | Move to previous translation |
| `Ctrl/Cmd + S` | Save translation |
| `Ctrl/Cmd + Enter` | Submit for review |
| `Escape` | Close editor |

## Saving & Submitting

### Save Draft

- Saves your translation locally
- Not yet visible to reviewers
- You can come back and edit

Click **Save**

### Submit for Review

- Marks translation as complete
- Reviewers can approve/reject
- Shows as "Pending Review"

Click **Submit for Review**

### Approve (Reviewers Only)

- Confirms translation is correct
- Marks as "Approved"
- Ready for export

Click **Approve**

### Reject (Reviewers Only)

- Sends back for changes
- Includes feedback message
- Translator can revise

Click **Reject** and add a message

## Best Practices

### Before Translating

- Read comments and context
- Check translation memory
- Review similar strings
- Understand the terminology

### While Translating

- Keep tone consistent
- Maintain proper length
- Preserve formatting
- Use placeholders correctly

### After Translating

- Proofread carefully
- Check placeholders
- Verify character limits
- Submit for review

## Common Issues

### Placeholder Won't Insert

- Check placeholder name is correct
- Ensure you're in visual mode
- Verify the string supports placeholders

### Character Limit Exceeded

- Use shorter synonyms
- Abbreviate where appropriate
- Check if space is optional

### Can't Save Translation

- Check if field is required
- Verify no HTML/forbidden characters
- Ensure placeholders are valid

### Translation Not Appearing

- Confirm it's marked "Approved"
- Check language is selected in export
- Verify file format

## Next Steps

- [Review translations](/docs/translations/review)
- [Export translations](/docs/translations/export)
- [Manage translation memory](/docs/translations/translation-memory)
