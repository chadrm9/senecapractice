module.exports = function math(options) {
  this.add({role:'math',cmd:'sum'}, function(msg, respond) {
    var operation = this.make$('operation')
    operation.cmd = 'sum'
    operation.left = msg.left
    operation.right = msg.right
    operation.save$(function(err, operation) {
      if (err) return respond(err)
      return respond(null, {answer: msg.left + msg.right})
    })
  })
  this.add({role:'math',cmd:'product'}, function(msg, respond) {
    var operation = this.make$('operation')
    operation.cmd = 'product'
    operation.left = msg.left
    operation.right = msg.right
    operation.save$(function(err, operation) {
      if (err) return respond(err)
      return respond(null, {answer: msg.left * msg.right})
    })
  })
  this.add({role:'math',cmd:'operation-history'}, function(msg,respond) {
    var operation = this.make$('operation')
    operation.list$({}, function(err, list) {
      if (err) return respond(err)
      return respond(null, {answer: list})
    })
  })
  this.wrap({role:'math'}, function(msg, respond) {
    msg.left = Number(msg.left)
    msg.right = Number(msg.right)
    this.prior(msg, respond)
  })
}
