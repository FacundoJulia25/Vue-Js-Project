<template>
  <div class="container">
    <h1 class="emphasize">{{ page.pageTitle }}</h1>
    <p>{{ page.content }}</p>
  </div>
</template>
<script>
export default {
  props: ["index"],
  data() {
    return {
      page: {},
    };
  },
  created() {
    this.page = this.$pages.getSinglePage(this.index);
  },
  watch: {
    index(newVal, oldVal) {
      this.page = this.$pages.getSinglePage(newVal);
    },
  },
};
</script>
