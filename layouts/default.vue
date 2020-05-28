<template>
  <div>
    <!-- HEADER SECTION -->
    <header class="relative z-20">
      <div class="container">
        <div class="flex items-center justify-between py-8 text-lg font-medium">
          <nuxt-link to="/">
            <img
              src="/logo.svg"
              alt="Header Logo"
              class="h-10 transition-opacity duration-150 opacity-75 hover:opacity-100"
            />
          </nuxt-link>
          <g-overlay>
            <template v-slot:activator="{ on }">
              <button class="p-2 md:hidden" role="presentation" v-on="on">
                <g-icon>
                  {{ icons.mdiMenu }}
                </g-icon>
              </button>
            </template>

            <div class="p-4 bg-white rounded-t-lg">
              <ul class="p-0 m-0 list-none">
                <li v-for="menu in menus" :key="menu.name">
                  <a
                    :href="`#${menu.name.toLowerCase()}`"
                    @click="(e) => scrollTo(menu.name.toLowerCase(), e)"
                    >{{ menu.name }}</a
                  >
                </li>
              </ul>
            </div>
          </g-overlay>
          <ul class="hidden p-0 m-0 text-white list-none md:block">
            <li v-for="menu in menus" :key="menu.name" class="inline-block">
              <a
                :aria-label="menu.name"
                :href="`#${menu.name.toLowerCase()}`"
                class="px-3 py-2 font-semibold nav-link"
                @click="(e) => scrollTo(menu.name.toLowerCase(), e)"
              >
                {{ menu.name }}
              </a>
            </li>
            <li class="inline-block">
              <nuxt-link
                aria-label="Contact"
                to="/contact"
                class="px-3 py-2 font-semibold text-white rounded-md shadow-md hover:bg-primary-700 bg-primary-500"
              >
                Contact Me
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!-- MAIN SECTION -->
    <main>
      <nuxt />
    </main>
    <!-- FOOTER SECTION -->
    <client-only>
      <BFooter
        :socials="socials"
        :menus="menus"
        @click="(e) => scrollTo(menu.name.toLowerCase(), e)"
      />
    </client-only>
    <!-- <footer class="pt-10 pb-20">
      <div class="container">
        <div class="mb-3">
          <img src="/logo.svg" class="w-10 mb-2" alt="Logo" />
          <p>Open-sourced in 2020</p>
        </div>
        <div class="flex justify-between">
          <ul class="p-0 pr-2 m-0 -mx-2 list-none">
            <li
              v-for="menu in menus"
              :key="menu.name"
              class="inline-block px-2"
            >
              <a
                class="font-semibold nav-link"
                :href="`#${menu.name.toLowerCase()}`"
                @click="(e) => scrollTo(menu.name.toLowerCase(), e)"
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
              <a :href="social.url" target="_blank" rel="noreferrer noopener">
                <g-icon>
                  {{ social.icon }}
                </g-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer> -->
    <!-- <g-overlay :value="overlay" @close="overlay = false">
      <div class="p-4">
        <div class="bg-white rounded-md">
          <h2>Contact</h2>
          <ul class="p-0 m-0 list-none">
            <li>Email</li>
          </ul>
        </div>
      </div>
    </g-overlay> -->
  </div>
</template>

<script>
import {
  mdiLinkedin,
  mdiTwitter,
  mdiInstagram,
  mdiMenu,
  mdiGithub
} from '@mdi/js'
import scrollTo from '@/utils/scrollTo'
// import BFooter from '@/components/business/BFooter/BFooter'

// const BFooter = () => import('~/.vue')

export default {
  // components: {
  //   BFooter
  // },
  data: () => ({
    icons: {
      mdiMenu
    },
    overlay: false,
    menus: [
      {
        name: 'About'
      },
      {
        name: 'Values'
      },
      {
        name: 'Projects'
      }
    ],
    socials: [
      {
        name: 'Github',
        url: 'https://github.com/ghufr',
        icon: mdiGithub
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/ghufronfr',
        icon: mdiLinkedin
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/ghufronfikri',
        icon: mdiTwitter
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/ghufronfr',
        icon: mdiInstagram
      }
    ],
    scrollTo
  }),
  mounted() {
    // eslint-disable-next-line no-console
    console.log('%cHey There :)', 'color: #376DF9; font-size: 20px')
  }
}
</script>

<style></style>
