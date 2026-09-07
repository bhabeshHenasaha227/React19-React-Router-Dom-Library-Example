<div align="center">

# ⚡ React Router Portfolio Lab ⚡

### *A colorful React 19 and TypeScript portfolio project for practising client-side routing, nested routes, dynamic parameters, reusable navigation, responsive UI, and product-page composition.*

[![React](https://img.shields.io/badge/React-19.2.8-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Router](https://img.shields.io/badge/React_Router-7.18.3-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

---

</div>

## 🎯 Overview

This project is a responsive personal portfolio and React Router practice application for **Bhabesh Saha**, a UI Technical Lead and Frontend Architect based in Bengaluru, India.

The application combines personal portfolio content with practical routing examples. It includes:

- 🏠 A profile-focused Home page with professional strengths and navigation cards.
- 👤 An About page describing frontend architecture, leadership, and engineering quality.
- 📬 A Contact page with email, phone, LinkedIn, and location details.
- 🔀 A dynamic User route that renders different content from `/user/:id`.
- 🛍️ A nested Products route with Phone and Laptop child pages.
- 🧭 Shared `NavLink` navigation with active-route styling.
- 🚫 A custom 404 page that shows the unmatched path and links back Home.
- 📱 Responsive layouts for desktop, tablet, and mobile screens.

The code is intentionally small enough to read from entry point to route definition to rendered page. It is useful both as a personal portfolio foundation and as an interview-ready React Router reference.

---

## ✨ Highlights

| Area | What it demonstrates |
| :--- | :--- |
| Routing | `BrowserRouter`, `Routes`, `Route`, `Link`, and `NavLink` |
| Nested routes | `/products` with `/products/phone` and `/products/laptop` |
| Dynamic routes | `/user/:id` with profile data selected from the URL |
| Layout composition | `Outlet` renders child routes inside the Products page |
| Navigation state | Active links use React Router's `NavLink` class state |
| Fallback handling | Wildcard route renders a custom `NotFound` component |
| Responsive UI | CSS breakpoints for pages, cards, navigation, and product layouts |
| Accessibility | Semantic landmarks, labels, focus states, and descriptive image text |

---

## 🗂️ Complete File & Module Breakdown

Here is the purpose of each important file in the current repository:

### 🌐 Application Entry

* 📄 **`index.html`** — Provides the browser document and the `root` element where React mounts.
* 📄 **`src/main.tsx`** — Starts React with `createRoot`, enables `StrictMode`, imports global styles, and renders `App`.
* 📄 **`src/App.tsx`** — Defines the router, top-level navigation, application routes, and route composition.

### 🏠 Portfolio Pages

* 📄 **`src/Home.tsx`** — Personal hero section, profile photo, professional strengths, dynamic-route links, and page navigation cards.
* 📄 **`src/About.tsx`** — Bhabesh's experience, frontend toolkit, architecture focus, leadership, accessibility, and quality principles.
* 📄 **`src/Contact.tsx`** — Contact cards for email, phone, LinkedIn, and Bengaluru location information.
* 📄 **`src/NotFound.tsx`** — Custom wildcard-route page that reads and displays the current unmatched pathname.
* 📄 **`src/User.tsx`** — Dynamic profile page that reads `id` with `useParams` and selects matching data from a typed profile record.

### 🛍️ Nested Product Pages

* 📄 **`src/products/Products.tsx`** — Parent Products page with hero content, product tabs, and the `Outlet` for child routes.
* 📄 **`src/products/Phone.tsx`** — Phone product detail page with product image, description, specifications, price, and Contact CTA.
* 📄 **`src/products/Laptop.tsx`** — Laptop product detail page with product image, description, specifications, price, and Contact CTA.

### 🎨 Assets & Styling

* 🎨 **`src/App.css`** — Shared navigation, portfolio pages, dynamic user page, 404 page, and product-page styles.
* 🎨 **`src/index.css`** — Global link styles and base anchor accessibility states.
* 🖼️ **`src/assets/Bhabeshpic.jfif`** — Profile image used on the Home page.
* 🖼️ **`src/assets/hero.png`** — Local visual used in the Products hero section.
* 📄 **`src/assets/Bhabesh_Saha_UI_Tech_Lead_Resume_latest.pdf`** — Resume source used to shape the portfolio content.

### ⚙️ Build & Tooling

* 📄 **`package.json`** — Defines dependencies and the `dev`, `build`, `lint`, and `preview` scripts.
* 📄 **`vite.config.ts`** — Vite configuration with the React plugin.
* 📄 **`tsconfig.json`** — Base TypeScript project configuration.
* 📄 **`tsconfig.app.json`** — TypeScript settings for the React application.
* 📄 **`tsconfig.node.json`** — TypeScript settings for Vite configuration files.
* 📄 **`eslint.config.js`** — Flat ESLint configuration for JavaScript, TypeScript, React, hooks, and refresh rules.

---

## 🗺️ Route Map

| URL | Component | Purpose |
| :--- | :--- | :--- |
| `/` | `Home` | Personal introduction, profile image, strengths, and navigation links |
| `/about` | `About` | Experience, skills, and professional working principles |
| `/contact` | `Contact` | Email, phone, LinkedIn, location, and opportunity details |
| `/user/:id` | `User` | Dynamic profile content selected by the URL parameter |
| `/user/10` | `User` | Bhabesh Saha profile |
| `/user/11` | `User` | Frontend architecture profile |
| `/user/12` | `User` | Technical leadership profile |
| `/products` | `Products` | Parent layout for the nested product routes |
| `/products/phone` | `Phone` | Nova X1 product detail page |
| `/products/laptop` | `Laptop` | Orbit Pro 14 product detail page |
| Any other URL | `NotFound` | Friendly 404 page with a Home link |

---

## 🧭 Router Setup

The application wraps the route tree in `BrowserRouter`:

```tsx
<BrowserRouter>
  <nav className="site-nav">
    <NavLink to="/" end>Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
```

### Why `NavLink` is used for the main navigation

`NavLink` behaves like a normal client-side link but also exposes the active route state. The CSS uses the generated `active` class to highlight the current page without manually storing navigation state.

The `end` prop on the Home link ensures that Home is active only for `/`, not for every route that begins with `/`.

---

## 🔀 Dynamic User Routes

The User page reads a URL parameter with `useParams`:

```tsx
const { id } = useParams<{ id: string }>();
const profile = id ? profiles[id] : undefined;
```

The route definition is:

```tsx
<Route path="/user/:id" element={<User />} />
```

The `profiles` record maps IDs to typed profile objects:

```tsx
type UserProfile = {
  name: string;
  role: string;
  detail: string;
  skills: string[];
};
```

This means these URLs render different data:

- `/user/10` renders Bhabesh Saha.
- `/user/11` renders Frontend Architecture.
- `/user/12` renders Technical Leadership.

An unknown ID does not crash the page. It renders a **Profile not found** state while keeping the user inside the application.

---

## 🛍️ Nested Product Routes

Products demonstrates a parent route with child routes:

```tsx
<Route path="/products" element={<Products />}>
  <Route path="phone" element={<Phone />} />
  <Route path="laptop" element={<Laptop />} />
</Route>
```

`Products.tsx` renders an `Outlet`:

```tsx
<nav className="product-tabs">
  <NavLink to="phone">Phone</NavLink>
  <NavLink to="laptop">Laptop</NavLink>
</nav>

<Outlet />
```

The child page is inserted where `Outlet` appears. This keeps the Products hero and category navigation visible while the selected product changes below it.

### Product pages

| Page | Example content |
| :--- | :--- |
| Phone | Nova X1, 6.5-inch display, 256 GB storage, 48 MP camera, `$699` |
| Laptop | Orbit Pro 14, 14-inch display, 16 GB memory, 18-hour battery, `$1,299` |

The product detail CTAs use React Router `Link` components to navigate to `/contact` without a full page reload.

---

## 🔗 Client-Side Links

The project uses React Router links for internal navigation:

```tsx
<Link className="primary-button" to="/contact">
  Ask about it
</Link>
```

Internal `Link` and `NavLink` components update the URL and rendered route without requesting a new HTML document from the server. External contact destinations use regular anchors where appropriate, including `mailto:`, `tel:`, and LinkedIn URLs.

---

## 🎨 Content & Design Notes

The current UI is intentionally colorful and portfolio-oriented:

- Profile content is based on Bhabesh Saha's UI Technical Lead resume.
- The Home page uses the local profile photo from `src/assets`.
- Product detail pages use descriptive dummy product content and image URLs for practice-page presentation.
- Shared CSS variables provide the text, background, border, accent, and dark-mode values.
- Media queries stack cards, hero sections, navigation, and product details on smaller screens.
- Focus-visible outlines are included for keyboard navigation.

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer.
- npm.

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

### Create a production build

```bash
npm run build
```

### Run ESLint

```bash
npm run lint
```

### Preview the production build

```bash
npm run preview
```

---

## 🧪 Useful Routing Exercises

This project is a good base for practising the following interview topics:

1. Add a new top-level route and navigation item.
2. Add another product under the existing `/products` nested route.
3. Replace the local `profiles` record with data from an API.
4. Add a loading state for dynamic User data.
5. Add an error boundary or route-level error element.
6. Add query-string filtering to the Products page.
7. Add a shared layout route for the navigation and footer.
8. Add automated tests for known and unknown dynamic IDs.

---

## 📌 Current Status

The project currently provides a working, responsive React Router portfolio with:

- Top-level portfolio routes.
- Dynamic user profiles.
- Nested product routes.
- A custom 404 page.
- Local profile and hero assets.
- Responsive styling and accessible focus states.

`npm run build` and `npm run lint` should both complete successfully in the current project state.
