# Technical Requirements Document (TRD): `thatguycodes`

**Project Name:** `thatguycodes`  
**Document Type:** System Architecture, Production-Safe GenUI & $0/mo Self-Hosted Automation Specification  
**Status:** Approved Requirements v2.0 (Zero-Monthly-Cost, Secure & Non-Experimental)  
**Last Updated:** October 2026  

---

## 1. High-Level Architecture & Hosting Options Comparison

`thatguycodes` is architected with **maximum portability in mind**. You can run it on **Vercel**, deploy it across a **$0/mo Cloudflare + Local Docker hybrid topology**, run it **100% self-hosted on your Mac laptop**, or host it on an **Always-Free cloud server**. 

All core application code (Next.js 15 App Router, TypeScript, Tailwind, Vercel AI SDK, and MDX engine) is completely decoupled from the underlying host.

### 1.1 Comprehensive Hosting Decision Matrix

| Dimension | Path A: Vercel (Hobby / Pro) | Path B: Hybrid $0/mo (Cloudflare Edge + Local Docker) | Path C: 100% Local Mac Docker Cluster (Cloudflare Tunnel) | Path D: Oracle Cloud Always-Free ARM / Hetzner ($0–$5/mo) |
| :--- | :--- | :--- | :--- | :--- |
| **Public Host** | **Vercel** (`thatguycodes.vercel.app` or custom domain) | **Cloudflare Pages / Workers** (Free Tier) | Local Mac Docker container (`nextjs` image) via `cloudflared` | Oracle Cloud Ampere A1 (4 OCPU, 24 GB RAM) or Hetzner VPS |
| **Best Used For** | **Fastest, zero-config DX**, native Next.js features, instant preview URLs, and mature edge analytics. | **Maximum 24/7 global uptime for $0.00/mo** with commercial e-commerce permitted. | **Total sovereignty**, complete privacy, and zero reliance on cloud hosts. | **Always-on 24/7 background automation** without leaving your laptop on. |
| **Commercial Terms** | • **Hobby ($0):** Personal, non-commercial only.<br>• **Pro ($20/mo):** Full commercial e-commerce, digital products, and sponsorships allowed. | ✅ **100% Permitted for commercial use & sales** on the free tier. | ✅ **100% Permitted** (You own the hardware). | ✅ **100% Permitted**. |
| **Automation Engine (`n8n`, `Postiz`)** | Managed via Vercel Serverless Functions + Inngest/Cron, OR paired with local `n8n` via webhook. | **Local Mac Docker** (`n8n` + `Postiz` + `Ollama`) connected via Cloudflare Tunnel. | **Local Mac Docker** cluster running alongside the web app. | Docker Compose on the VPS running 24/7. |
| **Uptime When Laptop Sleeps** | ✅ **100% Uptime** (Managed by Vercel global edge). | ✅ **100% Uptime** (Managed by Cloudflare global edge). | ⚠️ Dynamic APIs drop (edge-cached static blog posts remain reachable). | ✅ **100% Uptime** (Managed in cloud datacenter). |
| **Monthly Cost** | **$0/mo (Hobby)** or **$20/mo (Pro)** | **$0.00 / month** | **$0.00 / month** | **$0.00 / month** (Oracle) or ~$4.50/mo (Hetzner) |

---

### 1.2 Dedicated Deep Dive: Each Hosting Architecture

#### Path A: The Vercel Deployment Architecture (Mature & Production-Standard)
* **How It Operates:**
  * Push code to GitHub $\rightarrow$ Vercel automatically builds and deploys Next.js to its global Edge & Serverless network.
  * Connects to **Supabase** or **Neon PostgreSQL** via connection pooling (`DATABASE_URL` with transaction pooler on port 6543).
  * Uses **Vercel AI SDK Core (`streamText`)** running in Edge / Node.js Serverless runtime with streaming responses directly to the visitor's browser.
  * Uses **`@vercel/og`** natively for dynamic social image card generation.
* **Why Keep Vercel as a Strong Option:**
  * **Zero DevOps overhead:** No Docker configs, SSL management, or tunnel monitoring to maintain.
  * **Fastest CI/CD:** Instant preview deployments for every Git branch and PR.
  * **Smooth Upgrade Path:** You can start on Vercel Hobby during development/testing for $0, and upgrade to Vercel Pro ($20/mo) once your digital products and audits generate revenue.
