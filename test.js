import test from 'ava'
import computify from './'

test('with unit', t => {
	t.is(computify('5px*5*10'), '250px')
})

test('without unit', t => {
	t.is(computify('5*5'), 25)
})
