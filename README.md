1. Without configuration file use 'npx webpack' but not manageable and manual.
   
2. Build the configuration file 'webpack.config.js'.

3. Write the command to run the 
   1. > webpack npx webpack --config webpack.config.js.

4. NPX : The npx command, which ships with Node 8.2/npm 5.2.0 or higher, runs the webpack binary (./node_modules/.bin/webpack) of the webpack package.

5. Adding NPM script in the webpack.config.js and then using "npm run build".

6. Loading or creating CSS support : 
   1. CSS Loader - The css-loader interprets @import and url() like import/require() and will resolve them (https://webpack.js.org/loaders/css-loader/)
   2. Style Loader - Inject CSS into the DOM. (https://webpack.js.org/loaders/style-loader/)
   3. npm install --save-dev style-loader css-loader
   
7. Output management Module https://webpack.js.org/guides/output-management/
8. HTML Webpack plugin : The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation. You can either let the plugin generate an HTML file for you, supply your own template using lodash templates, or use your own loader.

 https://webpack.js.org/plugins/html-webpack-plugin/
 By default "htmlwebpack" plugin will generate HTML file and place it in the /dist folder

 9. Cleaning up the /dist folder : https://webpack.js.org/guides/output-management/
As you might have noticed over the past guides and code example, our /dist folder has become quite cluttered. Webpack will generate the files and put them in the /dist folder for you, but it doesn't keep track of which files are actually in use by your project.

10. mode: 'development' will produce the JS bundle with unmiified code and source-maps will help in the debugging of the code.
    
11. 