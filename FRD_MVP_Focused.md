# Functional Requirements Document (FRD) — MVP Only
## Science Fair Guidebook — Educational Website

**Project Name:** Science Fair Guidebook  
**Version:** 2.0 (MVP-Focused)  
**Date:** August 2026  
**Status:** In Development  
**Scope:** Launch MVP (Months 1–2 only; Phases 2–5 in separate roadmap)

---

## 1. Executive Summary

The Science Fair Guidebook is an **informational-only educational web platform** providing middle and high school students (ages 11–18) with free, curated guidance on science fair research. It offers articles, topic ideas, downloadable templates, and stage-based guides—without tracking, accounts, or community features.

The platform is **free, open access**, hosted on Vercel's free tier. No login required to browse. All content is educational reference material.

### MVP Scope
- **Launch goal:** Students can browse topics, read articles, follow 3 guided stages (Ideation, Research, Presentation Prep), and download templates.
- **Out of launch:** Project creation, progress tracking, accounts, team collaboration, mentorship, peer forums, AI tools, certificates, admin dashboards, analytics.

---

## 2. Product Overview

### 2.1 Purpose
Reduce student anxiety and project abandonment by providing a structured, free, self-directed guide through the science fair research process. No barriers to entry, no payment, no account login required to browse.

### 2.2 MVP Scope Definition
| Aspect | In MVP | Post-Launch (Phase 2+) |
|--------|--------|----------------------|
| **Content** | 15 articles, 5 templates, 3 stage guides | 50+ articles, videos, case studies |
| **Browse** | Topics, articles, templates (public) | Personalized recommendations |
| **Accounts** | None (information-only) | Optional user accounts |
| **Progress Tracking** | None | Project tracking, milestones, badges |
| **Feedback** | None (read-only) | Mentor requests, peer review, forums |
| **Downloads** | PDF templates | Editable docs, slides, certificates |
| **Moderation** | Not required | User-generated content moderation |
| **AI Features** | None | Hypothesis generator, timeline calculator |

### 2.3 Non-Goals for Launch
The following features **will not ship in MVP** and are explicitly out of scope:

- ❌ User accounts or authentication
- ❌ Project creation or saving
- ❌ Progress tracking, milestones, or project status
- ❌ Parental consent flows or age verification enforcement
- ❌ Team collaboration or shared workspaces
- ❌ Mentorship requests or messaging
- ❌ Peer forums, discussion boards, or comments
- ❌ Public project gallery or user profiles
- ❌ AI-powered hypothesis generator or design wizard
- ❌ Certificates, badges, or achievement system
- ❌ Admin dashboard, content moderation UI, analytics
- ❌ Mobile native app (web-responsive only)
- ❌ Multilingual support
- ❌ Video hosting or embedded tutorials
- ❌ Real-time updates or live collaboration
- ❌ File uploads or PDF export

---

## 3. Target Audience (MVP)

### Primary Users
- **Middle and high school students** (ages 11–18)
- Self-directed or school-assigned science fair projects
- **Beginner to intermediate** technical skill
- Access via public URL, no signup required to browse
- Browse anonymously; optional account to save projects

### Secondary Users (Phase 2+)
- Teachers using platform for curriculum support
- Parents supporting at-home research
- Science fair coordinators
- Volunteer mentors (post-launch with safety vetting)

---

## 4. Core User Journeys (MVP Only)

### Journey 1: Browse Topics & Ideas (All Users)
```
Homepage → Browse Topics/Categories → Read Topic Description → Download Starter Worksheet
```

### Journey 2: Read & Learn (All Users)
```
Article Directory → Search/Filter by Stage/Discipline → Read Article → View Related Articles → Download Template
```

### Journey 3: Stage-Based Guidance (All Users)
```
Browse Stages → Select Stage (Ideation/Research/Presentation) → Read Stage Guide → Review Checklist → Download Templates
```

### Journey 4: Download & Use Offline (All Users)
```
Find Template → Download PDF/DOCX → Print or Edit Locally → Use for Project
```

---

