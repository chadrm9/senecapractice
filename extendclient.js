//var seneca = require('seneca')()

module.exports = function math(options) {
  this.add({role:'math',cmd:'sum'}, function(msg, respond) {
    respond(null, {answer: msg.left + msg.right})
  })
  this.add({role:'math',cmd:'sum',integer:'true'}, function(msg, respond) {
    respond(null, {answer: Math.floor(msg.left) + Math.floor(msg.right)})
  })
  this.add({role:'math',cmd:'product'}, function(msg, respond) {
    respond(null, {answer: msg.left * msg.right})
  })
}
//seneca.use(math)
//seneca.act( 'role:math,cmd:sum,integer:true', console.log )
//seneca.act( 'role.math,cmd:product', console.log )
