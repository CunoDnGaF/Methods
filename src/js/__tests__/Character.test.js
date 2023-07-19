import Character from '../Character';

test('should create a hero named "string"', () => {
    const result = new Character('string', 'Bowman', 25, 25);

    expect(result).toEqual({
        name: 'string',
        type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    });
});

test('should throw the error "Передано некорректное значение имени"', () => {

    expect(() => new Character(11, 'Bowman', 25, 25)).toThrow('Передано некорректное значение имени');
});

test('should throw the error "Передано некорректное значение имени"', () => {

    expect(() => new Character(undefined, 'Bowman', 25, 25)).toThrow('Передано некорректное значение имени');
});

test('should throw the error "Имя слишком короткое"', () => {

    expect(() => new Character('B', 'Bowman', 25, 25)).toThrow('Имя слишком короткое');
});

test('should throw the error "Имя слишком длинное"', () => {

    expect(() => new Character('Bowmanmanman', 'Bowman', 25, 25)).toThrow('Имя слишком длинное');
});

test('should throw the error "Передан несуществующий класс"', () => {

    expect(() => new Character('Thief', 'Thief', 25, 25)).toThrow('Передан несуществующий класс');
});

test('should throw the error "Нельзя повысить левел умершего"', () => {

    expect(() => {
        const bowman = new Character('Bowman', 'Bowman', 25, 25);
        
        bowman.health = 0;
        bowman.levelUp();
    }).toThrow('Нельзя повысить левел умершего');
});

test('should level up the hero', () => {
    const result = new Character('Bowman', 'Bowman', 25, 25);
    result.health = 1;
    result.levelUp();

    expect(result).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        attack: 30,
        defence: 30,
        health: 100,
        level: 2
    });
});

test('should damage the hero', () => {
    const result = new Character('Bowman', 'Bowman', 25, 25);
    result.damage(50);

    expect(result).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 62.5,
        level: 1
    });
});

test('the heros health should not fall below 0', () => {
    const result = new Character('Bowman', 'Bowman', 25, 25);
    result.health = 1;
    result.damage(50);

    expect(result).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 0,
        level: 1
    });
});