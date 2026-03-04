const isEqual = require("@10xly/strict-equals")

function hasSelfEquality(value) {
  return isEqual(value, value)
}

module.exports = hasSelfEquality