* **Connecting Vercel to `n8n` on Your Laptop:**
  * When a new article is published on Vercel, a Next.js API route (`/api/webhooks/post-published`) sends an outbound webhook to your local `n8n` instance via its Cloudflare Tunnel URL (`https://n8n.thatguycodes.com/webhook/post-published`). Your Mac receives the event, triggers the multi-agent repurposing, and requests approval on Telegram!

#### Path B: The "Hybrid $0/mo" Architecture (Cloudflare Edge + Local Mac Docker)
* **How It Operates:**
  * **Public Web App & Blog:** Deployed on **Cloudflare Pages** using `@cloudflare/next-on-pages` or Next.js static export (`output: 'export'`) with edge API routes. Runs 24/7 globally at $0/mo.
  * **Background Automation & Heavy AI:** Runs locally on your **MacBook in Docker** (`n8n` + `Postiz` + native macOS `Ollama`).
  * **Why It Excels:** Solves the "what if my laptop is closed?" dilemma without paying $20/mo. Visitors can browse, read cached articles, interact with the Gemini-powered GenUI concierge, and buy templates 24/7. When you open your laptop to work, `n8n` processes any pending syndication or community tasks.

#### Path C: The 100% Local Mac Laptop Docker Cluster (Pure Sovereign)
* **How It Operates:**
  * The entire application—Next.js web app, Postgres, Redis, `n8n`, `Postiz`, and `cloudflared`—runs in Docker containers on your MacBook.
  * Cloudflare Tunnel securely exposes `thatguycodes.com` and `n8n.thatguycodes.com` without opening router ports.
  * **Cloudflare Tiered Cache & "Always Online"** caches static assets and blog posts at edge POPs, mitigating short periods of laptop sleep or network reconnection.

#### Path D: Oracle Cloud Always-Free ARM Compute (24/7 Cloud Alternative)
* **How It Operates:**
  * Uses Oracle Cloud’s **Always Free Ampere A1 instance** (4 ARM OCPUs, 24 GB RAM, 200 GB SSD) running Ubuntu 24.04 and Docker.
  * Runs `n8n`, `Postiz`, `Umami`, and `Listmonk` 24/7 in the cloud at **$0.00/mo forever**. You don't need to leave your laptop running, and you don't pay any VPS bills.

---

## 2. System Architecture Diagram ($0/mo Hybrid Topology)

```mermaid
flowchart TB
    subgraph CloudflareEdge["Cloudflare Global Network (Free Tier - 24/7 Always On)"]
        CF_DNS["Cloudflare DNS & WAF\n(DDoS Protection, Bot Fight Mode)"]
        CF_Pages["Cloudflare Pages / Next.js SSR\n(Blog, /store, /tools, /stack)"]
        CF_Cache["Tiered Edge Cache\n(Cache Everything: 7-day TTL)"]
        CF_Access["Cloudflare Zero Trust Access\n(Auth Gate for Admin & n8n)"]
    end

    subgraph FreeCloudServices["Free-Tier Serverless Cloud Services (24/7 Always On)"]
        Supabase["Supabase / Neon Postgres (Free Tier)\nUsers, Articles AST, pgvector RAG, Orders"]
        Polar["Polar.sh Merchant of Record ($0/mo)\nEmbedded Checkout & Private GitHub Invites"]
        CloudAI["Google Gemini 2.5 Flash Free API\n(1,500 req/day for Live GenUI Concierge)"]
    end

    subgraph LocalMac["Local MacBook Docker Cluster (Self-Hosted - $0/mo)"]
        CF_Tunnel["cloudflared Container\n(Outbound Encrypted Tunnel)"]
        n8n["n8n Orchestrator Container\n(Workflow Engine & HITL Telegram Gate)"]
        Postiz["Postiz Container\n(Omnichannel Social Publisher & Calendar)"]
        Ollama["Native macOS Ollama (Apple Silicon GPU)\n(Qwen 2.5 Coder / Llama 3.3 for Free Batch AI)"]
        OG_Renderer["Local Satori / Puppeteer\n(Renders LinkedIn PDF Carousels & Social Cards)"]
    end

    subgraph SocialNetworks["Free Syndication APIs ($0/mo - No Twitter/X)"]
        Bluesky["Bluesky (AT Protocol - Free)"]
        LinkedIn["LinkedIn Official API\n(Post + Native PDF Carousel - Free)"]
        DevTo["Dev.to REST API (Free Key)"]
        Threads["Meta Threads API (Free)"]
        Mastodon["Mastodon API (Free)"]
        Telegram["Telegram Channel & Bot (Free)"]
        Discord["Discord Webhooks (Free)"]
    end

    %% Flow connections
    Visitor((Developer Visitor)) --> CF_DNS --> CF_Pages
    CF_Pages <--> Supabase
    CF_Pages <--> CloudAI
    CF_Pages <--> Polar
    CF_Pages -. Cached Content .-> CF_Cache

    Admin((Author / Admin)) --> CF_Access --> CF_Tunnel
    CF_Tunnel <--> n8n
    CF_Tunnel <--> Postiz

    n8n <--> Ollama
    n8n --> OG_Renderer
    n8n --> Postiz

    Postiz --> Bluesky
    Postiz --> LinkedIn
    Postiz --> Threads
    Postiz --> Mastodon
    n8n --> DevTo
    n8n --> Telegram
    n8n --> Discord
```

