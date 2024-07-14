<template>
  <section
    v-if="isLoading || randomPokemon.id == null"
    class="flex flex-col justify-center items-center w-screen h-screen"
  >
    <h1 class="text-3xl">Espere por favor</h1>
    <h3 class="animate-pulse">Cargando pokemones</h3>
  </section>

  <section v-else class="flex flex-col justify-center items-center w-screen h-screen">
    <h1 class="m-5">¿Quien es este Pokemon?</h1>
    <div class="h-20">
      <button
        v-if="gameStatus != GameStatus.Playing"
        @click="getNextRound(5)"
        class="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 transition-all"
      >
        Jugar de nuevo
      </button>
    </div>

    <!--Pokemon picture-->
    <PokemonPicture
      :pokemon-id="randomPokemon.id"
      :show-pokemon="gameStatus != GameStatus.Playing"
    />

    <!--Pokemon options-->
    <PokemonOption
      :options="options"
      @selected-option="checkAnswer"
      :correct-answer="randomPokemon.id"
      :block-selection="gameStatus != GameStatus.Playing"
    />
  </section>
</template>

<script setup lang="ts">
import PokemonPicture from '@/modules/pokemon/components/PokemonPicture.vue';
import PokemonOption from '../components/PokemonOption.vue';
import { usePokemonGame } from '../composables/usePokemonGame';
import { GameStatus } from '../interfaces';
const {
  randomPokemon,
  isLoading,
  gameStatus,
  pokemonsOptions: options,
  checkAnswer,
  getNextRound,
} = usePokemonGame();
</script>
