# A simple react component library starter

This repository was published together with an article on how to create a react component library using Vite's library mode.

## Stack

- Vite
- TypeScript
- React
- TailwindCSS
- Semantic Release
- Commitizen
- Conventional Commits
- Lint-staged
- Github Actions
- NPM

## Installation

You can install it with npm (don't expect much fanciness):

```bash
npm i
# or
bun i
```

## Development

```bash
npm run dev
# or
bun run dev
```

## Build

```bash
npm run build
# or
bun run build
```

## Publish

- Create a new Personal Access Token (PAT) from your Github settings.
- (If you want to publish to NPM) Create a new NPM token from your NPM settings.
- Add your PAT and NPM token to your Github repository secrets as `NPM_TOKEN` and `PAT` respectively.
- Add this to your `.releaserc.json`:

```json
{
  "branches": ["main"],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        "npmPublish": false
      }
    ],
    [
      "@semantic-release/git",
      {
        "assets": ["package.json"],
        "message": "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}"
      }
    ],
    "@semantic-release/github"
  ]
}
```

- Push to `main` to trigger a release.

- Or run publish directly on your local machine:

```bash
npm run publish
# or
bun run publish
```

## Usage

```javascript
import { Button, Label, Input } from "your-component-library";
```

## Credits

- This repository was created by [@mrgoonie](https://github.com/mrgoonie).
- 👉 Follow me on [X](https://x.com/goon_nguyen).
