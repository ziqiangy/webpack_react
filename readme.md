```shell
cd Desktop
mkdir react-webpack
cd react-webpack
code .

#init and install webpack
yarn init -y
yarn add webpack webpack-cli webpack-dev-server -D

touch webpack.config.js

```

in webpack.config.js

```js
const path = require('path')

module.exports = {
    entry:{
        app:path.join(__dirname, './src/index.js')
    },
    output:{
        filename: 'boundle.js',
        path: path.join(__dirname, 'dist')
    }
}
```

create src/index.html, src/index.js

in index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

in src/index.js

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'

ReactDOM.render(<App />, document.getElementById('root'))
```

`yarn add react react-dom -D`



create src/app.js

```javascript
import React from 'react'

export default class App extends React.Component {
    render(){
        return(
            <div>
            <h1>Hello React!!</h1>
        </div>
        )
        
    }
}

```

add scripts to the package.json

the package.json looks like this

```json
{
  "name": "react-webpack",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "build": "webpack"
  },
  "devDependencies": {
    "webpack": "^5.9.0",
    "webpack-cli": "^4.2.0",
    "webpack-dev-server": "^3.11.0"
  }
}
```

run `yarn build` throw error, because no loader installed

install loader

```shell
yarn add @babel/core @babel/preset-env @babel/preset-react -D
```

in webpack.config.js add

```javascript
module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            },
        ]
    }
```

create src/.babelrc

```.babelrc
{
    "presets":["@babel/preset-env","@babel/preset-react"]
}
```

`yarn add babel-loader -D`

### we got everything we need to run npm run build

### should work

to exclude node_modules

```javascript
module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: path.join(__dirname, 'node_modules'),
                use: ['babel-loader']
            },
        ]
    }
```

```javascript
mode: 'development',
```

faster!

we also want to boundle index.html

`yarn add html-webpack-plugin`

```javascript
const HtmlPlugin = require('html-webpack-plugin')
```

```javascript
plugin: [
        new HtmlPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')
        })
    ]
```



