<template>
  <a
    :href="page.link.url"
    :title="`This link goes to the ${page.link.text} page`"
    class="nav-link"
    :key="index"
    aria-current="page"
    :class="activeClasses"
    >{{ page.link.text }}
  </a>
</template>

<script>
export default {
  props: ["isActive", "page"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>

<style scoped>
.emphasize {
  font-weight: bold;
  text-decoration: underline;
}
</style>
