<template>
  <div>
    <p>
      {{ counter }}
    </p>
    <button @click.prevent="click">click</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
// define data

const counter = ref(0);

//define methods

const click = () => counter.value++;
</script>

<!-- 
<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    click() {
      this.counter++;
    },
  },
};
</script> -->
