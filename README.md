# NotebookLM Education Hub 🎓

**Turn your textbooks into an interactive AI Tutor.**

This repository hosts a curated, structured collection of educational resources (Textbooks, Exemplars, Solutions) optimized for use with [Google NotebookLM](https://notebooklm.google.com/).

The goal is to provide students and educators with clean, machine-readable datasets to build their own "Mega-Brain" AI study assistants.

## 🚀 The "Hub & Spoke" Strategy

We organize content to support two powerful study modes:

1.  **🌟 The Hub ("Mega-Brain")**:
    *   **Goal:** Full syllabus simulation.
    *   **Content:** All chapters + All exemplars combined.
    *   **Use Case:** Mock exams, cross-chapter connections, and comprehensive revision.
2.  **🔍 The Spokes ("Deep Dives")**:
    *   **Goal:** Chapter mastery.
    *   **Content:** Specific chapter files (e.g., `cbse_10_maths_ch06_triangles_...`).
    *   **Use Case:** Audio overviews (podcasts) for specific topics, deep concept drilling.

## 📂 Repository Structure

The repository follows a strict `Board -> Class -> Subject` hierarchy to ensure scalability.

```text
notebooklm-education-hub/
├── CBSE/
│   ├── Class_10/
│   │   ├── Mathematics/
│   │   │   ├── docs/          # Optimized PDFs (renamed for AI context)
│   │   │   └── README.md      # Chapter index & Study Links
│   │   └── Science/
│   └── Class_12/
├── ICSE/
└── State_Boards/
```

## 📝 Naming Convention

To prevent AI hallucinations and ambiguity, all files follow this specific naming convention:

`[board]_[class]_[subject]_ch[number]_[chapter_name]_[type].pdf`

**Examples:**
*   `cbse_10_maths_ch06_triangles_textbook.pdf`
*   `cbse_10_maths_ch06_triangles_exemplar.pdf`

This ensures that even if you combine 50 files into one notebook, the AI knows exactly which source it is citing.

## ⚡ Quick Start Guide

1.  **Navigate** to your desired subject folder (e.g., `CBSE/Class_10/Mathematics/`).
2.  **Download** the `docs` folder or specific chapter files.
3.  **Go to** [NotebookLM](https://notebooklm.google.com/) and create a new notebook.
4.  **Upload** the files.
5.  **Start Learning!** Try asking: *"Create a quiz based on the hardest concepts in this chapter."*

## 🤝 Contributing

We welcome contributions! If you want to add resources for a new subject or board:

1.  Create a new folder following the `Board/Class/Subject` structure.
2.  Ensure PDFs are clean (OCR enabled) and renamed using our convention.
3.  Submit a Pull Request.

---
*Disclaimer: This repository provides structure and metadata. Educational content copyright remains with the respective boards (NCERT, CBSE, etc.).*
