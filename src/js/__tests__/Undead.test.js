import Undead from '../Undead';

test('should create a hero with the Undead type', () => {
    const result = new Undead('Undead');

    expect(result).toEqual({
        name: 'Undead',
        type: 'Undead',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    });
});