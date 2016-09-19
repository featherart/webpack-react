# Webpack React React-Router

An experimentation repo for creating a prototype whose foundation is a react-based technology stack. 

To get started, run the following commands : 

> `npm i && npm run dev `

This will install the necessary node packages and then run the dev server. Once the
server is up and running (you should see the message 'webpack: bundle is now VALID'), point your web browser to : 
> `http://localhost:8080`

The repo should simulate a fully working app that employs the following features:

* A dev environment using [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) that supports hot module reloading with both css and js linting on the fly.
* The ability to run a separate web-dev-server instance that can autorun tests in a separate browser
* Prod deployment solution that can run code isomorphically (JS code runs on both client and server) so that a page can be pre-rendered from any entry point.

### Things that need to be investigated

Redux(http://redux.js.org/) : We should definitely be using something that employs unidirectional data flow.
Data access: Continue to leverage Rails, et al? TBD.

## Packages Used
The stack is composed of the following packages :

* [React](https://github.com/petehunt/react-howto)
    * Component-based rendering of *UI*
* [React-Router](https://github.com/ReactTraining/react-router)
    * A recreation of the _Ember router_ 
* [Express JS](http://expressjs.com) 
    * Popular http server for Node. This will allow us to create isomorphic code that can run on both the server and the client.
* [WebPack](https://webpack.github.io)
    * A powerful module bundler that replaces imperative or stream-based task runners like grunt or gulp.
    * Webpack employs the use of specialized loaders that can transpile *anything* in your project :
        * For _Javascript_
            * `eslint` for javascript linting
            * [babel](http://babeljs.io) for ES6/ES7 support
        * For _CSS_
            * [post-css](https://github.com/postcss/postcss) for powerful CSS transpilation tasks.
            * [stylelint](https://github.com/stylelint/stylelint) for CSS linting
            * [url-loader](https://github.com/webpack/url-loader) allows on the fly conversion of static assets to inline base64 data-urls depending on file limit.
        * [Mocha](https://mochajs.org) for unit testing
        * A number of other useful plugins
            * [HtmlWebpackPlugin](https://github.com/ampedandwired/html-webpack-plugin) - create the _index.html_ file on the fly and inject references to your assets using any naming convention (filename plus hashname plus extension).
