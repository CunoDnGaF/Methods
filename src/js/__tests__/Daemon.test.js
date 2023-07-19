import Daemon from '../Daemon';

test('should create a hero with the Daemon type', () => {
    const result = new Daemon('Daemon');

    expect(result).toEqual({
        name: 'Daemon',
        type: 'Daemon',
        attack: 10,
        defence: 40,
        health: 100,
        level: 1
    });
});