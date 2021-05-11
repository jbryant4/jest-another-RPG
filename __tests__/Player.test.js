const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

test('create a player object', () => {
    const player = new Player('Shaft');

    expect(player.name).toBe('Shaft')
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));

    // inventory test
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
    
});

test('gets player stats as an object', () => {
    const player = new Player('Shaft');

    expect(player.getStats()).toHaveProperty('potions');
    expect(player.getStats()).toHaveProperty('health');
    expect(player.getStats()).toHaveProperty('strength');
    expect(player.getStats()).toHaveProperty('agility');
});

test('gets inventory from player or returns flase', () => {
    const player = new Player('Shaft');

    expect(player.getInventory()).toEqual(expect.any(Array));

    player.inventory = [];

    expect(player.getInventory()).toEqual(false);
});