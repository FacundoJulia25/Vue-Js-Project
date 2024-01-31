<template>
  <div>
    <Navbar :pages="publishedPages" :active-page="activePage" />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  computed: {
    publishedPages() {
      return this.pages.filter((page) => page.published);
    },
  },
  created() {
    this.getPages();
    this.$bus.$on("navbarLinkActived", (index) => {
      this.activePage = index;
    });
  },
  components: {
    Navbar,
    PageViewer,
    CreatePage,
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
    navbarLinkActived() {},
  },
};
</script>
