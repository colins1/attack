import Daemon from '../js/Daemon';
import Bowerman from '../js/Bowerman';

test('name check < 2', () => {
  expect(() => {
    new Daemon('m','Daemon'); 
  }).toThrow('min 3 string');
});

test('name check > 10', () => {
  expect(() => {
    new Daemon('maxaxaxaxaxaxax','Daemon'); 
  }).toThrow('max 10 string');
});

test('name check string', () => {
  expect(() => {
    new Daemon(3234138,'Daemon'); 
  }).toThrow('please edit to string');
});

test('type check', () => {
  expect(() => {
    new Daemon('max','Daemoner'); 
  }).toThrow('you selected a non-existent type');
});

test('type check', () => {
  const heroDaemon = new Daemon('max','Daemon');
  heroDaemon.levelUp();
  expect(
    heroDaemon.level
  ).toBe(2);
});

test('type check', () => {
  const heroDaemon = new Daemon('max','Daemon');
  heroDaemon.damage(new Bowerman('max','Daemon').attack);
  expect(
    heroDaemon.health
  ).toBe(94);
});