## 5. Functional Requirements — MVP Only

### 5.1 Landing Page & Discovery

**FR-1.1: Public Homepage (No Login Required)**
- Hero section: "Science Fair Guidebook — Free Learning Resource"
- Three quick-link buttons: Browse Topics, Read Guides, Browse Stages
- Sample topic cards (3–5 examples with descriptions)
- Brief explanation: "Learn at your own pace. All content is free and public."
- Footer: Privacy policy, About, Contact

**FR-1.2: Topic Browse (All Users)**
- Browsable, static list of 15 science fair topic ideas
- Organized by category: Biology, Chemistry, Physics, Engineering, Environmental
- For each topic: Title, description (1–2 sentences), difficulty level (Beginner/Intermediate/Advanced)
- Click topic to read full description
- Download link to "Starter Worksheet (PDF)" for each topic
- No accounts, no tracking, no personalization

**FR-1.3: Stage Browse (All Users)**
- Three stage cards (Ideation, Research, Presentation)
- For each stage: Overview, timeline, what to expect
- Click stage to view full stage guide + checklist + related resources
- Static, same for all users

**FR-1.4: Article Directory (All Users)**
- Searchable, filterable list of 15 core articles
- Filter by: Stage (Ideation/Research/Presentation), Discipline (Biology/Chemistry/Physics/Engineering/Environmental)
- Each article preview: Title, author, read time, short description
- Click to read full article
- No personalization; same view for all users

---

### 5.2 No User Authentication (Information-Only Platform)

**Status:** No user accounts in MVP. Platform is entirely public and read-only.

- ❌ No sign-up, no login, no email collection
- ❌ No user profiles or accounts
- ❌ No age verification or parental consent
- ❌ No password reset or session management
- ❌ No personalization or saved state

**Rationale:** Simplifies MVP, removes privacy/safety complexity, focuses on pure educational content delivery.

---

### 5.3 Stage-Based Guidance (Read-Only, No Tracking)

**FR-2.1: Stage Guide Pages (Public, All Users)**

#### Stage 1: Ideation & Planning
- **Read-only guide:** "How to Frame Your Research Question"
- **Checklist (reference only, not saved):**
  - Do I have a clear research question?
  - Is my question testable?
  - Do I know what I'm trying to find out?
- **Downloadable worksheet:** Research Question Worksheet (PDF)
- **Downloadable template:** Hypothesis Template (DOCX)
- **Related articles:** 
  - How to Ask the Perfect Research Question
  - Hypothesis vs. Prediction
  - Literature Review: Finding Sources

#### Stage 2: Research & Experimentation
- **Read-only guide:** "Designing Your Experiment"
- **Checklist (reference only, not saved):**
  - Have I read 3+ sources on my topic?
  - Have I designed my experiment?
  - Have I identified variables (independent, dependent, controlled)?
  - Do I have a data recording plan?
- **Downloadable worksheet:** Experiment Design Worksheet (PDF)
- **Downloadable template:** Lab Notebook Template (DOCX)
- **Related articles:**
  - Designing a Controlled Experiment
  - Variables Explained
  - Data Collection Best Practices
  - Lab Safety 101

#### Stage 3: Presentation Preparation
- **Read-only guide:** "Preparing Your Poster & Pitch"
- **Checklist (reference only, not saved):**
  - Have I analyzed my results?
  - Have I created a poster outline?
  - Have I written a 60-second summary?
  - Can I answer likely judge questions?
- **Downloadable worksheet:** Presentation Checklist (PDF)
- **Downloadable templates:** 
  - Poster Outline Template (PDF)
  - Pitch Script Template (DOCX)
- **Related articles:**
  - Poster Design 101
  - The 60-Second Pitch
  - Answering Judge Questions

**FR-2.2: Checklists**
- Checklists are **reference guides only** (not functional, not saved)
- Users can print checklists or copy to document
- No progress tracking, no completion status, no data collection

---

### 5.4 Knowledge Base (Read-Only, 15 Articles)

