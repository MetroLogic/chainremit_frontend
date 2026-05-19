# chainkRemit_frontend

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE) ## Project Overview 🧐

chainkRemit_frontend is the user-facing web application for chainkRemit, a platform designed to global remittances and microfinance by combining blockchain scalability, smart contract automation, and AI-driven insights. Tailored for migrant workers and underbanked communities, the platform allows users to send money, access microloans, and join community-based savings groups with minimal fees and near-instant settlements. By leveraging the power of Stellar, chainkRemit offers a secure, decentralized alternative to traditional remittance and lending services, dramatically reducing reliance on banks and high transaction costs. facilitate seamless and secure international money transfers. Built with Next.js, it leverages the power of React for building dynamic user interfaces with features like server-side rendering and excellent developer experience. This documentation serves as the central guide for developers looking to understand, contribute to, or deploy this frontend application.

## Setup Instructions 🛠️

Follow these steps to get the project running on your local machine:

1.  **Prerequisites:**
    * [Node.js](https://nodejs.org/) (version >= 18.x recommended)
    * [npm](https://www.npmjs.com/) (version >= 9.x recommended) or [Yarn](https://yarnpkg.com/) (version >= 1.x recommended)
    * Git installed on your system.

2.  **Clone the Repository:**
    ```bash
    git clone https://github.com/MetroLogic/ChainkRemit_frontend
    cd ChainkRemit_frontend
    ```

3.  **Install Dependencies:**
    Using npm:
    ```bash
    npm install
    ```
    Or using Yarn:
    ```bash
    yarn install
    ```

4.  **Run the Development Server:**
    Using npm:
    ```bash
    npm run dev
    ```
    Or using Yarn:
    ```bash
    yarn dev
    ```

    This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Available Scripts 📜

Here's a breakdown of the npm scripts or build commands available in this project:

* `dev`: Starts the Next.js development server with hot-reloading at `http://localhost:3000`.
* `build`: Creates an optimized production build of your application in the `.next` directory.
* `start`: Starts the Next.js production server. Ensure you run `npm run build` first.
* `lint`: Runs the ESLint linter to identify and report on potential code style issues.
* `lint:fix`: Automatically attempts to fix some of the linting issues reported by ESLint.
* `test`: Runs the project's test suite (if configured).
* `test:watch`: Runs the test suite in watch mode, re-running tests on file changes (if configured).
* `format`: Runs Prettier to automatically format your code according to the project's code style.


## Project Structure 📂

Here's a high-level overview of the project's directory structure:

## 📁 Project Structure

```bash
chainkRemit_frontend/
│
├── .github/                # GitHub-specific configurations (e.g., workflows, issue templates)
├── public/                 # Static files like images and favicons
├── src/
│   ├── app/                # Next.js App Router directory (entry point and routes)
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # API service functions
│   ├── utils/              # Utility/helper functions
│
├── .gitignore              # Git ignored files and folders
├── LICENSE                 # Project license
├── next.config.js          # Next.js configuration file
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Exact versions of installed dependencies
├── postcss.config.mjs      # PostCSS configuration for TailwindCSS
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript configuration
```

## Deployment Process 📜

npm run build
# or
yarn build


### Code of Conduct

Please treat all maintainers and other contributors with respect. We strive to maintain a welcoming, inclusive, and collaborative environment for everyone.
