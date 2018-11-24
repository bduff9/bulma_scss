# To Convert

## Prerequisites
- Ruby
- sass gem

## Steps
- Clone bulma
- Run command: `sass-convert -F sass -T scss -R bulma bulma_converted`
- Copy all but .git, .github, bulma.sass, css/, sass/ and docs/ into bulma_scss
- Copy bulma.scss, docs/ and sass into bulma_scss
- Replace sass paths with scss
- Remove .sass file extensions
- Compile css and maps with `npm i && npm run build`
- Change version in package.json
- Commit and deploy to npm with `npm publish`
- Update package.js and deploy to atmosphere with `meteor publish`
