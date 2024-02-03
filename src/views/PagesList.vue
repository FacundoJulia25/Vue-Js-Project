<template>
  <div>
    <h4>Pages</h4>
    <div class="text-end">
      <router-link to="/pages/create" class="btn btn-primary btn-sm">
        New Page
      </router-link>
    </div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Title</th>
          <th>Link Text</th>
          <th>Is Published</th>
        </tr>
      </thead>
      <tbody>
        <tr
          @click="goToPage(index)"
          v-for="(page, index) in $pages.getAllPages()"
          :key="index"
        >
          <td>{{ page.pageTitle }}</td>
          <td>{{ page.link.text }}</td>
          <td>{{ page.published ? "yes" : "no" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { useRouter } from "vue-router";
// define data
const router = useRouter();

const goToPage = (index) => {
  router.push({ path: `/pages/${index}/edit` });
};

const $pages = inject("$pages");
//define methods
</script>

<style scoped>
.table tr:hover {
  cursor: pointer;
}
</style>

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
