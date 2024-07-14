import type { Pokemon } from '@pokemon/interfaces';

describe('Pokemon interface', () => {
  const pokemon: Pokemon = { id: 1, name: 'bulbasor' };

  test('should have an id property type number', () => {
    expect(pokemon.id).toEqual(expect.any(Number));
  });
  test('should have a name property type string', () => {
    expect(pokemon.name).toEqual(expect.any(String));
  });
});
