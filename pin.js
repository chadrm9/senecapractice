module.exports = function math(options) {
  this.add({role:'math',cmd:'sum'}, function(msg, respond) {
    respond(null, {answer: msg.left + msg.right})
  })
  this.add({role:'math',cmd:'product'}, function(msg, respond) {
    respond(null, {answer: msg.left * msg.right})
  })
  this.wrap({role:'math'}, function(msg, respond) {
    msg.left = Number(msg.left)
    msg.right = Number(msg.right)
    this.prior(msg, respond)
  })
}
