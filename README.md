# Ojas Soni — Personal Website & AI Prompt Library

यह Ojas Soni की वेबसाइट (`ojassoni.com`) का सम्पूर्ण सोर्स कोड है, जिसे Lovable design (`https://ojassoni.lovable.app/` एवं `https://ai-prompt-library-for-student.lovable.app/`) के अनुसार exact reproduce करके तैयार किया गया है।

---

## 🌟 मुख्य विशेषताएँ (Features Implemented)

1. **नेविगेशन (Navigation Bar):**
   - नेविगेशन बार में **केवल 2 लिंक्स** रखे गए हैं: **About** (`/about`) और **Books** (`/book`)
   - user request के अनुसार Games, Gallery, Videos और Projects को navigation से पूरी तरह से हटा दिया गया है।

2. **बुकशेलफ़ पेज (Bookshelf Page - `/book`):**
   - Lovable design के अनुसार Dark Zinc Card (`bg-zinc-900`) के साथ बुक कवर (`cover.jpg`), 101 AI Prompts badge, features list और **Read Book** बटन।

3. **डिजिटल AI Prompt Library Book (`/prompt-library`):**
   - "Read Book" बटन पर क्लिक करने पर interactive 101 AI Prompts library open होती है।
   - exact Lovable design, paper page style (`book-page`), fonts (`Fraunces` & `Public Sans`), colors (`oklch` palette) |
   - real-time prompt search bar (101 prompts में तुरंत सर्च) |
   - 5 sections (Science, Maths, Social Science, Language, Exam Strategy) tab filters |
   - Table of Contents quick jump |
   - Instant "Copy Prompt" feedback toast notification |

4. **स्थानीय एसेट्स (Local Assets):**
   - सभी इमेजेस (`ojas-logo.png`, `ojas-portrait.jpg`, `cover.jpg`, `favicon.png`) को प्रोजेक्ट में स्थानीय रूप से `assets/images/` में सेव किया गया है ताकि external links पर निर्भरता न रहे।

5. **Hostinger Ready:**
   - Hostinger Apache server के लिए `.htaccess` फाइल शामिल की गई है ताकि Client-side routes (`/about`, `/book`, `/prompt-library`) refresh करने पर 404 error न दें।

---

## 🚀 Hostinger पर Deploy करने का तरीका (Deployment Guide)

### तरीका 1: Hostinger File Manager द्वारा (सबसे आसान)

1. अपने **Hostinger hPanel** में लॉग इन करें।
2. **Websites** पर जाएँ और `ojassoni.com` चुनकर **File Manager** पर क्लिक करें।
3. `public_html` फ़ोल्डर खोलें।
4. `d:\My Projects\ojassoni.website` फ़ोल्डर की सभी फाइलों और फ़ोल्डरों (`index.html`, `.htaccess`, `assets/` आदि) को zip करके `public_html` में Upload करें और वहां Extract कर दें।
5. ध्यान रखें कि **`.htaccess`** फाइल ज़रूर अपलोड हो (Hostinger File Manager में "Show Hidden Files" enable रखें)।

---

## 📁 फ़ोल्डर स्ट्रक्चर (Folder Structure)

```
d:\My Projects\ojassoni.website\
├── index.html                  # मुख्य HTML Entrypoint
├── .htaccess                   # Hostinger Apache routing & caching configuration
├── README.md                   # प्रोजेक्ट गाइड
└── assets\
    ├── css\
    │   └── style.css           # Lovable custom styles & OKLCH variables
    ├── images\
    │   ├── ojas-logo.png       # Ojas Soni Brand Logo
    │   ├── ojas-portrait.jpg   # Ojas Soni Portrait Image
    │   ├── cover.jpg           # Book Cover Image
    │   └── favicon.png         # Website Favicon
    └── js\
        ├── app.js              # SPA Router & Event handler
        ├── navbar.js           # Navigation bar (About & Books only)
        ├── footer.js           # Footer component
        ├── home.js             # Hero / Home page view
        ├── about.js            # About me page view
        ├── bookshelf.js        # Bookshelf page view (/book)
        ├── promptLibrary.js    # Interactive 101 AI Prompt Library Book view
        └── promptsData.js      # All 101 Prompts dataset across 5 sections
```
