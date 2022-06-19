import params from '../js/params';

export default class Character {
  constructor (name, type) {
    if (name.length < 2) {
      throw new Error('min 3 string');
    }else if (name.length > 10){
      throw new Error('max 10 string');
    }else if (typeof name !== 'string') {
      throw new Error('please edit to string');
    }else {
      this.name = name;
    }
    if (type in params) {
      this.type = type;
    } else {
      throw new Error('you selected a non-existent type');
    }
    this.health = 100;
    this.level = 1;
    this.attack = params[this.type].attack;
    this.defence = params[this.type].defense;
  }

  levelUp (){
    if (this.health > 0) {
      this.level++;
      this.attack = this.attack * 1.2;
      this.defence = this.defence * 1.2;
      this.health = 100;
      return true;
    }else {
      throw new Error('no level up, Gamer is dead!');
    }
  }

  damage (points){
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}


