import Magician from '../Magician';

test('should create a hero with the Magician type', () => {
    const result = new Magician('Magician');

    expect(result).toEqual({
        name: 'Magician',
        type: 'Magician',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    });
});