# Awesome Recipes

Awesome Recipes is a recipe app built with Next.js, Tailwind, and Shadcn. It
allows users to browse, search, and sort recipes fetched from the DummyJSON API.
The project was developed using an agile approach in a team of four over a
three-week period.

## Features

- **Home Page**: Click a button to get a random recipe.
- **Recipe List (`/recipes`)**:
  - Displays a paginated list of cards.
  - Search recipes by name (or part of a name)
  - "Order by" dropdown to sort recipes (ascending, descending, or reset).
- **Recipe Details (`/recipe/[id]`)**: View full details of a selected recipe.
- **Authentication**: Basic authentication using NextAuth v5 beta.
- **Responsive Design**: Styled with Tailwind CSS.
- **Accessibility**: Tested with WAVE and Lighthouse.

## Tech Stack

- **Framework**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/),
  [Shadcn](https://ui.shadcn.com/)
- **Icons**: [Lucide](https://lucide.dev/)
- **Authentication**: [NextAuth.js v5 (beta)](https://next-auth.js.org/)
- **API**: [DummyJSON (Recipes)](https://dummyjson.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/topmar/recipes-tailwind-front.git
   cd recipes-tailwind-front
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables: Create a `.env.local` file in the project root
   and add the necessary variables for NextAuth:

   ```plaintext
   AUTH_SECRET="your-secret-key"
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Workflow

We followed an agile methodology with:

- **Prep Week**: Planning & setup.
- **Sprint 1**: Initial feature development & UI structure.
- **Sprint 2**: Enhancements, testing, and backlog refinement—where we
  identified missing features, made necessary adjustments, and ensured the app
  met our intended scope.
- **Git Workflow**:

  - Feature branches for each task.
  - Pull requests reviewed before merging.
  - Regular commits to ensure continuity.
  - At the end of each sprint, we merged into the `master` branch.

  ## Contributors

- **[Sandra Höst Kannerberg](https://github.com/SandraHKannerberg)**
- **[Parvin Shafiee Matanagh](https://github.com/ParvinSha)**
- **[Ann Mathenge](https://github.com/AnnMath)**
- **[Marcin Topolski](https://github.com/topmar)**
