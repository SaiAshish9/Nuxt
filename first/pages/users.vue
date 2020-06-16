<template>
  <div>
        <nuxt-child/>
    <input v-model="userId" type="text" />
    <button @click="send">Load User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: ""
    };
  },
  methods: {
    send() {
      this.$router.push("/users/" + this.userId);
    }
  }
};
</script>
