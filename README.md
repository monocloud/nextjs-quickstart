<div align="center">
  <a href="https://www.monocloud.com?utm_source=github&utm_medium=nextjs_quickstart" target="_blank" rel="noopener noreferrer">
   <picture>
      <img src="https://raw.githubusercontent.com/monocloud/nextjs-quickstart/refs/heads/main/banner.svg" alt="MonoCloud Banner"/>
    </picture>
  </a>
  <p><strong>Secure, simple auth for everything</strong></p>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/:license-MIT-blue.svg?style=flat" alt="License: MIT" />
  </a>
</div>

<br />

# Next.js App Router Quickstart

A **minimal Next.js App Router example** showing how to add authentication with MonoCloud.

## What this repo shows

- MonoCloud authentication with Next.js App Router
- Middleware-based route protection
- Reading the signed-in user (server + client)
- Sign in and sign out flows

Built with [**`@monocloud/auth-nextjs`**](https://www.npmjs.com/package/@monocloud/auth-nextjs).

## Prerequisites

Before you begin, you’ll need:

- A MonoCloud account
- A **Web Application** configured for **Next.js** in the [MonoCloud Dashboard](https://dashboard.monocloud.com?utm_source=github&utm_medium=nextjs_quickstart)

## Configure environment variables

This repo includes a `.env.local` template. Replace the placeholders with values from your MonoCloud application:

```bash
MONOCLOUD_AUTH_TENANT_DOMAIN=https://<your-domain>
MONOCLOUD_AUTH_CLIENT_ID=<your-client-id>
MONOCLOUD_AUTH_CLIENT_SECRET=<your-client-secret>
MONOCLOUD_AUTH_SCOPES=openid profile email
MONOCLOUD_AUTH_APP_URL=http://localhost:3000
MONOCLOUD_AUTH_COOKIE_SECRET=<random-secret>
```

> ⚠️ Do not commit real secrets. This file is for local development only.

### Application URLs (local)

Configure these in your MonoCloud app:

- Callback URL → `http://localhost:3000/api/auth/callback`
- Sign-out URL → `http://localhost:3000`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## What to copy from this repo

- App Router–compatible auth middleware
- Protected routes and pages
- Server + client access to the authenticated user
- Built-in sign-in and sign-out components

This repo is a **reference**, not a framework.

## 📘 Learn more

- **Next.js SDK Docs:** [https://www.monocloud.dev/docs/sdks/nextjs](https://www.monocloud.dev/docs/sdks/nextjs?utm_source=github&utm_medium=nextjs_quickstart)
- **API Reference:** [https://monocloud.github.io/auth-js](https://monocloud.github.io/auth-js/modules/_monocloud_auth-nextjs.html?utm_source=github&utm_medium=nextjs_quickstart)

## 🤝 Contributing & Support

### Issues & Feedback

- Use **GitHub Issues** for bug reports and feature requests.
- For tenant or account-specific help, contact MonoCloud Support through your dashboard.

### Security

Do **not** report security issues publicly. Please follow the contact instructions at: [https://www.monocloud.com/contact](https://www.monocloud.com/contact?utm_source=github&utm_medium=auth_js)

## 📄 License

Licensed under the **MIT License**. See the included [`LICENSE`](https://github.com/monocloud/auth-js/blob/main/LICENSE) file.