import Bowman from '../Bowman';

test('should create a hero with the Bowmen type', () => {
    const result = new Bowman('Bowman');

    expect(result).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        attack: 25,
        defence: 25,
        health: 100,
        level: 1
    });
});