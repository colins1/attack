import Undead from '../js/Undead';

test('should return the created Undead', () => {
  expect(new Undead('max', 'Undead')).toEqual({
    name: 'max',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });
});