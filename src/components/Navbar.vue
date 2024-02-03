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
          v-for="(page, index) in publishedPages"
          class="nav-item"
          :page="page"
          :index="index"
          :key="index"
        ></NavbarLink>
        <li>
          <router-link
            active-class="active"
            to="/pages"
            class="nav-link"
            aria-current="page"
            >Pages
          </router-link>
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
  inject: ["$pages", "$bus"],
  data() {
    return {
      theme: "light",
      pages: {},
    };
  },
  created() {
    this.getStorageTheme();
    this.pages = this.$pages.getAllPages();
    this.$bus.$on("page-updated", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
    this.$bus.$on("page-created", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
  },
  computed: {
    publishedPages() {
      return this.pages.filter((f) => f.published);
    },
  },
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
