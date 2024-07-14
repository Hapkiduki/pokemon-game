import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import { mount } from '@vue/test-utils';

describe('<PokemonPicture />', () => {
  test('should render the hidden image when ShowPokemon prop is false', () => {
    const wrapper = mount(PokemonPicture, {
      props: { pokemonId: 25, showPokemon: false },
    });
    const imageSource =
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg';

    const image = wrapper.find('img');
    expect(image.attributes('src')).toBe(imageSource);
  });
});
