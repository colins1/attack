import Swordsman from '../js/Swordsman';

test('should return the created Swordsman', () => {
  expect(new Swordsman('max', 'Swordsman')).toEqual({
    name: 'max',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});