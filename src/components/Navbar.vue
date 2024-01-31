<template>
  <nav
    id="navbar"
    class="navbar navbar-expand-lg"
    :class="`bg-${theme} navbar-${theme}`"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li
          v-for="(page, index) in publishedPages"
          class="nav-link"
          :key="index"
        >
          <NavbarLink
            :page="page"
            :is-active="activePage == index"
            @click.prevent="clickNavLink(index)"
            :key="index"
          ></NavbarLink>
        </li>
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
  computed: {
    publishedPages() {
      return this.pages.filter((page) => page.published);
    },
  },

  props: ["pages", "activePage", "clickNavLink"],
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
