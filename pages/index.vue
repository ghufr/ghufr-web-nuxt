<template>
  <div class="container">
    <!-- HERO SECTION -->

    <section>
      <div
        class="flex flex-col-reverse justify-between pt-32 pb-32 text-center sm:pt-48 sm:pb-40 md:text-left md:flex-row"
      >
        <div class="max-w-lg mx-auto md:mx-0 fade-in">
          <h1 class="text-3xl font-bold text-white md:text-5xl">
            Hi i'm Ghufron
          </h1>
          <p class="px-2 mb-10 text-xl md:text-2xl md:px-0">
            Front-end web developer, building modern web apps, and experimenting
            using bleeding-edge technology.
          </p>
          <button class="text-lg btn btn-primary" @click="scrollTo('about')">
            Get to know me
          </button>
        </div>
        <div class="relative z-10 mb-3">
          <g-img
            style="max-height: 300px; min-height: 200px"
            wrapper-class="inline-block"
            img-class="mx-auto rounded-full md:mx-0 me-1 md:max-w-sm"
            source="https://ik.imagekit.io/ghufr/ghufr-web-nuxt/me-2_1bJcOHlQa.jpg"
            alt="Me One"
          />
        </div>
      </div>

      <div class="bg-illustration" />
    </section>
    <!-- TECH STACK SECTION -->
    <section class="mb-20">
      <div class="mb-3 border-b border-dark-500"></div>

      <div class="py-5 mx-auto overflow-x-auto text-center whitespace-no-wrap">
        <a
          v-for="tech in techs"
          :key="tech.name"
          :href="tech.url"
          :aria-label="tech.name"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block p-4 transition-opacity duration-150 opacity-75 hover:opacity-100"
        >
          <g-img width="46px" :source="tech.img" :alt="tech.name" />
        </a>

        <!-- <div class="px-4">
          <img src="https://via.placeholder.com/200x120" alt="Tech" />
        </div>
        <div class="px-4">
          <img src="https://via.placeholder.com/200x120" alt="Tech" />
        </div>
        <div class="px-4">
          <img src="https://via.placeholder.com/200x120" alt="Tech" />
        </div>
        <div class="px-4">
          <img src="https://via.placeholder.com/200x120" alt="Tech" />
        </div> -->
      </div>
      <p class="mb-3 text-sm text-center">
        Some of my favorite Open-source project
      </p>
      <div class="border-b border-dark-500"></div>
    </section>
    <!-- ABOUT ME SECTION -->
    <section id="about" class="mb-20">
      <div class="flex flex-col justify-evenly md:flex-row">
        <div class="flex-1 mx-auto mb-4 md:mb-0">
          <g-img
            img-class="max-w-md rounded-lg"
            source="https://ik.imagekit.io/ghufr/ghufr-web-nuxt/me-1_OQY1SxBeA.jpg"
            alt="Me Two"
            width="100%"
            :aspect-ratio="1.2"
          />
        </div>
        <div class="flex-1 px-4 anim">
          <h1 class="text-3xl font-semibold text-white">About Me</h1>
          <p class="mb-4 text-xl">
            I'm 21, majoring in Information System
            <span class="inline-block">
              <svg
                class="h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 3 2"
              >
                <rect fill="#FFF" width="3px" height="2px" />
                <rect fill="#CE1126" width="3px" height="1px" />
              </svg>
            </span>
            and building startup
            <a
              href="https://nalayan.id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nalayan Indonesia"
              class="font-medium text-white link"
              >nalayan.id</a
            >
          </p>
          <ul class="p-0 m-0 list-none">
            <li v-for="about in abouts" :key="about" class="mb-2">
              <div>
                <span
                  class="inline-block p-2 text-white align-middle bg-opacity-75 rounded-full bg-primary-500"
                >
                  <g-icon size="18px">
                    {{ icons.mdiCheck }}
                  </g-icon>
                </span>
                <h2 class="inline-block pl-2 font-semibold">{{ about }}</h2>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- VALUES SECTION -->
    <section id="values" class="px-4 mb-20 md:px-0 anim">
      <h1 class="mb-3 text-3xl font-semibold text-white">My Values</h1>
      <div class="flex flex-wrap -mx-3">
        <div
          v-for="value in values"
          :key="value.name"
          class="w-full px-3 py-3 sm:w-1/2 md:w-1/3"
        >
          <g-img
            :source="value.icon"
            class="inline-block w-12 mb-1 rounded-full bg-primary-500"
            img-class="rounded-full"
            alt=""
          />
          <h2 class="text-lg font-semibold text-white">{{ value.name }}</h2>
          <p>
            {{ value.desc }}
          </p>
          <!-- <h2>Good designer copy</h2> -->
          <!-- <h2>Implements 80/20 rule</h2> -->
        </div>
      </div>
    </section>

    <!-- PROJECTS SECTION -->
    <section id="projects" class="mb-20">
      <div class="px-4 md:px-0">
        <h1 class="text-3xl font-semibold text-white">Projects</h1>
        <p class="mb-3">Some of my open-sourced side project</p>
      </div>
      <div class="flex flex-no-wrap pb-3 pl-4 -mx-2 overflow-x-auto md:pl-0">
        <div
          v-for="project in projects"
          :key="project.name"
          class="flex-shrink-0 w-4/6 px-2 md:w-1/3 lg:w-1/5"
        >
          <div class="h-full p-3 rounded-md bg-dark-500">
            <a
              :href="project.url"
              :aria-label="project.name"
              class="mb-2 text-lg font-semibold text-white link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ project.name }}
            </a>
            <p>{{ project.desc }}</p>
          </div>
        </div>
      </div>
      <div class="px-4 text-xs md:px-0">
        <p>* IGracias is Telkom University information system</p>
        <p>* HMSI: Student association of Information System</p>
      </div>
    </section>
    <!-- CTA SECTION -->
    <section class="mb-8">
      <div class="border-b border-dark-500"></div>

      <div class="flex justify-between py-10">
        <h2 class="text-lg sm:text-3xl">Feel free to discuss</h2>
        <nuxt-link to="/contact" class="sm:text-lg btn btn-primary"
          >Contact Me</nuxt-link
        >
      </div>
      <div class="border-b border-dark-500"></div>
    </section>
  </div>
