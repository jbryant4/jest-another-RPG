
const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

test('create a player object', () => {
    const player = new Player('Shaft')

    expect(player.name).toBe('Shaft')
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    // inventory test
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
    
});