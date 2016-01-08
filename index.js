module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected str to be a string!')
	}
	// if you can control what will be passed to `eval`
	// it won't be as evil as you have heard
	var evalIsNotEvil = eval
	var unitRe = /[a-zA-Z]+/
	var stripRe = /[^\d\+\-\*\/\%\.]/g
	var findUnits = str.match(unitRe)
	var unit = findUnits && findUnits[0]
	if (unit) {
		var stripedStr = str.replace(stripRe, '')
		return evalIsNotEvil(stripedStr) + unit
	}
	return evalIsNotEvil(str)
}