</template>

<script>
import { mdiCheck } from '@mdi/js'
export default {
  data: () => ({
    icons: {
      mdiCheck
    },
    abouts: ['Curious by Nature', 'Fast Learner', 'Lowkey Personality'],
    techs: [
      {
        name: 'Nuxt.js',
        img: '/logos/nuxt.svg',
        url: 'https://nuxtjs.org'
      },
      {
        name: 'Vue.js',
        img: '/logos/vue.svg',
        url: 'https://vuejs.org'
      },
      {
        name: 'Tailwind',
        img: '/logos/tailwind.svg',
        url: 'https://tailwindcss.com'
      },
      {
        name: 'Nest.js',
        img: '/logos/nestjs.svg',
        url: 'https://nestjs.com'
      }
    ],
    values: [
      {
        name: 'Integrity',
        desc:
          'Doing the right thing in a reliable way, being honest, strong moral and ethical values',
        icon: '/icons/tile-01.svg'
      },
      {
        name: 'Perseverance',
        desc: 'Fail fail fail success, failed often improve more and overcome',
        icon: '/icons/tile-02.svg'
      },
      {
        name: 'Simplicity',
        desc:
          'Keep it simple stupid (KISS), simplicity mean less bugs, less code to mantain, less hassle',
        icon: '/icons/tile-03.svg'
      }
    ],
    projects: [
      {
        name: 'IGracias Survey Automation',
        desc:
          'Filling survet in IGracias* is tiresome, so i write code to automate it.',
        url: 'https://github.com/ghufr/igracias-survey-automation'
      },
      {
        name: 'Cyan Line Bot',
        desc: 'Line chat bot as a propaganda tools of HMSI*',
        url: 'https://github.com/ghufr/si4203-line-bot'
      },
      {
        name: 'Instagram Story Skipper',
        desc:
          'Tired of never ending IG story, just let browser automation help you',
        url: 'https://github.com/ghufr/instagram-stories-browser'
      },
      {
        name: 'Student Checkin',
        desc:
          'After pandemic, student must check in every day to get TAK, this project aim to automate the checkin process',
        url: 'https://github.com/ghufr/student-checkin-public'
      }
    ]
  }),
  // computed: {
  // age() {
  // const now = new Date()
  // const birth = new Date('1999-04-24')
  // return `${now.getFullYear}`
  // return ''
  // }
  // },
  // mounted() {
  //   const obs = new IntersectionObserver((entries, observer) => {
  //     for (let i = 0; i < entries.length; i++) {
  //       const entry = entries[i]
  //       if (entry.intersectionRatio > 0) {
  //         entry.target.classList.remove('anim')
  //         entry.target.classList.add('fade-in')
  //         observer.unobserve(entry.target)
  //       }
  //     }
  //   })
  //   const sections = document.querySelector('.anim')
  //   for (let i = 0; i < sections.length; i++) {
  //     const elem = sections[i]
  //     obs.observe(elem)
  //   }
  // },
  methods: {
    scrollTo(id) {
      const el = document.getElementById(id)
      const y = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="postcss">
.bg-illustration {
  @apply w-full h-full absolute top-0 right-0 pointer-events-none z-0 bg-no-repeat;
  background-image: url('/illustration-section.svg');
  background-size: 200%;
  background-position: right top;
  max-height: 80vh;
}

.me-1 {
  max-width: 200px;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.12);
}

::-webkit-scrollbar:horizontal {
  height: 4px;
}

/* Track */
::-webkit-scrollbar-track:horizontal {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-border-radius: 10px;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb:horizontal {
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.8);
  -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.5);
}

.fade-in {
  animation: anim-fade-in 0.2s forwards ease-in;
}

/* .zoom-in {
  animation: zoom-fade-in 0.2s forwards ease-in;
} */

@media (min-width: 900px) {
  .bg-illustration {
    background-size: 120%;
  }
  .me-1 {
    max-width: 300px;
  }
}

@keyframes anim-fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* @keyframes anim-zoom-in {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
} */
</style>
