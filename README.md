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
   
7. Using resource/asset to load the images and Fonts, for this there is no package to be loaded.

8. Loading Data like JSON files by default will work but CSVs , TSVs and XML file have to use appropriate loaders for each of these files like csv-loader, tsv-loader and xml-loader.
   > npm install --save-dev csv-loader xml-loader 

9.  Then add some data files to the project like data.json, data.csv, data.tsv, data.xml

10. 