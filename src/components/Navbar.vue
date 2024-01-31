<template>
  <nav
    id="navbar"
    class="navbar navbar-expand-lg"
    :class="`bg-${theme} navbar-${theme}`"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <NavbarLink
          v-for="(page, index) in pages"
          class="nav-item"
          :page="page"
          :index="index"
          :is-active="activePage == index"
          :key="index"
        ></NavbarLink>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          toggle navbar
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  data() {
    return {
      theme: "light",
    };
  },
  created() {
    this.getStorageTheme();
  },
  props: ["pages", "activePage"],
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme == "light") {
        theme = "dark";
      }
      this.theme = theme;
      this.setStorageTheme();
    },
    setStorageTheme() {
      localStorage.setItem("theme", this.theme);
    },
    getStorageTheme() {
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
  components: {
    NavbarLink,
  },
};
</script>
