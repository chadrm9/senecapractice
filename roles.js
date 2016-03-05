module.exports = function math(options) {
  this.add({role:'math',cmd:'sum'}, function(msg, respond) {
    respond(null, {answer: msg.left + msg.right})
  })
  this.add({role:'math',cmd:'product'}, function(msg, respond) {
    respond(null, {answer: msg.left * msg.right})
  })
}
