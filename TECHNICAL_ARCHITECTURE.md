# Technical Architecture Document
## Science Fair Guidebook MVP

**Version:** 1.0  
**Date:** August 2026  
**Scope:** MVP deployment on Vercel (free tier)

---

## 1. Overview

This document defines the technology stack, infrastructure, data model, and deployment strategy for the Science Fair Guidebook MVP. All choices prioritize free/low-cost hosting (Vercel, Supabase free tier) and MVP-scope simplicity.

---

## 2. Technology Stack

### Frontend
| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **Framework** | Next.js 14 + React 18 | Fast builds, SSR/SSG, Vercel native, built-in optimization |
| **Styling** | Tailwind CSS | Utility-first, minimal bundle, great for rapid iteration |
| **UI Components** | Shadcn/ui (+ Radix primitives) | Accessible, unstyled, copy-paste friendly, lightweight |
| **State** | React Context + localStorage | No extra dependencies; sufficient for MVP scope |
| **Forms** | React Hook Form | Lightweight, performant, good DX |
| **Markdown** | `react-markdown` + `remark` | Simple, no heavy WYSIWYG editor needed |
| **HTTP Client** | Fetch API (built-in) | No external lib needed; sufficient for MVP |
| **Auth UI** | Custom forms | No third-party auth UI; simple email/password form |

### Backend
| Layer | Technology | Rationale |
|-------|-----------|-----------|
| **API** | Next.js API Routes | Vercel-native, serverless, no separate backend deployment |
| **Database** | Supabase (PostgreSQL) | Free tier: 500MB storage, 50k rows, great for MVP |
| **Auth** | NextAuth.js v5 (App Router) | Email/password flows, session management, Supabase adapter |
| **File Storage** | Supabase Storage (S3-compatible) | Free tier: 1GB, sufficient for templates (5 × <5MB files) |
| **Email** | Resend (free tier) | 100 emails/day free, good for MVP verification/reset |

### Infrastructure
| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Hosting** | Vercel (free tier) | Native Next.js support, auto-scaling, 100GB/month bandwidth |
| **CDN** | Vercel Edge Network | Included, caches static assets (articles, templates) |
| **Database Hosting** | Supabase Postgres Free | 500MB storage, 50k max rows, sufficient for pilot |
| **Monitoring** | Vercel Analytics + Sentry (free tier) | Performance metrics + error tracking |
| **Version Control** | GitHub | Git workflows, CI/CD trigger for Vercel deploys |

### Development Tools
| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 18 LTS or 20 | Engine |
| **Package Manager** | npm or pnpm | Dependency management |
| **Testing** | Vitest + React Testing Library | Unit/integration tests (optional for MVP; required by month 2) |
| **E2E Tests** | Playwright (free) | Critical user flows only (optional for MVP) |
| **Linting** | ESLint + Prettier | Code quality, formatting |
| **TypeScript** | 5.x | Type safety |

---

## 3. Architecture Diagram (Text)

```
┌─────────────────────────────────────────────────┐
│            Browser (User Device)                 │
│  (Mobile/Tablet/Desktop - Responsive)           │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼ HTTPS/TLS
        ┌──────────────────────┐
        │   Vercel Edge CDN    │
        │  (Static Assets)     │
        │ (Articles, Templates)│
        └──────────────────────┘
                   │
                   ▼
┌──────────────────────────────────────────────────┐
│        Next.js App Router (Vercel)               │
│  ┌────────────────────────────────────┐          │
│  │ Pages / Layouts (SSG/SSR)          │          │
│  │ - [slug]/page.tsx (articles)       │          │
│  │ - dashboard/page.tsx               │          │
│  │ - project/[id]/page.tsx            │          │
│  └────────────────────────────────────┘          │
│  ┌────────────────────────────────────┐          │
│  │ API Routes (/app/api)              │          │
│  │ - /auth/signin                     │          │
│  │ - /auth/signup                     │          │
│  │ - /projects (CRUD)                 │          │
│  │ - /articles (GET)                  │          │
│  │ - /templates (GET)                 │          │
│  └────────────────────────────────────┘          │
│  ┌────────────────────────────────────┐          │
│  │ Middleware                         │          │
│  │ - Auth token validation            │          │
│  │ - Rate limiting (50 req/min)       │          │
│  │ - CSRF protection                  │          │
│  └────────────────────────────────────┘          │
└──────────────────────────────────────────────────┘
          │              │              │
          ▼              ▼              ▼
   ┌────────────┐  ┌───────────┐  ┌──────────────┐
   │ Supabase   │  │ Resend    │  │ Sentry       │
   │ PostgreSQL │  │ Email API │  │ Error Track  │
   │ Auth/DB    │  │ (SMTP)    │  │              │
   └────────────┘  └───────────┘  └──────────────┘
         │
         ├─ Users table
         ├─ Projects table
         ├─ Articles (read-only, seeded)
         └─ Storage: Templates (PDF/DOCX)
```

