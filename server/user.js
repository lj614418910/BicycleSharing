const express = require("express")
const utils = require("utility")

const model = require("./model")

const Router = express.Router()
const User = model.getModel('user')
const Chat = model.getModel('bicycle')


Router.get('/lll', function (req, res) {
  setTimeout(() => {
    res.json({ code: 0, num: 111 })
  }, 1000)
})


function md5pwd(pwd) {
  //增加密码复杂度
  const salt = 'Increase_the_complexity_of_the_password_0123456789'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router
