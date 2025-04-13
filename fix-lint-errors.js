#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

// Files with ESLint errors
const filesToFix = [
  'src/app/about/page.tsx',
  'src/app/blog/page.tsx',
  'src/app/docs/page.tsx',
  'src/app/models/page.tsx',
  'src/app/page.tsx',
  'src/app/submit-job/page.tsx'
];

// Function to replace unescaped apostrophes with &apos;
function fixApostrophes(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = content.replace(/(\w)'(\w)/g, '$1&apos;$2')
                         .replace(/(\w)'s/g, '$1&apos;s')
                         .replace(/(\w)'re/g, '$1&apos;re')
                         .replace(/(\w)'ve/g, '$1&apos;ve')
                         .replace(/(\w)'ll/g, '$1&apos;ll')
                         .replace(/(\w)'d/g, '$1&apos;d')
                         .replace(/(\w)'t/g, '$1&apos;t');
    
    fs.writeFileSync(filePath, fixed, 'utf8');
    console.log(`Fixed apostrophes in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing apostrophes in ${filePath}:`, error);
  }
}

// Main function to fix all errors
function fixLintErrors() {
  console.log('Fixing ESLint errors...');
  
  // Fix unescaped apostrophes
  filesToFix.forEach(fixApostrophes);
  
  // Run ESLint fix command
  try {
    console.log('Running ESLint auto-fix...');
    execSync('npx eslint --fix ' + filesToFix.join(' '), { stdio: 'inherit' });
    console.log('ESLint fixes applied successfully!');
  } catch (error) {
    console.error('Error running ESLint fix:', error);
  }
}

// Run the fixer
fixLintErrors(); 