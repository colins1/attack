import Bowerman from '../js/Bowerman';
const GameBowerman = new Bowerman('max','Bowman')
test('should return the created Bowerman', () => {
  expect(GameBowerman).toEqual({
    name: 'max',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});