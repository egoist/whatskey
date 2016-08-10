import test from 'ava'
import whatskey from './'

test('main', t => {
  t.is(whatskey('⌥'), 'Option')
})