**FR-3.1: Article Display**
- Clean, readable text layout; images allowed (inline, max 600px width)
- No video, no interactive elements, no LaTeX in MVP
- Estimated read time shown at top
- "Related Articles" section at bottom (2–3 links, manually curated)
- No comments, no ratings, no social sharing, no tracking

**FR-3.2: Article Structure (Fixed)**
Each article includes:
- Title, publication date (month/year), author
- Word count, estimated read time
- Body text (markdown rendered as HTML)
- Images (if applicable)
- Related articles links at bottom
- No user-generated content, no tracking

**FR-3.3: Topics Covered (15 Launch Articles)**

| # | Title | Stage | Discipline |
|----|-------|-------|-----------|
| 1 | What is a Science Fair? | Getting Started | General |
| 2 | The Scientific Method Explained | Ideation | General |
| 3 | How to Ask the Perfect Research Question | Ideation | General |
| 4 | Hypothesis vs. Prediction | Ideation | General |
| 5 | Literature Review: Finding Sources | Research | General |
| 6 | Designing a Controlled Experiment | Research | General |
| 7 | Variables Explained (Independent, Dependent, Controlled) | Research | General |
| 8 | Lab Safety 101 | Research | General |
| 9 | Data Collection Best Practices | Research | General |
| 10 | Organizing Your Data | Analysis | General |
| 11 | Basic Statistics for Science Fairs | Analysis | General |
| 12 | Creating Effective Graphs & Charts | Analysis | General |
| 13 | Poster Design 101 | Presentation | General |
| 14 | The 60-Second Pitch | Presentation | General |
| 15 | Answering Judge Questions Like a Pro | Presentation | General |

---

### 5.5 Templates (5 Downloads, No Editable Docs)

**FR-4.1: Template Library**
- 5 downloadable PDF/DOCX templates (static files)
- No editable Google Docs, web editor, or auto-fill in MVP
- Each template: Title, description, stage, download link
- All downloads are free, no signup required

| # | Template | Format | Stage |
|----|----------|--------|-------|
| 1 | Research Question Worksheet | PDF | Ideation |
| 2 | Hypothesis & Prediction Template | DOCX | Ideation |
| 3 | Experiment Design Planner | PDF | Research |
| 4 | Lab Notebook (Data Recording) | DOCX | Research |
| 5 | Poster Outline & Checklist | PDF | Presentation |

**FR-4.2: Template Download**
- One-click download, no account required
- Static files, no personalization or auto-fill
- File size: <5MB
- Users download locally and use offline

---

## 6. Information-Only Platform (No Data Collection)

### 6.1 Privacy & Data Collection
- **No user accounts:** No email collection, no sign-up, no login
- **No tracking cookies:** No behavioral tracking, no analytics beyond basic page views
- **No personal data:** Users provide no information
- **Static sessions only:** No session storage, no user state
- **Content is public:** All articles, topics, templates are freely available to everyone

### 6.2 Safety Considerations
- **All content is curator-authored:** No user-generated content means no moderation burden
- **Explicit disclaimer:** "This is an educational reference. Do not share personal information online."
- **No contact features:** No messaging, no email exchange, no peer contact
- **Link policy:** Articles do not include links to external sites (except optional attribution)
- **Age-appropriate content:** All content reviewed for grade 6–12 audience

### 6.3 Privacy Policy
- **Required sections:**
  - No data collection statement
  - External links (if any) policy
  - Cookies (minimal, none for tracking)
  - Contact information for questions
  - Plain language, <8th-grade reading level

### 6.4 Terms of Service
- **Required sections:**
  - Educational use only (not for commercial purposes)
  - Do not share personal information online
  - Content copyright and attribution
  - Disclaimer of warranties
  - No liability for external links

---

## 7. Non-Functional Requirements (MVP)

### 7.1 Performance
- **Page load:** <3 sec (mobile), <2 sec (desktop)
- **API response:** <500ms (p95)
- **Uptime:** 99% (48 min downtime/month acceptable for MVP)

