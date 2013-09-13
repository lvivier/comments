var fb = require('firebase')

module.exports = db

var base = null

function db (url, cb) {
  fb(function () {
    //expose constructors
    db.Firebase = fb.Firebase
    db.FirebaseSimpleLogin = fb.FirebaseSimpleLogin

    base = base || new fb.Firebase(db.refString(url))
    cb(base)
  })
}

db.refString = function (url) {
  var lo = window.location
  return url + (lo.host + lo.pathname).replace(/[.#$\[\]\/]/g, '-')
}
