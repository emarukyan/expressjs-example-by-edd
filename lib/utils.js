'use strict'

function isValidDate (str) {
  var dateReg = /^\d{2}[./-]\d{2}[./-]\d{4}$/
  var dateReg1 = /^\d{4}[./-]\d{2}[./-]\d{2}$/
  if (str && (str.match(dateReg) || str.match(dateReg1))) {
    return true
  } else {
    return false
  }
}

function validateUrl (url) {
  var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  return regexp.test(url)
}

function validateEmail (email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
  return re.test(email)
}

module.exports = {
  validateEmail,
  validateUrl,
  isValidDate
}
