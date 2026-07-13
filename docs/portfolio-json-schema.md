# 📋 portfolio.json Schema Reference

`public/portfolio.json` is the **single source of truth** for all content on the site. Editing this file is the only thing needed to update any portfolio content — no code changes required.

The file is fetched at runtime by `src/hooks/usePortfolio.ts` via `fetch('/portfolio.json')`.

---

## Full Schema

```jsonc
{
  "profile": { ... },    // Hero section: name, title, contact info, CV link
  "header": { ... },     // Nav bar: brand name + navigation links
  "experience": [ ... ], // Work history entries
  "projects": [ ... ],   // Project cards
  "skills": { ... },     // Programming languages + technologies
  "education": [ ... ],  // Education entries
  "footer": { ... }      // Footer: copyright name + social links
}
```

---

## `profile`

Controls the hero/profile card at the top of the page (`ProfileSection.tsx`).

```jsonc
"profile": {
  "name": "Mohammed Fazil Husen",        // Displayed as <h1>
  "title": "System Engineer at TCS",     // Displayed below name
  "location": "Hyderabad, India",        // Shown with a map pin icon
  "email": "fazil.husen6@gmail.com",     // Rendered as a mailto: link
  "linkedin": {
    "url": "https://www.linkedin.com/in/fazilhusen/",  // href
    "display": "linkedin.com/in/fazilhusen"            // visible link text
  },
  "github": {
    "url": "https://github.com/FazilKlkt",
    "display": "github.com/FazilKlkt"
  },
  "cvLink": "https://drive.google.com/..."  // Opens in new tab from "Download CV" button
}
```

---

## `header`

Controls the top navigation bar (`Header.tsx`).

```jsonc
"header": {
  "brandName": "Fazil Husen 🙃",  // Shown next to the GitHub icon on the left
  "navItems": [
    { "label": "Projects",   "href": "#projects"   },
    { "label": "Experience", "href": "#experience" },
    { "label": "Education",  "href": "#education"  },
    { "label": "Skills",     "href": "#skills"     }
  ]
}
```

> **Important:** `href` values must match the `id` attributes on the corresponding section elements (e.g., `id="experience"` in `ExperienceSection.tsx`). These drive in-page anchor navigation.

---

## `experience`

An array of work experience entries rendered as cards in `ExperienceSection.tsx`.

```jsonc
"experience": [
  {
    "company": "Tata Consultancy Services Ltd.",
    "companyLink": null,            // null = no hyperlink on the company icon; string = clickable link
    "position": "System Engineer",
    "duration": "Feb 2025 – Present",
    "location": "Hyderabad, India",
    "isInternship": false,          // true = renders an "Internship" badge + lighter card style
    "bullets": [                    // Rendered as an unordered list inside the card
      "Experience in API Management using Apigee...",
      "..."
    ]
  }
]
```

**Key fields:**

| Field | Type | Notes |
|-------|------|-------|
| `company` | `string` | Company name displayed as `<h3>` |
| `companyLink` | `string \| null` | If provided, wraps the briefcase icon in an `<a>` tag |
| `position` | `string` | Job title |
| `duration` | `string` | Free-form date range |
| `location` | `string` | Shown with a map pin icon |
| `isInternship` | `boolean` | Toggles "Internship" badge and card background color |
| `bullets` | `string[]` | Bullet points describing responsibilities |

---

## `projects`

An array of project cards rendered in `ProjectsSection.tsx`.

```jsonc
"projects": [
  {
    "name": "WAN Link - File Sharing Platform",
    "description": "A website made using ReactJS and NodeJS...",
    "technologies": ["ReactJS", "NodeJS"],  // Rendered as pill/tag chips
    "projectLink": null,                    // null = no link button; string = external link
    "stars": null,                          // null = not shown; number = displayed
    "forks": null                           // null = not shown; number = displayed
  }
]
```

| Field | Type | Notes |
|-------|------|-------|
| `name` | `string` | Project title |
| `description` | `string` | Short description paragraph |
| `technologies` | `string[]` | Rendered as tag chips |
| `projectLink` | `string \| null` | External URL; `null` hides the link button |
| `stars` | `number \| null` | GitHub stars count; `null` hides it |
| `forks` | `number \| null` | GitHub forks count; `null` hides it |

---

## `skills`

Controls the skills section (`SkillsSection.tsx`). Both fields are arrays of plain strings.

```jsonc
"skills": {
  "programmingLanguages": ["Java", "Javascript", "Python", "SQL", "C++"],
  "technologies": ["Apigee", "Linux", "Springboot", "NodeJS", "ReactJS", "NextJS", "GKE", "AWS", "Docker", "ELK", "Prometheus"]
}
```

---

## `education`

An array of education entries rendered in `EducationSection.tsx`.

```jsonc
"education": [
  {
    "school": "Manipal Institute of Technology",
    "degree": "Master of Computer Application",
    "duration": "2022 – 2024",
    "location": "Manipal, Karnataka"
  }
]
```

---

## `footer`

Controls the page footer (`Footer.tsx`).

```jsonc
"footer": {
  "name": "Fazil",  // Used in: "© 2025 Fazil. All rights reserved."
  "socialLinks": [
    {
      "label": "GitHub",
      "href": "https://github.com/FazilKlkt",
      "icon": "github"    // Must be one of: "github" | "linkedin" | "mail"
    },
    {
      "label": "LinkedIn",
      "href": "https://www.linkedin.com/in/fazilhusen/",
      "icon": "linkedin"
    },
    {
      "label": "Email",
      "href": "mailto:fazil.husen6@gmail.com",
      "icon": "mail"
    }
  ]
}
```

> **`icon` values are constrained.** The `Footer.tsx` component uses an `iconMap` keyed on `"github" | "linkedin" | "mail"`. Using any other value will render nothing.

---

## TypeScript Types

All types for `portfolio.json` are defined and exported from `src/hooks/usePortfolio.ts`. If you add new fields to the JSON, add them to the corresponding type there too.

```
PortfolioData       ← top-level shape
  ├── profile       ← inline object type
  ├── header        ← { brandName, navItems: NavItemData[] }
  ├── experience    ← ExperienceData[]
  ├── projects      ← ProjectData[]
  ├── skills        ← { programmingLanguages, technologies }
  ├── education     ← EducationData[]
  └── footer        ← { name, socialLinks: SocialLinkData[] }
```
