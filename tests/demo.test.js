import { Selector } from 'testcafe'

fixture('Demo Test').page('http://localhost:5000/')

test('There is a root element', async (t) => {
  const hero = Selector('#root')
  await t.debug()
  await t.expect(hero.exists).ok()
})
