---
sidebar_position: 1
title: رفع النصوص
---

أضف النصوص القابلة للترجمة إلى Wordiy. انتقل إلى مشروعك وافتح صفحة **المفاتيح** للبدء.

![نظرة عامة على المفاتيح](/img/screenshots/upload-strings-keys-overview.png)

## طرق الرفع

### 1. رفع ملف

استورد ملفات الترجمة الموجودة مباشرةً إلى Wordiy.

1. انتقل إلى مشروعك
2. انقر على أيقونة **الاستيراد** في الشريط الجانبي الأيسر
3. اسحب الملف أو انقر **اختر ملفًا** للتحديد من جهازك
4. حدد **اللغة** (اختياري) و**وضع الاستيراد**
5. انقر **استيراد**

![صفحة الاستيراد](/img/screenshots/upload-strings-import.png)

الصيغ المدعومة:

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

### 2. الإدخال اليدوي

أضف نصوصًا فردية مباشرةً من صفحة المفاتيح.

1. انقر زر **+ KEY** في الزاوية اليمنى العليا
2. أدخل اسم **المفتاح** (أحرف وأرقام و`.` و`_` و`-` مسموح بها)
3. أضف **وصفًا** و**وسوم** اختيارية
4. أدخل ترجمة اللغة الأساسية
5. انقر **إنشاء**

![نموذج مفتاح جديد](/img/screenshots/upload-strings-new-key.png)

### 3. تكامل API

استخدم REST API لمزامنة النصوص تلقائيًا من قاعدة الكود الخاصة بك.

```bash
curl -X POST https://app.wordiy.dev/v2/projects/{project_id}/keys \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"key": {"name": "welcome_message", "translations_attributes": [{"language_id": 1, "text": "مرحبًا"}]}}'
```

راجع [مرجع API](/docs/api) للتوثيق الكامل.

## أمثلة على الصيغ

### JSON

```json
{
  "welcome_message": "مرحبًا بك في تطبيقنا",
  "button_submit": "إرسال",
  "error_404": "الصفحة غير موجودة"
}
```

### Ruby YAML

```yaml
ar:
  welcome_message: مرحبًا بك في تطبيقنا
  button_submit: إرسال
  error_404: الصفحة غير موجودة
```

### CSV

```csv
key,value
welcome_message,مرحبًا بك في تطبيقنا
button_submit,إرسال
error_404,الصفحة غير موجودة
```

## الخطوات التالية

- [ترجمة النصوص](translate.md)
- [مراجعة الترجمات](review.md)
- [تصدير الترجمات](export.md)
