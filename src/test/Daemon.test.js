import Daemon from '../js/Daemon';

test('should return the created Daemon', () => {
  expect(new Daemon('max', 'Daemon')).toEqual({
    name: 'max',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });
});