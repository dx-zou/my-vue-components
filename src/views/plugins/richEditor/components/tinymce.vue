<template>
  <div>
    <tinymce-editor v-model="value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
