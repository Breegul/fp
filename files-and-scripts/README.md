# Files & Scripts

## Imports

- Use `require` to include functions/data from another file
- Use `module.exports` to allow other files to import specific functions/data
- **Destructure** objects to pick out individual pieces, so you don't need functionFile.foo


## Scripts


## NPM

- `npm init -y` initiates npm pkg (creates package.json), -y auto answers questions.
- `npm install [package]` installs the package you need
- If you delete node_modules run `npm install` and it'll re-dl the things you had. (even if package.json is also gone?)
- `npm uninstall [package]`
- install automatically makes the package a dependency, there are also dev dependencies `npm install -D [pkg]` if your code doesn't require the pkg to run but does need it during development. 

(what is jest)