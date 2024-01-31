<template>
  <div>
    <Navbar
      :pages="pages"
      :active-page="activePage"
      :click-nav-link="(index) => (activePage = index)"
    />
    <PageViewer :page="pages[activePage]"></PageViewer>
    <CreatePage :page-created="pageCreated" />
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
  created() {
    this.getPages();
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
  },
};
</script>
