Package.describe({
  name: 'bduff9:bulma',
  version: '0.7.2',
  // Brief, one-line summary of the package.
  summary: 'Bulma css (v0.7.2), files are in .scss format for use in Meteor projects',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bduff9/bulma_scss',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

function getFilesFromFolder (packageName, folder) {
  // local imports
  var _ = Npm.require('underscore');
  var fs = Npm.require('fs');
  var path = Npm.require('path');
  var result;
  // helper function, walks recursively inside nested folders and return absolute filenames
  function walk(folder) {
    var filenames = [];
    // get relative filenames from folder
    var folderContent = fs.readdirSync(folder);
    // iterate over the folder content to handle nested folders
    _.each(folderContent, function(filename) {
      // build absolute filename
      var absoluteFilename = folder + path.sep + filename;
      // get file stats
      var stat = fs.statSync(absoluteFilename);
      if (stat.isDirectory()) {
        // directory case => add filenames fetched from recursive call
        if (absoluteFilename.indexOf('css') > -1) filenames = filenames.concat(walk(absoluteFilename));
      } else  {
        // file case => simply add it
        if (filename.endsWith('css')) filenames.push(absoluteFilename);
      }
    });
    return filenames;
  }
  result = walk(folder);
  return result;
}

Package.onUse(function (api) {
  var files = getFilesFromFolder('', '.');
//console.log('files', files[1]);
  api.use('fourseven:scss@4.0.0');
  api.addFiles(files, 'client', { isImport: true });
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bduff9:bulma');
});
