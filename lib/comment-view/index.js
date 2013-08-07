var domify = require('domify')
  , inherit = require('inherit')
  , template = require('./template')
  , relative = require('relative-date')
  , View = require('view')

module.exports = CommentView

function CommentView(comment) {
  var el = domify(template)
  View.call(this, comment, el)

  // ui binds
  this.bind('click .delete', 'remove')
}

inherit(CommentView, View)

/**
 * Removes comment from view and db
 */
CommentView.prototype.remove = function () {
  this.el.parentNode.removeChild(this.el)
  this.obj.ref().remove()
}

/**
 * Returns time in human-friendly format
 * @return {string}
 */
CommentView.prototype.time = function () {
  var t = relative(this.obj.time())
  return t ? (t + ' ago') : 'just now'
}

/**
 * Returns name of model ref
 * @return {string}
 */
CommentView.prototype.name = function () {
  return this.obj.ref().name()
}

/**
 * Is this comment mine?
 * @return {boolean}
 */
CommentView.prototype.mine = function () {
  return true // TODO this.obj.id == user.id
}
