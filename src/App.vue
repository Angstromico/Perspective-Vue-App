<script setup lang="ts">
import 'css-doodle'
import { watch } from 'vue'
import { useVariables } from '@/hooks/useVariables'
import Input from '@/components/Input.vue'
const variables = useVariables()
const {
  message,
  states,
  colorChange,
  backgroundColor,
  resetValues,
  copy,
  countainerColor,
  box,
} = variables
const { perspective, rotateX, rotateY, rotateZ, showCopy } = states
watch(showCopy, (newShow, oldShow) => {
  if (newShow === true) setTimeout(() => (showCopy.value = false), 4500)
})
</script>

<template>
  <h2 :style="colorChange">CSS3 Perspective Playground</h2>
  <main>
    <section class="settings">
      <div class="settings-container">
        <Input
          title="Perspective"
          v-model="perspective"
          kindValue="px"
          min="0"
          max="999"
        />

        <Input
          title="Rotate X"
          v-model="rotateX"
          kindValue="deg"
          min="-180"
          max="180"
        />

        <Input
          title="Rotate Y"
          v-model="rotateY"
          kindValue="deg"
          min="-180"
          max="180"
        />

        <Input
          title="Rotate Z"
          v-model="rotateZ"
          kindValue="deg"
          min="-180"
          max="180"
        />
        <button
          type="button"
          @click.prevent="resetValues"
          :style="backgroundColor"
        >
          Reset
        </button>
        <button type="button" @click.prevent="copy" :style="backgroundColor">
          Copy
        </button>
        <h3 class="alert" v-if="showCopy" :style="colorChange">
          {{ message }}
        </h3>
      </div>
    </section>
    <section class="output">
      <div class="box-container" :style="countainerColor">
        <div class="box" :style="box"></div>
      </div>
    </section>
  </main>
  <css-doodle>
    :doodle { @grid: 1x3 / 100vmax; position: absolute; top: 0; left: 0;
    z-index: 0; } @size: 100% 150%; position: absolute; background: @m(100, (
    linear-gradient(transparent, @p( #FFFDE1@repeat(2, @p([0-9a-f])),
    #FB3569@repeat(2, @p([0-9a-f])) )) @r(0%, 100%) @r(0%, 100%) / @r(1px)
    @r(23vmin) no-repeat )); will-change: transform; animation: f 50s linear
    calc(-50s / @size() * @i()) infinite; @keyframes f { from { transform:
    translateY(-100%) } to { transform: translateY(100%) } }
  </css-doodle>
</template>
