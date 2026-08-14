<p align="center">
<img src="./public/static/image/banner.png" width="1024" alt="banner">
</p>

> [!IMPORTANT]
> Eliminating AI design slop through deterministic, multi-registry indexing and zero-friction layout streaming.
CRUX MCP **(Component Registry eXchange)** is an open-source, Model Context Protocol (MCP). It acts as an open federation bridge that sits between your AI agent (Cursor, Windsurf, Claude Code) and a network of premium UI component registries (Shadcn, MagicUI, Aceternity, DaisyUI, KokonutUI). Instead of letting AI tools guess layout math—which frequently outputs predictive gradients and uninspired flex containers—CRUX empowers LLMs to fetch 1:1 accurate component code snippets, package dependencies, and setup prerequisites directly into your workspace.

> [!WARNING]
> This Project Under-development and not recommend to be use as of now. 
> State: Technical Documentation and System Designing
------------------------------
## 🏗️ Architecture
``` diagram
[ Developer Studio ] ──────(Cmd+Alt+V Hotkey)─────► [ VS Code Webview Canvas Window ]
        │                                                     ▲
        ▼ (Standard Model Context Protocol Execution)          │ (Renders 1:1 Live Views)
[ Local CRUX MCP Server ] ──► Compiles Background Sandbox ─────┤
        │
        ├──► [local]  ──► Uses SQLite File + Local JS Memory Cache (0% Laptop Strain)
        └──► [cloud]  ──► Injects Token Header ──► [Distributed Redis + Cloud K8s Router]
```
------------------------------
## ⚡ Key Features

* Find and Install Component: Instantly queries multi-registry endpoints. Downloads raw .tsx code files and executes missing shell package managers natively.
* Sketch UI with AI: Diverts design tasks away from the production repository into an isolated background Vite compilation server (http://localhost:5173) running Hot Module Replacement (HMR). [2] 
* Anti-Slop Layout Review: Automatically audits your workspace components for inline color bypasses, arbitrary sizing hacks, and unresponsive mobile layout blocks.
* Offline-to-Cloud Telemetry Sync: Injects tracker signatures into components to monitor project telemetry. Works offline via a clean SQLite configuration and syncs back to your enterprise cloud gateway seamlessly.

------------------------------
## 💻 Tech Stack Matrix

* Local MCP Runtime: @modelcontextprotocol/sdk (TypeScript)
* Sandbox Execution Canvas: Vite + React 19
* Styling Core: Tailwind CSS v3 + Framer Motion
* Central API Routing: Apollo Server + GraphQL-Yoga
* Database ORM: Prisma Client (Enforcing Multi-Tenant Data Isolation)
* High-Scale Operations: PostgreSQL 16 + Redis Cluster + PgBouncer

------------------------------
## 🏁 Quickstart Integration Guide
## 1. Register the Local MCP Server
Inject this block into your favorite AI text editor settings configuration parameters path (e.g., cursor.json, or Claude Desktop Settings):
```
"mcpServers": {
  "crux-mcp-engine": {
    "command": "npx",
    "args": ["-y", "@crux/mcp-server"],
    "env": {
      "CRUX_MODE": "local"
    }
  }
}
```
For cloud environments connecting to a hosted corporate library hub, switch the mode and supply your secure access token:
```
"env": {
  "CRUX_MODE": "cloud",
  "CRUX_ORG_API_KEY": "crux_sk_acme_company_secret_token_abc123"
}
```
## 2. Activate the VS Code Split-Panel Interface

   1. Download the extension from the VS Code Marketplace: Universal UI Canvas Companion.
   2. Open a React codebase workspace file.
   3. Strike Cmd+Alt+V (Mac) or Ctrl+Alt+V (Windows) to snap open the live, hot-reloading background preview viewport.

------------------------------
## 👥 DevEx Onboarding & Contributing
CRUX is engineered for zero-friction contributor onboarding. It runs a single-command setup pipeline that configures environment assets, dependencies, and local editor configurations automatically without freezing limited developer hardware.
```
# 1. Clone the repository framework layout
git clone https://github.com/JustineDevs/CRUX
cd crux
# 2. Run the interactive onboarding script (Auto-configures .env and editor tools)
npm run dev:setup
# 3. Spin up hot-reloading loops across all workspace sub-packages
npm run dev:start
```
------------------------------
## 🧪 Terminal-Based Mock Testing Suite
Contributors can debug and test tools immediately from the CLI without launching an editor client or spending live LLM API token credits:
## Test the Live Sandbox View Generation
```
npm run test:sketch

Compiles your target structural payload directly to the internal framework canvas address port (http://localhost:5173).
## Test the Diagnostic Layout Auditor

npm run test:review -- -f "src/components/MessyGrid.tsx"
```
> Parses the relative layout structure to verify regex anti-pattern rules. Returns a clean terminal report tagging color bypass tokens or arbitrary spacing bugs.
------------------------------

