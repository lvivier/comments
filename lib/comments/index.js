/**
 * Dependencies
 */

var auth = require('firebase-login-react')
  , react = require('firebase-react')
  , CommentView = require('comment-view')
  , UserView = require('user-view')
  , db = require('db')

/**
 * Booting the app
 */

module.exports = function (el, url) {
  db(url, ready)

  function ready (ref) {
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
}
