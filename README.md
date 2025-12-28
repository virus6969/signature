# SignaGenius: AI-Powered Signature Design Studio

This is a Next.js application that serves as a comprehensive platform for users to generate, analyze, and purchase professional, handcrafted digital signatures. The project leverages a modern tech stack to provide a seamless user experience, from AI-driven design creation to a secure payment process.

## Project Overview

SignaGenius is designed as a full-fledged e-commerce and marketing website. It attracts users through a persuasive landing page, educates them on the service, and guides them through a checkout process to purchase a custom signature design.

### Key Features

- **Marketing & Sales Pages**: Includes a main landing page (`/`), an ads-optimized landing page (`/ads`), and a full checkout flow (`/checkout`) with payment integration.
- **AI-Powered Signature Generation**: Users can input their name and style preferences to have a Genkit AI flow generate a unique signature design and provide a stylistic analysis.
- **AI Style Trend Analysis**: A second AI flow allows users to input signature elements and get real-time feedback and suggestions based on 2025 design trends.
- **Payment Integration**: The checkout process is integrated with the Cashfree payment gateway to handle secure online payments.
- **Dynamic UI**: The application features a dynamic and responsive user interface built with ShadCN components, including social proof popups, exit-intent modals, and countdown timers to drive conversions.
- **Comprehensive Policy Pages**: Includes a full suite of legal and policy pages (`/policies`, `/privacy`, `/refund`, etc.) to build trust and provide transparency.
- **Post-Purchase Experience**: A dedicated `/thank-you` page confirms the user's order and provides next steps.

## Technology Stack

- **Framework**: Next.js (with App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI, Radix UI, Lucide React icons
- **Generative AI**: Google Genkit, integrated via server-side flows.
- **Payment Gateway**: Cashfree
- **Forms**: React Hook Form with Zod for validation.

## Project Structure

The project follows a standard Next.js App Router structure:

- **/src/app/**: Contains all pages, layouts, and route definitions.
  - **/(pages)/**: Subdirectories for each route (e.g., `/checkout`, `/policies`).
  - **`layout.tsx`**: The root layout for the entire application.
  - **`page.tsx`**: The main landing page.
  - **`actions.ts`**: Server Actions that bridge the frontend components with the backend AI flows.
- **/src/ai/**: Contains the Genkit implementation.
  - **`genkit.ts`**: Initializes and configures Genkit with the Google AI plugin.
  - **/flows/**: Defines the AI prompts and multi-step logic for generating signatures and analyzing trends.
- **/src/components/**: Contains all reusable React components.
  - **/app/**: Application-specific components (e.g., `footer.tsx`, `testimonials-section.tsx`).
  - **/ui/**: Generic UI components from ShadCN (e.g., `Button.tsx`, `Card.tsx`).
- **/src/lib/**: Contains utility functions, constants, and data.
  - **`utils.ts`**: General utility functions like `cn` for class names.
  - **`placeholder-images.json`**: A central file for managing all placeholder image data.
- **/public/**: For static assets like images and fonts.

## Getting Started

To run the project locally, follow these steps:

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Set up Environment Variables**:
   Create a `.env.local` file in the root directory and add any necessary environment variables (e.g., for Genkit or Firebase).

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:9002`.
