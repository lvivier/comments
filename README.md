# comments

Simple comments powered by [Firebase](http://firebase.com) with Facebook/Twitter login. Some assembly required.

![realtime comments](https://i.cloudup.com/tE7SeHpJPb.png)

## Installation

TODO distribute compiled js/css

With [component](http://component.io/):

```
$ component install lvivier/comments
```

## Usage

```js

var el  = document.getElementById('comments')
  , url = 'https://[your-firebase].firebaseio.com/'

require('comments')(el, url)
```

### Firebase security rules

- [rules.json](https://github.com/lvivier/comments/blob/master/rules.json)

## API

TODO
