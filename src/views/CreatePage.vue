<template>
  <div class="container mb-3">
    <form action="">
      <div class="mb-3">
        <label for="" class="form-label">Page Title</label>
        <input bin v-model="pageTitle" type="text" class="form-control" />
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Content</label>
        <textarea
          type="text"
          rows="5"
          class="form-control"
          v-model="content"
          placeholder="type some content here..."
        >
        </textarea>
      </div>
      <div class="d-flex justify-content-between">
        <div class="mb-3 w-50 pe-4">
          <label for="" class="form-label">Link Text</label>
          <input bin v-model="link.linkText" type="text" class="form-control" />
        </div>
      </div>
      <div class="mb-3">
        <input type="checkbox" v-model="published" />
        <label for="">Published</label>
      </div>
      <div class="mb-3">
        <button
          :disabled="!isDataFullfilled"
          class="btn btn-primary"
          @click.prevent="submitForm()"
        >
          Create Page
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, inject, computed, watch } from "vue";
import { useRouter } from "vue-router";

const pageTitle = ref("");
const content = ref("");
const link = ref({ linkText: "" });
const published = ref(true);
const router = useRouter();
const bus = inject("$bus");
const pages = inject("$pages");

function submitForm() {
  if (!isDataFullfilled) {
    return alert("Please, fullfill the entire form.");
  } else {
    let newPage = {
      pageTitle: pageTitle.value,
      content: content.value,
      link: {
        text: link.value.linkText,
      },
      published: published.value,
    };

    pages.addPage(newPage);
    bus.$emit("page-created", {
      newPage,
    });
    router.push({ path: "/pages" });
  }
}

const isDataFullfilled = computed(() => {
  if (!pageTitle.value || !content.value || !link.value.linkText) {
    return false;
  } else return true;
});

watch(pageTitle, (newVal, oldVal) => {
  {
    if (link.value.linkText == oldVal) {
      link.value.linkText = newVal;
    }
  }
});
</script>

<script>
export default {
  methods: {},
};
</script>
