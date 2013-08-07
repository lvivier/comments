var domify = require('domify')
  , inherit = require('inherit')
  , template = require('./template')
  , avatar = require('default-avatar')
  , View = require('view')

module.exports = UserView

function UserView(user, comments) {
  var el = domify(template)
  View.call(this, user, el)

  this.comments = comments

  this.bind('click .twitter', 'loginTwitter')
  this.bind('click .facebook', 'loginFacebook')
  this.bind('click .logout', 'logout')
  this.bind('click .send', 'send')
  this.bind('keydown .message', 'sendKey')
}

inherit(UserView, View)

UserView.prototype.send = function () {
  var el = this.el.querySelector('.message')
  var text = el.value
  el.value = ''

  // don't send empty messages
  if (!text.length || !this.obj.id) return

  // push new comment
  this.comments.push({
    text: text
  , displayName: this.obj.displayName
  , userId: this.obj.id
  , avatar: this.avatar()
  , time: Date.now()
  })
}

UserView.prototype.sendKey = function (ev) {
  if ((ev.ctrlKey || ev.metaKey) && ev.keyCode == 13) this.send()
}

UserView.prototype.loginTwitter = function () {
  this.obj.login('twitter')
}

UserView.prototype.loginFacebook = function () {
  this.obj.login('facebook')
}

UserView.prototype.logout = function () {
  this.obj.logout()
}

UserView.prototype.avatar = function () {
  var user = this.obj
  return (user.provider == 'facebook') ?
    ('http://graph.facebook.com/'+user.id+'/picture') :
    user.profile_image_url ||
    user.avatar_url ||
    avatar
}
