import Magician from '../js/Magician';

test('should return the created Magician', () => {
  expect(new Magician('max', 'Magician')).toEqual({
    name: 'max',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});