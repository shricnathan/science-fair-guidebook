# Science Fair Guidebook — Requirements Documentation

**Version:** 2.0 (Revised & Focused)  
**Date:** August 2026  
**Status:** Ready for Development

---

## Overview

This folder contains the complete requirements, architecture, and roadmap for the Science Fair Guidebook MVP and future phases. The documentation has been restructured to address scope creep, testability, and safety concerns.

---

## Document Guide

### 1. **FRD_MVP_Focused.md** ← START HERE
**Functional Requirements Document for MVP Launch (Months 1–2)**

**What it contains:**
- MVP scope definition (what's IN, what's OUT)
- 6 core user journeys
- 20+ detailed feature requirements with acceptance criteria (table format)
- Trust & Safety section for minors (COPPA, parental consent, moderation)
- Non-goals (explicit scope constraints)
- Success criteria (shipping gates)

**Why separate from roadmap:**
- Acts as the source of truth for MVP development
- Acceptance criteria are testable (not vague feature names)
- Clear priority levels (P0, P1, P2)
- Prevents feature creep by explicitly deferring Phase 2+ work

**Read this if:** You're building the MVP or need to understand what ships in weeks 1–8.

---

### 2. **TECHNICAL_ARCHITECTURE.md**
**Infrastructure, Data Model, and API Specification**

**What it contains:**
- Technology stack (Next.js, Supabase, Vercel, Resend)
- Database schema (users, projects, articles, templates)
- REST API endpoints (full spec)
- Frontend file structure
- Security checklist
- Performance targets + optimization strategy
- Free tier limits & escalation path
- Deployment & CI/CD setup

**Why separate from FRD:**
- Technical decisions don't change with product scope
- Data model is independent of roadmap
- Shared reference for frontend + backend developers

**Read this if:** You're building the backend, setting up infrastructure, or need to understand data flow.

---

### 3. **ROADMAP_AND_RELEASE_PLAN.md**
**8-Month Release Timeline and Phase Breakdown**

**What it contains:**
- Phase 1 (MVP): Week-by-week sprint breakdown
- Phases 2–5: Feature roadmap with success metrics
- Launch checklist + go-to-market strategy
- Risk register with mitigations
- Budget & resource plan ($10–15/mo for MVP, scaling to $15K+/mo by Phase 4)
- Definition of Done criteria

**Why separate from FRD:**
- Roadmap changes over time; FRD should not
- Phase 2–5 are optional; MVP can launch without them
- Roadmap prioritization is a product decision, not a requirement

**Read this if:** You need to understand project timeline, phases, or budget.

---

### 4. **Original FRD (ScienceFairGuidebook_FRD.md)**
**Full Feature Scope (Pre-Revision)**

**Why keep it?**
- Historical reference (shows original ambition)
- Phase 2–5 feature definitions come from here
- Useful for long-term planning

**Read this if:** You need to understand what goes into Phase 2+ phases.

---

## Key Changes from v1.0 → v2.0

### ✅ Scope Tightened
| Aspect | v1.0 (Full) | v2.0 (MVP) |
|--------|-----------|-----------|
| Project types | Solo + group | Solo only |
| Stages | 5 full stages | 3 core stages |
| Authentication | Email + OAuth + 2FA | Email + basic password reset |
| Feedback | Mentorship, peer review, forums | None (read-only) |
| Templates | 20+ editable | 5 downloadable PDFs |
| Knowledge base | 50+ articles, videos, case studies | 15 articles only |
| AI tools | Hypothesis generator, data analyzer | None |
| Gamification | Badges, certificates, portfolio | None |
| Admin features | Full dashboard, analytics | None |

**Result:** 6-week MVP instead of 4–6 month mega-project

### ✅ Testability Improved
- Added **Requirements Table** (20+ rows) with:
  - Unique IDs (FR-1.1, FR-2.1, etc.)
  - Priority levels (P0, P1, P2)
  - Clear user story ("As a [user], I want to [action]")
  - **Acceptance criteria** (testable, measurable)
  - Dependencies (which features must ship first)

**Before:** "Project Dashboard" (vague)  
**After:** "Dashboard lists projects with status, stage, deadline, completion %; can click to view" (testable)

### ✅ Document Structure Separated
| Document | Purpose | Changes |
|----------|---------|---------|
| FRD | MVP requirements only | Removed roadmap, tech stack, assumptions |
| Technical Architecture | Infrastructure & data model | New document; separated from FRD |
| Roadmap | 8-month timeline | New document; phases 2–5 moved here |

**Result:** Easier to maintain; each document has a single purpose

### ✅ Trust & Safety Expanded
Added comprehensive **Section 6: Trust & Safety** covering:
- Age verification & COPPA parental consent
- No direct messaging or public contact
- No user-generated comments or forums (MVP)
- Data retention & privacy policy
- Prohibited content (PII, hateful, illegal)
- Reporting mechanism (Phase 2)
- Transparency (privacy policy, ToS in plain language)

**Why critical:** Minors (ages 11–18) are primary users; safety is non-negotiable.

### ✅ Non-Goals Explicit
Added **Section 11: Out of Scope** listing 30+ features explicitly deferred:
- User messaging, comments, forums
- Mentorship, team collaboration, peer review
- AI tools, video, badges, admin dashboards
- OAuth, 2FA, mobile app, multilingual

**Why:** Prevents accidental scope creep; team knows what NOT to build.

### ✅ Metrics Normalized
Defined key terms:
- **Sign-up:** Email registered + verified
- **Active user:** Logged in within 30 days
- **Project started:** Title, RQ, stage selected
- **Project completed:** All 3 stages checked off, exported

**Result:** Success metrics are consistent and measurable

---

## How to Use This Documentation

