export default class Character {
  constructor(name, type) {
    const typeArr = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie',
    ];

    if (name.length < 2 || name.length > 10 || typeof name !== 'string') {
      throw new Error('Ошибка! Некорректное имя персонажа');
    }

    if (!typeArr.includes(type)) {
      throw new Error('Ошибка! Задан несуществующий класс персонажа');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
