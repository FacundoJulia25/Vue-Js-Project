<template>
  <div class="container mb-3">
    <h4>Edit {{ page.pageTitle }}</h4>
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label">Page Title</label>
        <input v-model="page.pageTitle" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Content</label>
        <textarea
          type="text"
          rows="5"
          class="form-control"
          v-model="page.content"
          placeholder="type some content here..."
        >
        </textarea>
      </div>
      <div class="d-flex justify-content-between">
        <div class="mb-3 w-50 pe-4">
          <label for="" class="form-label">Link Text</label>
          <input
            bin
            v-model="page.link.text"
            type="text"
            class="form-control"
          />
        </div>
      </div>
      <div class="mb-3">
        <input type="checkbox" v-model="page.published" />
        <label for="">Published</label>
      </div>

      <div class="mb-3">
        <button class="btn btn-primary me-2" @click.prevent="submit">
          Edit
        </button>
        <button class="btn btn-primary me-2" @click.prevent="goToPagesList">
          Cancel
        </button>
        <button class="btn btn-danger me-4" @click.prevent="deletePage">
          Delete
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject, watch, ref } from "vue";
const page = ref({});
const pages = inject("$pages");
const router = useRouter();
const { index } = defineProps(["index"]);
const bus = inject("$bus");
page.value = pages.getSinglePage(index);
console.log(page);

function submit() {
  pages.editPage(index, page);
  bus.$emit("page-updated", {
    index,
    page,
  });
  goToPagesList();
}

function goToPagesList() {
  router.push({
    path: "/pages",
  });
}

function deletePage() {
  pages.removePage(index);
  bus.$emit("page-deleted", {
    index,
  });
  goToPagesList();
}
watch(page, (newPage, oldPage) => {
  console.log(newPage);
  console.log(page.link.text);
});
</script>
