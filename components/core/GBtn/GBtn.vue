<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  functional: true,
  computed: {
    tag() {
      if (this.is) {
        return this.is
      }
      return 'button'
    }
  }
}
</script>

<style></style>