---

## 3. Mature, Non-Experimental Generative UI (GenUI) Architecture

### 3.1 Avoiding Experimental Pitfalls
> **Production Standard:** To prevent hydration mismatches, stream crashes, and breaking framework updates, `thatguycodes` explicitly **avoids experimental React Server Component streaming (`@ai-sdk/rsc` / `streamUI`)**.
>
> **The Battle-Tested Approach:**
> 1. **Core SDK:** Use **Vercel AI SDK Core (`ai`)** and **AI SDK UI (`@ai-sdk/react`)**—both open-source (Apache-2.0) and production-stable.
> 2. **Structured Tool Calling:** The agent backend invokes strongly typed **Zod tools** via `streamText()`. Each tool returns **plain, serializable JSON data**.
> 3. **Client-Side Component Registry:** The React client component uses `useChat()` to listen to `message.parts`. When `part.type === 'tool-invocation'`, a deterministic `<GenUIRegistry />` renders trusted, pre-built React components.
> 4. **Zero Hydration Mismatches:** All message streams and tool results are 100% JSON-serializable, allowing seamless persistence to `localStorage` or PostgreSQL.

### 3.2 Free-Tier LLM Inference Matrix for GenUI

| Provider | Model | Free Tier Limits | Latency | Role in `thatguycodes` |
| :--- | :--- | :--- | :--- | :--- |
| **Google Gemini API** (Google AI Studio) | `gemini-2.5-flash` | **15 RPM / 1,000,000 TPM / 1,500 Requests/Day** ($0/mo, no credit card) | ~400ms TTFT | **Primary Live Site GenUI Concierge** (1M context window effortlessly handles entire articles for "Chat with this post"). |
| **Groq Cloud** | `llama-3.3-70b-versatile` | **30 RPM / up to 14,400 RPD** ($0/mo, no credit card) | ~200ms TTFT (300+ tok/s) | **Fast Fallback Engine** for instantaneous code sandbox generation. |
| **Native macOS Ollama** | `qwen2.5-coder:14b` / `llama3.3` | **Unlimited ($0.00, Offline, Private)** | Fast on Apple Silicon GPU | **Heavy Background `n8n` Content Engine** (generates social drafts, quizzes, and summaries with zero rate limits). |

### 3.3 Specified GenUI Components for `thatguycodes`

