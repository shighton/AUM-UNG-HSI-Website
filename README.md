# Updating the website

In order to update and make changes to existing website you must be added as a collabrator on github. Additionally, Node.js(latest version) must be on installed on the local computer.

## Setup

1. Once Node.js is installed, clone the project (run on your computer - `git clone https://github.com/Deepp0925/project_website.git`)
2. At the root of the project, run `npm install` - this will read the `package.json` file and download all the dependencies.
3. Now run `npm start` and your default browser will open with live-reload

## Update the site

1. Once all changes are made locally, change the version number in the file `package.json` accordingly. For example, version number are written in the format of `x.y.z` where `x` is major updates, `y` is minor updates and `z` is dedicated for patches and bug fixes.
2. push the changes to github - `master` branch. Run in the terminal
   - `git add .`
   - `git commit -m "The message for the commit"`
   - `git push origin master`
3. Finally, run on the local computer `npm run deploy` to publish the changes on the website. **_Note_**: it might take a few minutes for changes to reflect.
