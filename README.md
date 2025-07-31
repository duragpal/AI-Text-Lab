# 🤖 AI-Text-Lab: The All-in-One AI Content Generation SaaS

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-13-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Deployment](https://img.shields.io/badge/Deployment-Vercel-black?logo=vercel)](https://ai-text-lab.vercel.app/)

AI-Text-Lab is an open-source, full-stack SaaS platform built with the latest web technologies to provide a powerful suite of AI-driven tools. It empowers content creators, marketers, and developers to generate high-quality text, code, and media content effortlessly.

## 🚀 Live Demo

**Check out the live application here:** [**https://ai-text-lab.vercel.app/**](https://ai-text-lab.vercel.app/)


## ✨ Key Features

AI-Text-Lab offers a diverse range of generation tools, all accessible from a clean and modern dashboard:

* **✍️ Content Creation**:
    * Blog Titles, Content & Topic Ideas
    * YouTube SEO Titles, Descriptions & Tags
    * Product Descriptions & Text Improver

* **💻 Developer Tools**:
    * Generate code snippets in any language
    * Explain complex code
    * Detect bugs and suggest fixes

* **📈 Social Media**:
    * Instagram Post & Hashtag Generator
    * Rewrite articles to be plagiarism-free
    * Add Emojis to text automatically

* **🔐 Authentication & Subscriptions**:
    * Secure user sign-up and sign-in with Clerk.
    * API rate limiting and a free tier for all users.
    * (Future) Stripe integration for pro-tier subscriptions.

## 🛠️ Tech Stack

This project leverages a modern, typesafe, and performant technology stack:

| Category          | Technology                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| **Framework** | [**Next.js 13**](https://nextjs.org/) (with App Router)                                                       |
| **Language** | [**TypeScript**](https://www.typescriptlang.org/)                                                           |
| **Styling** | [**Tailwind CSS**](https://tailwindcss.com/)                                                                |
| **UI Components** | [**Shadcn/ui**](https://ui.shadcn.com/) - Beautifully designed, accessible, and unstyled components.          |
| **Authentication**| [**Clerk**](https://clerk.com/) - Complete user management, sign-in, sign-up, and organization support.       |
| **AI Integration**| [**OpenAI API**](https://openai.com/blog/openai-api) - Powering all content generation features.              |
| **Form Handling** | [**Zod**](https://zod.dev/) - TypeScript-first schema validation.                                             |
| **Deployment** | [**Vercel**](https://vercel.com/)                                                                           |

## ⚙️ Getting Started: Running the Project Locally

To set up and run this project on your local machine, follow the steps below.

### Prerequisites

* **Node.js**: Version 18.x or newer.
* **Git**: To clone the repository.
* An **OpenAI API Key**.
* A **Clerk Account** for API keys.

### 1. Clone the Repository

```bash
git clone [https://github.com/duragpal/AI-Text-Lab.git](https://github.com/duragpal/AI-Text-Lab.git)
cd AI-Text-Lab
```

### 2. Install Dependencies

Install the required packages using your preferred package manager:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project by copying the example file:

```bash
cp .env.example .env
```

Now, open the `.env` file and add the required keys from your Clerk and OpenAI dashboards.

| Variable                            | Description                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your publishable API key from the Clerk dashboard.          |
| `CLERK_SECRET_KEY`                  | Your secret API key from the Clerk dashboard.               |
| `NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY` | Your secret API key from the Gemini platform.               |
| `DATABASE_URL`                      | (Optional) Your database connection string if you add one.  |
|

Other Variables for Clerk Signin and signup routes authentication.
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

### 4. Run the Development Server

Start the application in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

Durag Pal Singh - [GitHub](https://github.com/duragpal) - [LinkedIn](https://www.linkedin.com/in/duragpalsingh/)

---