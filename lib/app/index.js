/**
 * Dependencies
 */

var react = require('firebase-react')
var auth = require('firebase-login-react')

var Comments = require('comments')
var UserView = require('user-view')
var CommentView = require('comment-view')

/**
 * Booting the app
 */

var db = require('db')
db(ready)

function ready (ref) {
  var el = document.querySelector('#comments')

  // boot up user
  var user = auth(db.FirebaseSimpleLogin, ref)
  // TODO temporary until computed props
  user.on('login', function () {
    user.emit('change avatar', user.avatar)
    user.emit('change', 'avatar', user.avatar)
  })

  // boot up comments
  var comments = ref.child('comments')

  var view = new UserView(user, comments)
  el.appendChild(view.el)

  // comments model <=> comment view
  var listEl = el.querySelector('.comments-list')

  comments.on('child_added', function (comment) {
    var ref = react(comment.ref())
    var view = new CommentView(ref, user)
    listEl.insertBefore(view.el, listEl.firstChild)
  })
  comments.on('child_removed', function (comment) {
    // TODO wrong. store refs to views and nuke them with view.remove()
    var el = listEl.querySelector('#'+comment.name())
    el.parentNode.removeChild(el)
  })
}
