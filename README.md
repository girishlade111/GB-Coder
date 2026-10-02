# GB Coder — Real-time HTML, CSS & JS Editor

**Bring your web ideas to life instantly!** GB Coder is a CodePen-style online code editor with a live preview pane, a full Monaco editor (the engine behind VS Code), AI-assisted coding, project/snippet management, and one-click export — all free, no setup required.

## Features

- **Live preview** — real-time HTML/CSS/JS rendering as you type
- **Monaco editor** — syntax highlighting, autocomplete, and multi-file tabs
- **AI code assistant** — Gemini-powered code suggestions and enhancements (optional, needs your own `VITE_GEMINI_API_KEY`)
- **Projects & snippets** — save, organize, and re-open your work (Supabase-backed, optional)
- **Export** — download projects as a ZIP
- **Console & terminal panels** — run and debug right in the browser
- **Dark modern UI** — Tailwind CSS, Lucide icons, responsive layout

## Tech Stack

- React 18 + TypeScript + Vite 5
- Tailwind CSS
- Monaco Editor (`@monaco-editor/react`)
- Supabase (auth + storage — optional, graceful fallback when unconfigured)
- Google Gemini API (AI features — optional)

## Quick Start

```bash
git clone https://github.com/girishlade111/GB-Coder.git
cd GB-Coder
npm install --legacy-peer-deps
cp .env.example .env   # fill in your own keys
npm run dev            # http://localhost:5173
```

### Environment variables (optional)

| Variable | Purpose |
|---|---|
| `VITE_GEMINI_API_KEY` | Enables Gemini AI code suggestions |
| `VITE_SUPABASE_URL` | Enables cloud auth + project storage |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon key |

Without these, the editor, preview, export, and local features all work — only AI/cloud features are disabled.

## Project Structure

```
GB-Coder/
├── src/
│   ├── components/      # editor, preview, AI panels, auth, projects
│   ├── services/       # Gemini AI services
│   ├── lib/            # Supabase client (with mock fallback)
│   └── App.tsx         # app shell
├── supabase/           # database migrations
├── index.html
└── vite.config.ts
```

## Deploy

Static SPA — build with `npm run build` and host the `dist/` folder anywhere:

```bash
npm run build
```

- **Cloudflare Pages** (current) — project `gb-coder`, build command `npm run build`, output `dist/`
- Netlify / Vercel / GitHub Pages — same build, works with zero config

## License

Free to use and adapt.

---

Built by [Girish Lade](https://ladestack.in)