---

## 4. Data Model (Database Schema)

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL, -- bcrypt
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  school VARCHAR(255),
  grade_level VARCHAR(50), -- "6th", "10th", etc.
  interests TEXT, -- comma-separated topics
  under_13 BOOLEAN DEFAULT NULL, -- age disclosure
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  deleted_at TIMESTAMP, -- soft delete
  email_verified BOOLEAN DEFAULT FALSE,
  email_verified_at TIMESTAMP
);

-- Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_email_verified ON users(email_verified);
```

### Projects Table
```sql
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  research_question TEXT NOT NULL,
  category VARCHAR(100), -- "Biology", "Chemistry", etc.
  difficulty_level VARCHAR(50), -- "Beginner", "Intermediate", "Advanced"
  target_completion_date DATE,
  current_stage VARCHAR(50) DEFAULT 'ideation', -- "ideation", "research", "presentation"
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  archived_at TIMESTAMP,
  completed_at TIMESTAMP
);

-- Indexes
CREATE INDEX idx_projects_user_id ON projects(user_id);
CREATE INDEX idx_projects_current_stage ON projects(current_stage);
CREATE INDEX idx_projects_created_at ON projects(created_at);
```

### Project Milestones Table
```sql
CREATE TABLE milestones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  project_id UUID NOT NULL REFERENCES projects(id),
  stage VARCHAR(50) NOT NULL, -- "ideation", "research", "presentation"
  title VARCHAR(255) NOT NULL,
  description TEXT,
  is_completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_milestones_project_id ON milestones(project_id);
CREATE INDEX idx_milestones_stage ON milestones(stage);
```

### Articles Table (Read-Only, Seeded at Deploy)
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL, -- URL-friendly identifier
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL, -- markdown
  category VARCHAR(100), -- "Ideation", "Research", "Presentation"
  discipline VARCHAR(100), -- "Biology", "Chemistry", etc.
  author VARCHAR(100),
  read_time_minutes INT, -- estimated reading time
  word_count INT,
  published_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_published_at ON articles(published_at DESC);
```

### Templates Table (Read-Only, Links to Storage)
```sql
CREATE TABLE templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT,
  stage VARCHAR(50), -- "ideation", "research", "presentation"
  file_name VARCHAR(255) NOT NULL, -- e.g., "research-question.pdf"
  file_size_kb INT,
  file_type VARCHAR(50), -- "pdf", "docx"
  storage_path VARCHAR(500), -- Supabase Storage path
  related_article_id UUID REFERENCES articles(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_templates_stage ON templates(stage);
CREATE INDEX idx_templates_file_name ON templates(file_name);
```

### Sessions Table (NextAuth)
```sql
-- Managed by NextAuth; no manual schema needed
-- Stores session data for logged-in users
```

---

## 5. API Endpoints (MVP Only)

### Authentication
```
POST /api/auth/signup
  Body: { email, password, first_name, last_name, school, grade, under_13, accept_tos }
  Response: { userId, email, redirect_url: "/dashboard" }
  Errors: { error: "Email already exists" | "Password too weak" | "Email invalid" }

POST /api/auth/signin
  Body: { email, password }
  Response: { userId, email, redirect_url: "/dashboard" }
  Errors: { error: "Invalid credentials" }

POST /api/auth/signout
  Response: { success: true }

POST /api/auth/verify-email
  Query: ?token=xxx
  Response: { success: true, redirect_url: "/dashboard" }

POST /api/auth/forgot-password
  Body: { email }
  Response: { success: true, message: "Reset link sent" }

POST /api/auth/reset-password
  Query: ?token=xxx
  Body: { password }
  Response: { success: true, redirect_url: "/signin" }
```

