module.exports = function sum(options) {
  this.add({role:'math',cmd:'sum'}, function(msg, respond) {
    respond(null, {answer: msg.left + msg.right})
  })
  this.add({role:'math',cmd:'product'}, function(msg, respond) {
    respond(null, {answer: msg.left * msg.right})
  })
}
