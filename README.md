# React + TypeScript + Vite
This was an already existing readme that i took over

To get started with Vite you will have to install npm and i think Vite? idk look it up.
after everything is installed you can navigate to the directory that you want your app in and
enter this into the bash terminal. to run the project afterwords i think you only need the last line

```bash
npm create vite@latest
npm install
npm run dev
```
After you get the app working i would create the gh repo. It makes it a lot easier creating the
gh repo with the gh_cli when you already have the project created rather than creating the repo 
and uploading your project to it afterwards.

## Quality of life

### SASS
install sass and make your life easier

```bash
npm i sass
```

## Testing
if you want to do testing then you will also want to use npm to install jest
```bash
npm install --save-dev jest
```
you will also need to configure it for typescript 
```bash
npm i -D jest typescript
npm i -D ts-jest @types/jest
npx ts-jest config:init 
```
When you have it all set up you can run
```bash
npm test
```

## TS compiler
i added these settings to the compiler from recommendation of a youtube video

```typescript
  "compilerOptions": {
    "module": "commonjs", //defines how modules will be resolved
    "outDir": "dist", // put code in a different dist directory
    "strict": true, //strict type check enabled
    "target": "es2016" //copiler ability to es2016 and beyond
  },
```