### 7.2 Scalability
- Support 1000+ concurrent users (pilot launch)
- Scale to 5000+ concurrent by end of month 2
- Database: 50MB storage (15 articles, 5 templates)
- No user data storage (no accounts = minimal DB)

### 7.3 Security
- HTTPS/TLS for all pages
- No authentication/passwords (not applicable)
- No CSRF protection needed (no forms)
- No SQL injection vectors (read-only database)
- XSS prevention (HTML sanitization on article content)
- Rate limiting: 100 req/min per IP (generous for public content)

### 7.4 Accessibility (WCAG 2.1 Level A, target AA)
- Color contrast: 4.5:1 for normal text
- Keyboard navigation: All interactive elements keyboard-accessible
- Alt text: All images, icons
- Semantic HTML: `<h1>`, `<h2>`, lists, landmarks
- Mobile: Touch targets ≥44x44px
- No Flash, no auto-playing media

### 7.5 Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- iOS Safari 12+, Android Chrome 8+

### 7.6 Mobile Design
- Mobile-first responsive design
- No app download required; web-only
- Readable on 375px (phone) and up

---

## 8. Requirements Table (Acceptance Criteria)

| ID | Priority | Feature | User Story | Acceptance Criteria | Dependencies |
|----|----------|---------|-----------|-------------------|--------------|
| FR-1.1 | P0 | Public Homepage | As a visitor, I want to understand what Science Fair Guidebook offers | Homepage loads in <2s; hero text clear; 3 quick-link buttons visible; no login gate | — |
| FR-1.2 | P0 | Browse Topics | As a visitor, I want to explore science fair topic ideas | 15 topics listed, organized by category (Bio/Chem/Physics/Eng); click to read full topic + download worksheet | — |
| FR-1.3 | P0 | Stage Browse | As a visitor, I want to learn the stages of a science fair project | 3 stage cards (Ideation/Research/Presentation) visible; click to view stage guide + checklist | — |
| FR-1.4 | P0 | Article Directory | As a visitor, I want to find learning articles | 15 articles listed, searchable, filterable by Stage/Discipline; page loads in <2s | — |
| FR-2.1 | P0 | Stage 1 Guide | As a visitor, I want guidance on Ideation | Can read stage guide; checklist visible (reference-only, not saved); 2 templates downloadable | — |
| FR-2.2 | P0 | Stage 2 Guide | As a visitor, I want guidance on Research | Can read stage guide; checklist visible (reference-only, not saved); 2 templates downloadable | — |
| FR-2.3 | P0 | Stage 3 Guide | As a visitor, I want guidance on Presentation | Can read stage guide; checklist visible (reference-only, not saved); 2 templates downloadable | — |
| FR-2.4 | P1 | Stage Checklists | As a student, I want a reference checklist for each stage | Checklists printable and copyable; no data saved; no progress tracking | — |
| FR-3.1 | P0 | Display Articles | As a visitor, I want to read educational articles | 15 articles readable, text + images; clean layout; related articles linked at bottom | — |
| FR-3.2 | P1 | Article Metadata | As a visitor, I want to know article details | Publication date, author, read time, word count shown on each article | — |
| FR-4.1 | P0 | Download Templates | As a visitor, I want reusable project templates | 5 templates (PDF/DOCX) available for free download; <5MB each; no signup required | — |
| FR-4.2 | P1 | Template Organization | As a visitor, I want to find templates by stage | Templates organized by stage (Ideation/Research/Presentation); descriptions provided | — |
| FR-5.1 | P0 | Privacy Policy | As a visitor, I want to know how my data is used | Privacy policy accessible from footer; states no data collection; plain language | — |
| FR-5.2 | P0 | Terms of Service | As a visitor, I want to know site rules | ToS accessible from footer; covers educational use only, no personal info sharing | — |
| FR-5.3 | P1 | Safety Disclaimer | As a student, I want to know not to share personal information | Disclaimer visible on relevant pages: "Do not share personal information online" | — |

---

## 9. Dependencies & Risks

