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
   
7. 