# Sunnysideup - Browser based Weather App - WIP

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.1.

---

## 1. Start the application locally

You will need 
  - either [Node.js](https://nodejs.org/en/download) or [pnpm standalone](https://pnpm.io/installation),
  - a [current open-weather API-Key](https://openweathermap.org/api)
  - and a Web Browser

---

### 1.1.1 Install dependecies using pnpm standalone

You have *pnpm* installed on your computer, at *root* level of the project, first run:

```bash
pnpm i
```

This will install all dependencies listed in the *package.json*.
Note that the projects *pnpm-lock.yaml* was generated with *pnpm v10*.

---

If you run an older or newer version either discard the *pnpm-lock.yaml* and run:

```bash
pnpm i
```
AND remove the *pnpm: 10* from the *engine* array of the *package.json*

OR run:

```bash
npx pnpm@10 i
```

---

### 1.1.2 Install dependencies using npm via NodeJS

Discard the *pnpm-lock.yaml*, remove *pnpm* from the *engine* array, delete the *pre-install* script of the *package.jon* and run:

```bash
npm i
```

---

### 1.2 Sign up for an open-weather API-Key

Place your API-Key inside the src/environments/environment.ts

---

### 1.3 Start Server

After the *node_modules* were installed and you placed your API-Key inside the environment,

start the server by running:

```bash
pnpm dev
```

OR if you use npm and NodeJS, by running:

```bash
npm run dev
```

(see all availabe scripts in *package.json*)

---

### 2. Visit the application in the browser

Once the server is running, open your browser and navigate to `http://localhost:port-displayed-in-terminal`. 
The application will automatically reload whenever you modify any of the source files.

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
