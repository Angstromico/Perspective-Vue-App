import { reactive, computed, toRefs } from 'vue'
export const useVariables = () => {
  const state = reactive({
    perspective: 100,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    showCopy: false,
    color: '#8d81f3',
    letterColor: 'white',
  })
  const message = 'CSS transform copied to clipboard!'
  const states = toRefs(state)
  const {
    perspective,
    rotateX,
    rotateY,
    rotateZ,
    showCopy,
    color,
    letterColor,
  } = states
  const colorChange = computed(() => {
    return { color: color.value }
  })
  const countainerColor = computed(() => {
    return { border: `1px solid ${color.value}` }
  })
  const backgroundColor = computed(() => {
    return { background: color.value, color: letterColor.value }
  })
  const box = computed(() => {
    return {
      transform: `perspective(${perspective.value}px) rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg) rotateZ(${rotateZ.value}deg)`,
      background: color.value,
    }
  })
  const resetValues = () => {
    perspective.value = 100
    rotateX.value = 0
    rotateY.value = 0
    rotateZ.value = 0
    color.value = '#8d81f3'
  }
  const random = (number: number) => {
    return Math.floor(Math.random() * number)
  }
  const randomColor = () => {
    const rgb1 = random(255)
    const rgb2 = random(255)
    const rgb3 = random(255)
    rgb1 + rgb2 + rgb3 > 381
      ? (letterColor.value = 'black')
      : (letterColor.value = 'white')
    color.value = 'rgb(' + rgb1 + ',' + rgb2 + ',' + rgb3 + ')'
  }
  const copy = async () => {
    const text = `transform:${box.value.transform};`
    await navigator.clipboard.writeText(text)
    showCopy.value = true
    randomColor()
  }
  return {
    message,
    states,
    colorChange,
    countainerColor,
    backgroundColor,
    box,
    resetValues,
    copy,
  }
}