### For Developers
1. **Read:** FRD_MVP_Focused.md (sections 1–5, requirements table)
2. **Reference:** TECHNICAL_ARCHITECTURE.md (data model, APIs, file structure)
3. **Track:** ROADMAP_AND_RELEASE_PLAN.md (sprint breakdown, definition of done)

### For Product Managers
1. **Read:** FRD_MVP_Focused.md (sections 1–3, non-goals)
2. **Reference:** ROADMAP_AND_RELEASE_PLAN.md (phases 2–5, launch plan)
3. **Monitor:** Risk register in ROADMAP (critical issues)

### For Designers
1. **Read:** FRD_MVP_Focused.md (section 4, user journeys)
2. **Reference:** TECHNICAL_ARCHITECTURE.md (file structure, component list)
3. **Use:** Shadcn/ui + Tailwind CSS (pre-defined design system)

### For Safety/Legal
1. **Read:** FRD_MVP_Focused.md (section 6, Trust & Safety)
2. **Review:** Privacy policy + ToS (to be drafted post-approval)
3. **Prepare:** COPPA parental consent form (Phase 2)

---

## Validation Checklist

**Before starting development, confirm:**

- [ ] FRD MVP scope is agreed (3 stages, no collaboration, no AI, no admin)
- [ ] Technical stack is approved (Next.js, Supabase, Vercel, Resend)
- [ ] Trust & Safety section is reviewed by legal team
- [ ] Privacy policy template drafted
- [ ] Terms of Service template drafted
- [ ] Database schema reviewed by peer
- [ ] Sprint 1 (weeks 1–2) backlog is broken into tasks
- [ ] Vercel + Supabase projects created + configured
- [ ] GitHub repo initialized with CI/CD setup

---

## Feedback Incorporated

This revision addresses the following findings from the comprehensive review:

| Finding | Solution |
|---------|----------|
| Scope creep | Strict MVP scope; 30+ features in "Out of Scope" section |
| Lack of testability | Requirements table with acceptance criteria + test conditions |
| Mixed document types | Split FRD + Technical Architecture + Roadmap into 3 separate files |
| Weak safety provisions | Dedicated Trust & Safety section (6.1–6.7) covering COPPA, moderation, reporting |
| Fuzzy metrics | Defined "sign-up," "active user," "project completed" consistently |
| Poor formatting | Proper markdown headings, tables, lists (ready for Word if needed) |

---

## Next Steps

### Immediate (This Week)
1. [ ] Review & approve FRD_MVP_Focused.md (acceptance criteria)
2. [ ] Review & approve TECHNICAL_ARCHITECTURE.md (tech stack)
3. [ ] Review & approve ROADMAP_AND_RELEASE_PLAN.md (phases 1–2)
4. [ ] Schedule legal review (privacy policy, COPPA compliance)

### Week 1 (Project Setup)
1. [ ] Create Vercel project, configure GitHub CI/CD
2. [ ] Create Supabase project, initialize database schema
3. [ ] Set up Resend email service
4. [ ] Set up Sentry error tracking
5. [ ] Break down Sprint 1 into GitHub issues

### Weeks 2–8 (Development)
- Follow sprint breakdown in ROADMAP_AND_RELEASE_PLAN.md
- Track progress against Definition of Done checklist
- Weekly check-in: progress, risks, blockers

### Launch Week (Week 8)
- Execute launch checklist (ROADMAP.md, section 10)
- Go/no-go decision based on shipping criteria
- Post-launch: monitor uptime, sign-ups, errors

---

## Document Maintenance

### Update Frequency
- **FRD_MVP_Focused.md:** No changes once development starts (frozen until MVP ships)
- **TECHNICAL_ARCHITECTURE.md:** Update when architecture decisions change (rare)
- **ROADMAP_AND_RELEASE_PLAN.md:** Update at end of each phase with actual results vs. targets

### Version Control
- All documents in `/Requirements` folder
- Tracked in Git (not just comments)
- Reviewed before merge to `main`

---

## Questions & Clarifications

**Q: Can we add team collaboration to MVP?**  
A: No. It's in Phase 3 (months 5–6). Adding to MVP delays launch by 4 weeks minimum.

**Q: Do we need an admin dashboard for launch?**  
A: No. Content is seeded at deploy; no manual CMS needed for MVP. Admin dashboard is Phase 4.

**Q: Can we use OAuth for sign-up instead of email/password?**  
A: No, not in MVP. Adds complexity + third-party dependency. Phase 2 adds OAuth.

**Q: What if we run out of database storage?**  
A: Supabase free tier = 500MB. MVP uses ~50MB (15 articles, 5 templates, ~100 users). If approaching 80%, upgrade to Pro ($25/mo).

**Q: How do we handle under-13 users without parental consent in MVP?**  
A: MVP asks "Are you under 13?" but doesn't enforce consent. Phase 2 adds formal COPPA parental consent form. Until then, we assume parental supervision.

**Q: Can teachers create accounts and upload lesson plans?**  
A: Not in MVP. Teachers can use the platform as students. Educator tools are Phase 2+.

---

## Contact & Support

- **Questions about requirements:** Refer to FRD_MVP_Focused.md + requirements table
- **Questions about architecture:** Refer to TECHNICAL_ARCHITECTURE.md
- **Questions about timeline/phases:** Refer to ROADMAP_AND_RELEASE_PLAN.md
- **Questions about trust & safety:** Refer to FRD_MVP_Focused.md (section 6)

---

## Document Metadata

| Attribute | Value |
|-----------|-------|
| **Author** | Claude Code (with Nathan's feedback) |
| **Reviewed By** | TBD |
| **Approved By** | TBD |
| **Last Updated** | 2026-08-15 |
| **Next Review** | End of Phase 1 (October 2026) |
| **Status** | Ready for Development |

---

**End of README**
