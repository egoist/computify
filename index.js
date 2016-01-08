module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected str to be a string!')
	}
	// if you can control what will be passed to `eval`
	// it won't be as evil as you have heard
	var evalIsNotEvil = eval
	var re = /[a-zA-Z]+/g
	var fineUnits = str.match(re)
	var unit = fineUnits && fineUnits[0]
	var stripedStr = str.replace(re, '')
	if (unit) {
		return evalIsNotEvil(stripedStr) + unit
	}
	return evalIsNotEvil(str)
}
