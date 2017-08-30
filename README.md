## debugger.html 3816 testcase

```
# Install dependencies
$ yarn
# Start dev server
$ yarn start
# Build
$ yarn build
```

* babel-polyfill `es6.promise` seems to cause some obfuscation to real causes
* Added `resolve.alias` and dynamic imports to mimic the environment where
the issue was first reproduced

Create artificial errors throughout the code, like changing variable names in 
`src/app.jsx`, to reproduce.