### Projects (Authenticated)
```
POST /api/projects
  Body: { title, research_question, category, difficulty, target_completion_date }
  Response: { projectId, title, stage, created_at }

GET /api/projects
  Response: [{ id, title, stage, completion_%, deadline, updated_at }, ...]

GET /api/projects/:id
  Response: { id, title, research_question, category, stage, milestones, templates }

PUT /api/projects/:id
  Body: { title, research_question, target_completion_date, current_stage }
  Response: { id, updated_at }

DELETE /api/projects/:id
  Response: { success: true }

POST /api/projects/:id/milestones/:milestone_id/complete
  Response: { milestone_id, is_completed, completed_at }

GET /api/projects/:id/export
  Response: PDF blob (binary download)
```

### Articles (Public)
```
GET /api/articles
  Query: ?category=xxx&discipline=yyy&search=zzz
  Response: [{ id, slug, title, category, discipline, read_time, published_at }, ...]

GET /api/articles/:slug
  Response: { id, slug, title, content, author, read_time, word_count, related_articles }
```

### Templates (Public)
```
GET /api/templates
  Query: ?stage=xxx
  Response: [{ id, title, stage, file_type, download_url }, ...]

GET /api/templates/:id/download
  Response: Binary file (PDF/DOCX)
```

### User Profile (Authenticated)
```
GET /api/profile
  Response: { email, first_name, last_name, school, grade, interests, under_13, created_at }

PUT /api/profile
  Body: { first_name, last_name, school, grade, interests }
  Response: { email, first_name, last_name, updated_at }

DELETE /api/profile
  Response: { success: true, message: "Account marked for deletion" }
```

### Rate Limiting
All API endpoints rate-limited to **50 requests/min per IP** (enforced via Next.js middleware).

---

## 6. Frontend File Structure

```
science-fair-guidebook/
├── app/
│   ├── (auth)/
│   │   ├── signin/page.tsx
│   │   ├── signup/page.tsx
│   │   ├── forgot-password/page.tsx
│   │   └── reset-password/page.tsx
│   ├── (protected)/
│   │   ├── dashboard/page.tsx
│   │   ├── project/[id]/page.tsx
│   │   ├── profile/page.tsx
│   │   └── settings/page.tsx
│   ├── (public)/
│   │   ├── page.tsx (homepage)
│   │   ├── topics/page.tsx (browse ideas)
│   │   ├── articles/page.tsx (article list)
│   │   ├── articles/[slug]/page.tsx (article detail)
│   │   ├── templates/page.tsx (template list)
│   │   ├── about/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── terms/page.tsx
│   ├── api/
│   │   ├── auth/
│   │   │   ├── signin/route.ts
│   │   │   ├── signup/route.ts
│   │   │   ├── signout/route.ts
│   │   │   ├── verify-email/route.ts
│   │   │   ├── forgot-password/route.ts
│   │   │   └── reset-password/route.ts
│   │   ├── projects/route.ts
│   │   ├── projects/[id]/route.ts
│   │   ├── projects/[id]/export/route.ts
│   │   ├── articles/route.ts
│   │   ├── articles/[slug]/route.ts
│   │   ├── templates/route.ts
│   │   ├── profile/route.ts
│   │   └── health/route.ts (uptime check)
│   ├── layout.tsx (root layout)
│   └── middleware.ts (auth, rate limit)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── forms/
│   │   ├── SignupForm.tsx
│   │   ├── SigninForm.tsx
│   │   └── ProjectForm.tsx
│   ├── project/
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectDashboard.tsx
│   │   ├── StageGuide.tsx
│   │   └── MilestoneChecklist.tsx
│   ├── article/
│   │   ├── ArticleList.tsx
│   │   └── ArticleDetail.tsx
│   └── ui/ (shadcn components)
├── lib/
│   ├── auth.ts (NextAuth config)
│   ├── db.ts (Supabase client)
│   ├── api.ts (API call helpers)
│   ├── utils.ts (formatters, validators)
│   └── constants.ts (config, stage definitions)
├── public/
│   ├── articles/ (markdown files)
│   ├── templates/ (PDF/DOCX files)
│   └── images/
├── styles/
│   └── globals.css (Tailwind directives)
├── .env.local (secrets, not committed)
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 7. Deployment & CI/CD

### Vercel Deployment
- **Git trigger:** Merges to `main` auto-deploy to production
- **Branch preview:** Merges to `develop` create preview URLs
- **Environment variables:** Set in Vercel dashboard (not committed)
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_KEY` (private)
  - `NEXTAUTH_SECRET`
  - `NEXTAUTH_URL`
  - `RESEND_API_KEY`
  - `SENTRY_DSN`