### External Dependencies
- **Hosting:** Vercel free tier (100GB bandwidth/month limit)
- **Database:** Supabase free tier (500MB storage; ~50MB used for 15 articles + 5 templates)
- **CDN:** Vercel Edge Network (auto-included)
- **No email service needed** (no user accounts = no verification/reset emails)

### Critical Risks
| Risk | Impact | Mitigation |
|------|--------|-----------|
| Bandwidth overrun (100GB free limit) | Site goes offline; users cannot access | Monitor bandwidth weekly; prepare paid tier upgrade path if >50GB/month |
| Vercel deployment failure | MVP cannot launch on time | Test CI/CD pipeline in week 1; have manual deployment plan |
| Article content not engaging | Students leave without learning | User-test with 3–5 real students in week 6; iterate based on feedback |
| Database corruption | Content lost, site down | Daily automated backups; test restore procedure |

---

## 10. Success Criteria (MVP Launch)

### Shipping Metrics (Go/No-Go)
- [ ] All P0 requirements implemented and tested
- [ ] Privacy policy and ToS published
- [ ] 15 articles published and readable
- [ ] 5 templates available for download
- [ ] 3 stage guides complete (Ideation, Research, Presentation)
- [ ] Mobile-responsive design verified (375px+)
- [ ] WCAG A compliance verified (accessibility audit)
- [ ] Security review passed (no XSS vulnerabilities)
- [ ] Page load time verified: <2s desktop, <3s mobile
- [ ] Uptime SLA: 99% during first week

### Adoption Metrics (Month 1–2)
- **Page views:** 1000+ unique visitors per week
- **Article engagement:** 500+ article page views per week
- **Template downloads:** 100+ downloads per week
- **Content satisfaction:** <10% "content unclear" feedback (optional feedback form)

### Quality Gates
- Zero critical bugs (crashes, data loss) in week 1
- Page load time: <3s for 95% of page loads (tracked via Vercel Analytics)
- Mobile responsiveness verified on iPhone, Android
- No 404 errors on navigation

---

## 11. Out of Scope for MVP (Explicitly Deferred to Phase 2+)

### User Accounts & Tracking
- ❌ User authentication (email/password, OAuth)
- ❌ User accounts or profiles
- ❌ Project creation or saving
- ❌ Progress tracking or milestones
- ❌ Age verification or parental consent enforcement
- ❌ User data collection beyond basic page views

### Community & Feedback
- ❌ User-to-user messaging, comments, or forums
- ❌ Peer review, feedback requests, mentorship requests
- ❌ Team/group collaboration and shared workspaces
- ❌ Project gallery, public profiles, or user discovery
- ❌ Discussion boards, study groups

### Content & Tools
- ❌ AI-powered hypothesis generator, timeline calculator, or design wizard
- ❌ Video tutorials or embedded media
- ❌ Interactive calculators or data analyzers
- ❌ Rich text editor or document editor
- ❌ Badges, certificates, achievement systems, or gamification

### Admin & Analytics
- ❌ Admin dashboard or content management UI
- ❌ User analytics or event tracking
- ❌ Advanced telemetry or business intelligence
- ❌ Email reminders, notifications, or digests
- ❌ Content moderation tools

### Technical
- ❌ Real-time collaboration (WebSockets, operational transformation)
- ❌ Mobile native app
- ❌ Multilingual support
- ❌ Custom domain setup or white-labeling
- ❌ Third-party integrations (Zapier, IFTTT, API webhooks)

---

## 12. Document Version & Sign-Off

| Role | Name | Date | Notes |
|------|------|------|-------|
| Project Owner | Nathan | 2026-08-15 | FRD approved for MVP sprint |
| Product Lead | Claude | 2026-08-15 | Scope validated; 6-week delivery estimate |

**Version History**
| Version | Date | Author | Change |
|---------|------|--------|--------|
| 1.0 | 2026-08-15 | Claude | Initial full-scope FRD |
| 2.0 | 2026-08-15 | Claude | MVP-focused refactor: 3 stages, no collaboration, trust & safety added, acceptance criteria table, non-goals explicit |

---

**End of Document**