```tsx
// Client-Side GenUI Tool Switcher (components/gen-ui/registry.tsx)
import { ToolInvocation } from 'ai';
import { ArchitectureCanvas } from './architecture-canvas';
import { CodeSandbox } from './code-sandbox';
import { ProductComparison } from './product-comparison';
import { StackTranslator } from './stack-translator';
import { PolarCheckoutCard } from './polar-checkout-card';

export function GenUIToolRenderer({ part }: { part: ToolInvocation }) {
  const { toolName, state } = part;
  const isStreaming = state !== 'result';

  switch (toolName) {
    case 'renderArchitectureDiagram':
      return <ArchitectureCanvas data={part.result} isLoading={isStreaming} />;
    case 'renderCodeSandbox':
      return <CodeSandbox files={part.result?.files} template={part.result?.template} isLoading={isStreaming} />;
    case 'compareDigitalProducts':
      return <ProductComparison products={part.result?.products} isLoading={isStreaming} />;
    case 'translateArticleStack':
      return <StackTranslator diff={part.result?.diff} targetStack={part.result?.targetStack} isLoading={isStreaming} />;
    case 'mountCheckout':
      return <PolarCheckoutCard productId={part.result?.productId} tier={part.result?.tier} />;
    default:
      return null;
  }
}
```

---

## 4. Local Mac Docker & Cloudflare Tunnel Security Hardening

If running Docker services locally on your Mac, strict isolation and edge security must be enforced so no public traffic can compromise your macOS host.

### 4.1 Production `docker-compose.yml` Blueprint

```yaml
services:
  # Outbound-only tunnel: No incoming open ports on your Mac or router!
  cloudflared:
    image: cloudflare/cloudflared:2025.2.1
    container_name: tgc_tunnel
    restart: unless-stopped
    command: tunnel --no-autoupdate run
    environment:
      - TUNNEL_TOKEN=${CF_TUNNEL_TOKEN}
    networks:
      - edge_net
    security_opt:
      - no-new-privileges:true
    cap_drop:
      - ALL
    deploy:
      resources:
        limits:
          cpus: "0.50"
          memory: 256M

  # Self-Hosted n8n Workflow Orchestrator
  n8n:
    image: n8nio/n8n:1.80.0
    container_name: tgc_n8n
    restart: unless-stopped
    user: "1000:1000"
    environment:
      - N8N_HOST=n8n.thatguycodes.com
      - N8N_PROTOCOL=https
      - WEBHOOK_URL=https://n8n.thatguycodes.com/
      - N8N_ENCRYPTION_KEY=${N8N_ENCRYPTION_KEY}
      - GENERIC_TIMEZONE=UTC
    volumes:
      - n8n_storage:/home/node/.n8n
    extra_hosts:
      - "host.docker.internal:host-gateway" # Connects to native macOS Ollama GPU!
    networks:
      - edge_net
      - internal_net
    security_opt:
      - no-new-privileges:true
    deploy:
      resources:
        limits:
          cpus: "1.50"
          memory: 1536M

  # Self-Hosted Postiz Omnichannel Social Publisher
  postiz:
    image: ghcr.io/gitroomhq/postiz-app:latest
    container_name: tgc_postiz
    restart: unless-stopped
    environment:
      - BACKEND_URL=https://postiz.thatguycodes.com
      - FRONTEND_URL=https://postiz.thatguycodes.com
      - NEXTAUTH_URL=https://postiz.thatguycodes.com
      - JWT_SECRET=${POSTIZ_JWT_SECRET}
      - DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@postgres:5432/postiz
      - REDIS_URL=redis://redis:6379
    networks:
      - edge_net
      - internal_net
    security_opt:
      - no-new-privileges:true
    deploy:
      resources:
        limits:
          cpus: "1.00"
          memory: 1024M

  # Supporting Local Database & Cache (Internal Only, No Public Access)
  postgres:
    image: postgres:16-alpine
    container_name: tgc_postgres
    restart: unless-stopped
    environment:
      - POSTGRES_USER=${DB_USER}
      - POSTGRES_PASSWORD=${DB_PASSWORD}
      - POSTGRES_DB=tgc_internal
    volumes:
      - pgdata:/var/lib/postgresql/data
    networks:
      - internal_net
    deploy:
      resources:
        limits:
          memory: 512M

  redis:
    image: redis:7-alpine
    container_name: tgc_redis
    restart: unless-stopped
    networks:
      - internal_net
    deploy:
      resources:
        limits:
          memory: 256M

networks:
  edge_net:
    driver: bridge
  internal_net:
    driver: bridge
    internal: true # Cannot communicate outside Docker cluster

volumes:
  n8n_storage:
  pgdata:
```