### Database Migrations
- Use Supabase CLI for schema changes
- Migrations stored in `/migrations` folder
- Applied via `supabase db push` before deployment

### Content Seeding
- Articles and templates seeded in DB at first deploy
- SQL seed script in `/scripts/seed-content.sql`
- Run once, then manual CMS updates (Phase 2)

### Monitoring & Alerts
- **Vercel Analytics:** Track page load times, core web vitals
- **Sentry:** Capture errors, set alert threshold (>5 errors/hour)
- **Supabase dashboard:** Monitor database usage (storage, rows)
- **Manual checks:** Weekly review of uptime, bandwidth usage

---

## 8. Security Checklist

- [x] HTTPS/TLS for all pages (Vercel auto)
- [x] Password hashing (bcrypt, 12+ rounds via NextAuth)
- [x] CSRF tokens on forms (NextAuth middleware)
- [x] XSS prevention (React auto-escapes, sanitize user input on backend)
- [x] SQL injection prevention (parameterized queries via Supabase client)
- [x] Rate limiting (50 req/min per IP via middleware)
- [x] Session expiry (30 days of inactivity)
- [x] Secure headers (X-Frame-Options, X-Content-Type-Options, CSP)
- [x] No sensitive data in logs (mask email, password, tokens)
- [x] Email verification for sign-up
- [x] Password reset token expiry (24 hours)
- [ ] Security audit by third party (Phase 2, before under-13 marketing)
- [ ] COPPA parental consent form (Phase 2)

---

## 9. Free Tier Limits & Escalation Path

### Vercel Free Tier
- **Bandwidth:** 100GB/month
- **Functions:** 12 concurrent serverless functions
- **Build time:** 45 min/month
- ****Escalation:** Monitor weekly; upgrade to Pro ($20/mo) if approaching limits

### Supabase Free Tier
- **Storage:** 500MB
- **Rows:** 50k (target 40k for safety margin)
- **Egress:** 2GB/month
- **Escalation:** Upgrade to Pro ($25/mo) if approaching 80% capacity

### Resend Free Tier
- **Emails:** 100/day
- **Escalation:** Upgrade if sign-ups exceed 3+/day for sustained period

### Monthly Cost Projection
| Tier | Cost | When |
|------|------|------|
| All free | $0 | MVP (month 1–2) |
| Vercel Pro + Supabase Pro | $45/mo | If >500 daily active users |
| Full production | $100+/mo | If >5000 daily active users (Phase 4+) |

---

## 10. Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| Largest Contentful Paint (LCP) | <2.5s | Vercel Analytics, Lighthouse |
| First Input Delay (FID) | <100ms | Vercel Analytics |
| Cumulative Layout Shift (CLS) | <0.1 | Vercel Analytics |
| Time to First Byte (TTFB) | <600ms | Vercel Analytics |
| Page load (full) | <3s mobile, <2s desktop | Monitoring |
| API response | <500ms (p95) | Sentry |

### Optimization Strategy
- Static generation (SSG) for articles, homepage
- Incremental Static Regeneration (ISR) for article updates
- Image optimization (Next.js `<Image>`, auto-resize)
- Code splitting (route-based, component lazy-load)
- Minification via Next.js build
- CDN caching (Vercel Edge for static assets, 1-year TTL for versioned files)

---

## 11. Testing Strategy

### Unit Tests (Vitest)
- `lib/utils.ts` (validators, formatters)
- `lib/auth.ts` (sign-up, password validation)
- `lib/db.ts` (query helpers)

### Integration Tests (React Testing Library)
- Forms (signup, signin, project creation)
- API mocks (sign-up with email verification)
- Navigation between pages

### E2E Tests (Playwright, Optional for MVP)
- Sign-up flow (email verification)
- Create project, complete milestone, export PDF
- Browse articles, download template

### Test Coverage Target
- MVP: 60% coverage (focus on auth, project CRUD)
- Phase 2+: 80%+ coverage

---

## 12. Versioning & Rollback

- **API versioning:** Single `/api` route set; no versioning in MVP
- **Database migrations:** Versioned in `/migrations`; rollback via Supabase CLI
- **Deployment rollback:** Vercel auto-saves last 3 deployments; manual rollback via dashboard

---

## Document Sign-Off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Technical Lead | Claude | 2026-08-15 | ✅ |
| Architect Review | — | — | Pending |

**Version History**
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-08-15 | Initial MVP architecture |

---

**End of Document**
