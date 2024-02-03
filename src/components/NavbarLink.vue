<template>
  <li>
    <router-link
      :to="`/${index}`"
      :title="`This link goes to the ${page.link.text} page`"
      class="nav-link"
      aria-current="page"
      active-class="active emphasize"
      >{{ page.link.text }}
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["index", "page"],
};
</script>
