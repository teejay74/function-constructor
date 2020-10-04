import { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon }  from '../character';

test('create Character', () => {
    const received = new Character('Teejay', 'Bowman');
    const expected = {
        name: 'Teejay',
        type: 'Bowman',
        health: 100,
        level: 1,

        attack: 0,
        defence: 0
    }


expect(received).toEqual(expected);
});

test('create Character with error', () => {
    
    function createCharacter(name, type) {
        let character = new Character(name, type);
        return character;
    }

    expect(() => {
        createCharacter(1, 45678);
      }).toThrow();

    
});

test('levelUp', () => {
    let character = new Bowman('Teejay', 'Bowman');
    const received = character.levelUp();
    const expected = {
        name: 'Teejay',
        type: 'Bowman',
        health: 100,
        level: 2,

        attack: 30,
        defence: 30
    }

    expect(received).toEqual(expected);
});

test('damage', () => {
    let character = new Bowman('Teejay', 'Bowman');
    const received = character.damage(25);
    const expected = {
        name: 'Teejay',
        type: 'Bowman',
        health: 81.25,
        level: 1,

        attack: 25,
        defence: 25
    }

    expect(received).toEqual(expected);
});

test('create Swordsman', () => {
    const received = new Swordsman('Teejay', 'Swordsman');
    const expected = {
        name: 'Teejay',
        type: 'Swordsman',
        health: 100,
        level: 1,

        attack: 40,
        defence: 10
    }


expect(received).toEqual(expected);
});

test('create Magician', () => {
    const received = new Magician('Teejay', 'Magician');
    const expected = {
        name: 'Teejay',
        type: 'Magician',
        health: 100,
        level: 1,

        attack: 10,
        defence: 40
    }

expect(received).toEqual(expected);
});

test('create Undead', () => {
    const received = new Undead('Teejay', 'Undead');
    const expected = {
        name: 'Teejay',
        type: 'Undead',
        health: 100,
        level: 1,

        attack: 25,
        defence: 25
    }


expect(received).toEqual(expected);
});

test('create Zombie', () => {
    const received = new Zombie('Teejay', 'Zombie');
    const expected = {
        name: 'Teejay',
        type: 'Zombie',
        health: 100,
        level: 1,

        attack: 40,
        defence: 10
    }


expect(received).toEqual(expected);
});

test('create Daemon', () => {
    const received = new Daemon('Teejay', 'Daemon');
    const expected = {
        name: 'Teejay',
        type: 'Daemon',
        health: 100,
        level: 1,

        attack: 10,
        defence: 40
    }


expect(received).toEqual(expected);
});

test('create Character with error type', () => {
    
    function createCharacter(name, type) {
        let character = new Character(name, type);
        return character;
    }

    expect(() => {
        createCharacter('Teejay', 45678);
      }).toThrow();

    
});

test('create levelUp with error', () => {
    
    function createCharacter(name, type) {
        let character = new Character(name, type);
        character.health = 0;
        return character;
    }

    expect(() => {
        createCharacter('Teejay', 'Bowman').levelUp();
      }).toThrow();

    
});