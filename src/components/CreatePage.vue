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
        <div class="mb-3 w-50">
          <label for="published" class="form-label">Link Url</label>
          <input
            bin
            v-model="link.linkUrl"
            name="published"
            type="text"
            class="form-control"
          />
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

<script>
export default {
  computed: {
    isDataFullfilled() {
      if (
        !this.pageTitle ||
        !this.content ||
        !this.link.linkText ||
        !this.link.linkUrl
      ) {
        return false;
      } else return true;
    },
  },
  data() {
    return {
      pageTitle: "",
      content: "",
      link: {
        linkText: "",
        linkUrl: "",
      },
      published: true,
    };
  },
  methods: {
    submitForm() {
      if (!this.isDataFullfilled) {
        return alert("Please, fullfill the entire form.");
      } else {
        this.pageCreated({
          pageTitle: this.pageTitle,
          content: this.content,
          link: {
            text: this.link.linkText,
            url: this.link.linkUrl,
          },
          published: this.published,
        });
        this.clearForm();
      }
    },
    clearForm() {
      (this.pageTitle = ""),
        (this.content = ""),
        (this.link = {
          linkText: "",
          linkUrl: "",
        }),
        (this.published = true);
    },
  },
  props: ["pageCreated"],
  watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.link.linkText == oldTitle) {
        this.link.linkText = newTitle;
      }
    },
  },
};
</script>
