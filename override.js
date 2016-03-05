module.exports = function math(options) {
  this.add('role:math,cmd:sum', function(msg, respond) {
    respond(null, {answer: msg.left + msg.right})
  })
  this.add('role:math,cmd:sum', function(msg, respond) {
    if (!Number.isFinite(msg.left) || !Number.isFinite(msg.right))
      return respond(new Error('Expected left and right to be numbers.'))
    this.prior({
      role: 'math',
      cmd: 'sum',
      left: msg.left,
      right: msg.right
    }, function(err, result) {
      if (err) return respond (err)
      respond(null, {answer: msg.left + msg.right})
    })
  })
  this.add('role:math,cmd:sum,integer:true', function(msg, respond) {
    respond(null, {answer: Math.floor(msg.left) + Math.floor(msg.right)})
  })
}
