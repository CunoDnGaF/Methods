import createHeroes from '../app';

const correctTypes = [
    ['Bowman', 25, 25],
    ['Swordsman', 40, 10],
    ['Magician', 10, 40],
    ['Daemon', 10, 40],
    ['Undead', 25, 25],
    ['Zombie', 40, 10]
];

test('should create heroes with correct types', () => {
    const result = createHeroes();

    const correctHeroes = correctTypes.map(([type, attack, defence]) => ({
        name: type,
        type: type,
        attack: attack,
        defence: defence,
        health: 100,
        level: 1
    }));

    expect(result).toEqual(correctHeroes);
});