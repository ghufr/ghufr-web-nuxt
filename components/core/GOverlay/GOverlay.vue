<template>
  <div>
    <slot name="activator" :on="{ click: open }" />
    <div class="h-full">
      <transition name="fade">
        <div
          v-if="show"
          class="fixed top-0 left-0 z-30 w-full h-full bg-black bg-opacity-25"
          @click="close"
        ></div>
      </transition>
      <transition name="slide-up">
        <div v-if="show" class="fixed bottom-0 left-0 z-40 w-full">
          <slot />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GOverlay',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    show: false
  }),
  watch: {
    show(val) {
      if (val) {
        document.body.style.setProperty('overflow-y', 'hidden')
      } else {
        document.body.style.removeProperty('overflow-y')
      }
    }
  },

  methods: {
    close() {
      if (this.value) {
        this.$emit('close')
      } else {
        this.show = false
      }
    },
    open() {
      if (this.value) {
        this.$emit('open')
      } else {
        this.show = true
      }
    }
  }
}
</script>

<style lang="postcss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.12s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.12s ease-in;
}

.slide-up-leave-active {
  transition: all 0.12s ease-out;
  transform: translateY(200px);
}

.slide-up-enter-to {
}

.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(200px);
}
</style>