### 4.2 Cloudflare Zero Trust & Edge Hardening (Free Plan)
1. **Cloudflare Zero Trust Access Gate:**
   * Protect internal endpoints (`n8n.thatguycodes.com`, `postiz.thatguycodes.com`) with Cloudflare Access.
   * Only your personal email is permitted access via One-Time Pin (OTP) or GitHub OAuth. Unauthenticated requests are rejected at Cloudflare’s edge and never enter the tunnel to your laptop.
2. **Edge Caching Rules (Surviving Laptop Sleep / Load Spikes):**
   * Configure a Cloudflare Cache Rule for `thatguycodes.com/blog/*` with **Cache Everything**, **Edge TTL: 7 Days**, and **Serve Stale While Revalidating**.
   * Even if your laptop is closed, visitors reading published articles are served instantaneously from Cloudflare's nearest edge data center.
3. **Bot Mitigation & WAF Rules:**
   * Enable **Cloudflare Bot Fight Mode** and **Block AI Scrapers** (prevents aggressive third-party bots from hammering your local bandwidth).
   * Restrict `n8n.thatguycodes.com/webhook/*` to only accept `POST` requests bearing a secret cryptographic header (`X-Webhook-Secret`).

---

## 5. Free ($0/mo) Omnichannel Blog-to-Social Automation Pipeline

### 5.1 The 100% Free Distribution Network (Excluding Twitter/X)
The automated pipeline connects exclusively to platforms offering **100% free API access**:

```
[New Blog Post Published via Git Push]
                │
                ▼ (Signed Webhook)
      [Self-Hosted n8n in Docker]
                │
                ├──► 1. Calls Local Ollama / Gemini Free API to Generate:
                │       • Bluesky 5-post thread (AT Protocol)
                │       • LinkedIn narrative breakdown + 6-slide PDF carousel
                │       • Meta Threads post + image album
                │       • Mastodon technical thread
                │       • Dev.to formatted Markdown (with canonical_url)
                │       • Telegram & Discord rich embeds
                │
                ├──► 2. Generates Visual Assets (Local Satori / @vercel/og):
                │       • Code snippet cards (1200x675)
                │       • Multi-page LinkedIn PDF Document (1080x1350)
                │
                ├──► 3. Human-in-the-Loop (HITL) Telegram Approval:
                │       • n8n pauses at Wait Node ($execution.resumeUrl)
                │       • Sends formatted preview to your Telegram Bot
                │       • Interactive Buttons: [Approve] | [Regenerate] | [Drafts]
                │
                └──► 4. Staggered Omnichannel Publishing:
                        • Instant: Bluesky, LinkedIn (+PDF), Threads, Mastodon
                        • Instant: Telegram Channel & Discord Community
                        • +48h Delay: Dev.to REST API (for Google SEO indexing protection)
```

### 5.2 Step-by-Step Free API Configurations in `n8n`
1. **Bluesky (AT Protocol - Free):**
   * Generate an App Password in Bluesky settings.
   * `n8n` executes `com.atproto.server.createSession` to retrieve a JWT, then creates root/parent thread records via `com.atproto.repo.createRecord`.
2. **LinkedIn Official API (Free):**
   * Create an app in the LinkedIn Developer Portal with `w_member_social`.
   * Upload generated PDF carousel via `POST /rest/documents` and publish via `POST /rest/posts`.
3. **Meta Threads API (Free):**
   * Meta Developer App with `threads_basic` and `threads_content_publish`. Long-lived token auto-refreshed every 60 days via n8n cron.
4. **Dev.to REST API (Free):**
   * `POST https://dev.to/api/articles` with `api-key` header. Sets `canonical_url: "https://thatguycodes.com/blog/[slug]"` and `published: true` after a 48-hour delay.
5. **Discord & Telegram (Free Forever):**
   * Discord incoming webhook for instant community announcement.
   * Telegram `@BotFather` API for broadcasting and mobile HITL approvals.

### 5.3 Alternative Pipeline: Path 2 — Code-First TypeScript Stack (`Inngest` / `Trigger.dev` + `Typefully API v2`)

If you ever prefer not to run Docker containers for `n8n` or want your entire automation pipeline version-controlled in TypeScript directly inside your Next.js repo:

