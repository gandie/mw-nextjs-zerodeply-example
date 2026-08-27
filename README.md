This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment to mittwald

This project is configured for zero-configuration deployment to [mittwald](https://mittwald.de) using the [`mittwald/zerodeploy-action`](https://github.com/mittwald/zerodeploy-action) GitHub Action. This action is ideal for applications like this one that are built with AI development tools.

### Prerequisites

- **mStudio API Token**: Create or retrieve your API token from the [mittwald mStudio dashboard](https://mstudio.mittwald.de/)
- **Project ID**: The mittwald project ID (format: `p-XXXXXX`) where you want to deploy

### Setup

1. Add your credentials as GitHub repository secrets:
   - `MITTWALD_API_TOKEN`: Your mStudio API token
   - `MITTWALD_PROJECT_ID`: Your mittwald project ID

2. The deployment workflow is already configured in `.github/workflows/` and will automatically:
   - Detect the project structure using Railpack
   - Build and containerize the application
   - Deploy to mittwald container hosting

### How It Works

The `zerodeploy-action` automatically determines the best way to build a Docker image from your source code without requiring a Dockerfile. It uses [Railpack](https://railpack.dev/) to infer build steps and deploys directly to mittwald with minimal configuration.

### Deployment Triggers

The workflow is triggered by:
- Manual trigger via GitHub Actions `workflow_dispatch` 
- Push events (configure as needed in your workflow file)

### Additional Resources

For detailed information about deployment options, advanced configurations, and troubleshooting, see the [mittwald container deployment guide](https://developer.mittwald.de/docs/v2/guides/deployment/container-actions/#deploy-with-zerodeploy-action).
