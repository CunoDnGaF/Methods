import Zombie from '../Zombie';

test('should create a hero with the Zombie type', () => {
    const result = new Zombie('Zombie');

    expect(result).toEqual({
        name: 'Zombie',
        type: 'Zombie',
        attack: 40,
        defence: 10,
        health: 100,
        level: 1
    });
});