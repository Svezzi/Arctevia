# Fixing ESLint Errors for Netlify Builds

This document explains how to fix the ESLint errors that are causing the Netlify build to fail.

## The Issues

The build is failing due to two main types of ESLint errors:

1. **Unescaped entities** (`react/no-unescaped-entities`): Apostrophes (') in JSX text need to be escaped as `&apos;`.
2. **Unused variables** (`@typescript-eslint/no-unused-vars`): Some imported components/variables are not being used.

## Solutions

### Option 1: Disable ESLint in the Netlify Build

The current implementation in `netlify.toml` uses `--no-lint` flag to bypass ESLint checks during the build:

```toml
command = "npm cache clean --force && npm install --no-audit --no-fund --prefer-offline && npm run build -- --no-lint"
```

### Option 2: Fix the Errors

To properly fix the errors, follow these steps:

1. **Escape apostrophes**: Replace all `'` with `&apos;` in JSX text content
   - Affected files: 
     - `src/app/about/page.tsx`
     - `src/app/blog/page.tsx`
     - `src/app/docs/page.tsx`
     - `src/app/models/page.tsx`
     - `src/app/page.tsx`

2. **Remove unused variables**: 
   - Remove unused imports and variables from:
     - `src/app/page.tsx` (Server, Shield, Leaf, Zap, Brain, Clock, CheckCircle imports)
     - `src/app/about/page.tsx` (Link import)
     - `src/app/submit-job/page.tsx` (fileName, handleFileChange, handleDragOver, handleDrop variables)

### Option 3: Use ESLint Configuration

Create an `.eslintrc.json` file at the root with the following content to disable the rules:

```json
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
}
```

## Automated Fix Script

You can run the included `fix-lint-errors.js` script to automatically fix most issues:

```bash
node fix-lint-errors.js
```

This script will:
1. Fix unescaped apostrophes in all affected files
2. Run ESLint's auto-fix to resolve simpler issues

After running the script, manually check for any remaining issues. 