<template>
  <li>
    <a
      :href="page.link.url"
      :title="`This link goes to the ${page.link.text} page`"
      class="nav-link"
      aria-current="page"
      :class="activeClasses"
      @click.prevent="$bus.$emit('navbarLinkActived', index)"
      >{{ page.link.text }}
    </a>
  </li>
</template>

<script>
export default {
  props: ["isActive", "index", "page"],
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
