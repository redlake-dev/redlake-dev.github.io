# Redlake

Custom software solutions, DevOps, and cloud infrastructure.

## About

Redlake specializes in building custom software solutions tailored to your business needs. We develop modern applications with AI integration (LLMs and computer vision), and provide comprehensive DevOps and cloud infrastructure services across AWS, Google Cloud, and Azure.

## Website

This repository hosts the company website at [redlake.dev](https://redlake.dev)

## GitHub Pages Setup

This site is built with Jekyll and hosted on GitHub Pages.

## Development

This is a Jekyll-based static site with Tailwind CSS. To run locally:

### Prerequisites

- Ruby 3.2+
- Node.js 20+
- Bundler
- npm

### Setup

1. Install Ruby dependencies:
```bash
bundle install
```

2. Install Node dependencies:
```bash
npm install
```

3. Build Tailwind CSS (in one terminal):
```bash
npm run watch:css
```

4. Run Jekyll (in another terminal):
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to preview the site.

### Deployment

The site automatically builds and deploys via GitHub Actions when you push to the `main` branch. The workflow:
1. Installs dependencies (Ruby and Node)
2. Builds Tailwind CSS
3. Builds Jekyll site
4. Deploys to GitHub Pages

No need to commit the built CSS file - GitHub Actions handles it!

## License

Copyright © 2026 Redlake. All rights reserved.
