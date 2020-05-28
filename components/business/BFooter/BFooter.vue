<template>
  <footer class="pt-10 pb-20">
    <div class="container">
      <div class="mb-3">
        <img src="/logo.svg" class="w-10 mb-2" alt="Logo" />
        <p>Open-sourced in 2020</p>
      </div>
      <div class="flex justify-between">
        <ul class="p-0 pr-2 m-0 -mx-2 list-none">
          <li v-for="menu in menus" :key="menu.name" class="inline-block px-2">
            <a
              :aria-label="menu.name"
              class="font-semibold nav-link"
              :href="`#${menu.name.toLowerCase()}`"
              @click="$emit('click')"
              >{{ menu.name }}</a
            >
          </li>
        </ul>
        <ul class="p-0 m-0 list-none">
          <li
            v-for="social in socials"
            :key="social.name"
            class="inline-block pl-4"
          >
            <a
              :aria-label="social.name"
              :href="social.url"
              target="_blank"
              rel="noreferrer noopener"
            >
              <g-icon>
                {{ social.icon }}
              </g-icon>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BFooter',
  props: {
    socials: {
      type: Array,
      default: () => []
    },
    menus: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style></style>
