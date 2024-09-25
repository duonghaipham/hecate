## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:9000](http://localhost:9000) with your browser to see the result.

## Motivation

Learn to deploy an app as simply as possible

Very straightforward steps:

1. Trigger build code on GitHub Actions runner once a PR is merged into `master`
2. Zip the build result
3. Transfer the zip build to server
4. Extract the zip
5. Start the app

## Deploy on Vercel

Currently the web is deployed on https://hecate.gorgo.click

The demo page is at https://hecate.gorgo.click/user
