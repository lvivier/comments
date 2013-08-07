var fb = require('firebase')

module.exports = db

var base = null

function db (cb) {
  fb(function () {
    //expose constructors
    db.Firebase = fb.Firebase
    db.FirebaseSimpleLogin = fb.FirebaseSimpleLogin

    base = base || new fb.Firebase(db.root())
    cb(base)
  })
}

db.root = function () {
  var lo = window.location
  return 'https://test-lvivier.firebaseio.com/' +
    (lo.host + lo.pathname).replace(/[.#$\[\]\/]/g, '-')
}
