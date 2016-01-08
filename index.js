module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected str to be a string!')
	}
	// if you can control what will be passed to `eval`
	// it won't be as evil as you have heard
	var evalIsNotEvil = eval
	var unitRe = /[a-zA-Z]+/
	var stripRe = /[^\d\+\-\*\/\%]/g
	var fineUnits = str.match(unitRe)
	var unit = fineUnits && fineUnits[0]
	var stripedStr = str.replace(stripRe, '')
	if (unit) {
		return evalIsNotEvil(stripedStr) + unit
	}
	return evalIsNotEvil(str)
}
