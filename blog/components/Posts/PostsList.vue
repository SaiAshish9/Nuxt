<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="https://image.freepik.com/free-vector/smart-city-concepts_46706-682.jpg"
      title="Hello there!"
      previewText="This is my first post!"
    />

    <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://image.freepik.com/free-vector/smart-city-concepts_46706-682.jpg"
      title="Hello there!"
      previewText="This is my second post!"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props:{
  isAdmin: {
    type: Boolean,
    default: false
  }
  }

};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