* **How It Works:**
  1. **Durable Execution:** Uses **Inngest** (generous Free Tier) or **Trigger.dev** running inside your Next.js `/src/inngest` directory.
  2. **Type-Safe Step Functions:**
     ```typescript
     // src/inngest/social-distribution.ts
     export const publishSocialPack = inngest.createFunction(
       { id: 'publish-social-pack' },
       { event: 'blog/post.published' },
       async ({ event, step }) => {
         // Step 1: AI Repurposing via Vercel AI SDK (Gemini Free Tier)
         const socialDrafts = await step.run('generate-drafts', async () => {
           return generateObject({
             model: google('gemini-2.5-flash'),
             schema: socialPackSchema,
             prompt: `Repurpose this article: ${event.data.rawMdx}`
           });
         });

         // Step 2: Push Drafts to Typefully API v2 (for X, LinkedIn, Threads, Bluesky)
         const typefullyDraft = await step.run('create-typefully-draft', async () => {
           return fetch('https://api.typefully.com/v2/drafts', {
             method: 'POST',
             headers: { 'X-API-KEY': process.env.TYPEFULLY_API_KEY! },
             body: JSON.stringify({ posts: socialDrafts.threads })
           });
         });

         // Step 3: Human Approval Gate (Waits up to 7 days for Slack/Telegram button)
         await step.waitForEvent('social/approved', { timeout: '7d' });

         // Step 4: Cross-Post to Dev.to with 48h delay
         await step.sleep('48h');
         await step.run('post-devto', async () => {
           return postToDevTo(event.data);
         });
       }
     );
     ```
* **Why Keep This Option:** Zero Docker overhead, 100% TypeScript, and Typefully provides the slickest manual thread-editing UI on the market if you prefer fine-tuning drafts in a rich editor before scheduling.

---

## 6. Commerce & Living Repository Delivery (Polar.sh Integration)

### 6.1 Polar.sh Architecture ($0/mo Fixed Cost)
* **Zero Subscription Fee:** Polar charges 4% + $0.40 only when a purchase occurs, eliminating upfront merchant costs.
* **Merchant of Record (MoR):** Polar automatically calculates, collects, and remits global sales tax and VAT (EU/UK/US).
* **Automated Private GitHub Repository Delivery:**
  * Connect Polar to your GitHub Organization.
  * When a customer purchases a product (e.g., *"The $0/mo Sovereign Creator Stack"*), Polar automatically invites their GitHub username with `pull` access to the private repository.
  * When updates or bug fixes are pushed to the repo, all verified buyers receive them immediately via `git pull`.

---

## 7. Implementation Roadmap & Monorepo Structure

```text
thatguycodes/
├── BUSINESS_REQUIREMENTS.md          # Strategy, $0/mo economics & free APIs
├── TECHNICAL_REQUIREMENTS.md         # Production architecture, GenUI & Docker blueprints
├── docker-compose.yml                # Hardened local Docker cluster (n8n, Postiz, cloudflared)
├── .env.example                      # Secrets & tokens template
├── content/
│   ├── blog/                         # Git-backed MDX articles
│   └── products/                     # Digital product specifications & preview data
├── workflows/
│   └── n8n/                          # Exported n8n workflow JSONs (also sold as products!)
└── src/
    ├── app/                          # Next.js App Router (Runs on Cloudflare Pages)
    │   ├── (marketing)/              # /, /blog, /tools, /stack
    │   ├── (commerce)/               # /store, /products/[slug]
    │   └── api/
    │       ├── chat/                 # Vercel AI SDK streamText route (Gemini Free Tier)
    │       └── webhooks/             # Polar.sh & GitHub publish triggers
    ├── components/
    │   ├── gen-ui/                   # Production-safe React tool components
    │   │   ├── registry.tsx          # Dynamic GenUI tool switcher
    │   │   ├── architecture-canvas.tsx
    │   │   ├── code-sandbox.tsx
    │   │   ├── product-comparison.tsx
    │   │   └── polar-checkout-card.tsx
    │   └── mdx/                      # Custom MDX components
    └── lib/
        ├── ai/                       # Gemini / Groq client configurations & Zod tools
        └── db/                       # Drizzle ORM schema (PostgreSQL + pgvector)
```
