<template>
  <div>
    <client-only>
      <figure v-lazyload :class="`image__wrapper ${wrapperClass}`">
        <div
          :style="`padding-top: ${aspectRatio * 100}%`"
          :class="`image__loader ${imgClass}`"
        ></div>
        <img
          :style="`width: ${width}`"
          :class="'h-full image__item ' + imgClass"
          :data-url="source"
          :alt="alt"
        />
      </figure>
      <!-- <div slot="placeholder">
        <div
          :class="
            `image__loader ${staticClass} ${rounded ? 'rounded-full' : ''}`
          "
          :style="`padding-top: ${aspectRatio * 100}%`"
        ></div>
      </div> -->
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'GImg',
  props: {
    aspectRatio: {
      type: Number,
      default: 1
    },
    source: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    imgClass: {
      type: String,
      default: ''
    },
    wrapperClass: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: 'auto'
    },
    width: {
      type: String,
      default: 'auto'
    }
  }
}
</script>

<style lang="postcss" scoped>
.image__wrapper.loaded .image__loader {
  @apply hidden;
}
.image__wrapper.loaded .image__item {
  @apply opacity-100 h-auto;
}
/* .image__wrapper.loaded {
  @apply block;
} */
.image__item {
  @apply w-full opacity-0 h-0 transition-opacity duration-100 ease-in;
}

.image__loader,
.client-only-placeholder {
  @apply bg-dark-500;
}

/* @keyframes placeholderShimmer {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
} */
</style>
