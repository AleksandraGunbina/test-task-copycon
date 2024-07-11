# Prepare
1. If you don't have the Node.js installed, do it.
2. Copy programm
- If you use a git:
-   clone repository by using "git clone" command in terminal.
-   link to repository: https://github.com/AleksandraGunbina/test-task-copycon.git
- Else:
-   copy files to your catalog
# Start programm
Go to terminal:
- Go to the project directory: .../test-task-copycon
- Install dependencies
```bash
npm i
```
- Start programm with following command:
```bash
npm run dev
```
- Open you brouser
- The application is deployed on the port http://localhost:5173/


# React + TypeScript + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
### Expanding the ESLint configuration
If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
- Configure the top-level `parserOptions` property like this:
```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```
- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
