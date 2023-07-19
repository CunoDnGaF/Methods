import Swordsman from '../Swordsman';

test('should create a hero with the Swordsman type', () => {
    const result = new Swordsman('Swordsman');

    expect(result).toEqual({
        name: 'Swordsman',
        type: 'Swordsman',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    });
});