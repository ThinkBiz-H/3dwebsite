<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { gsap, ScrollTrigger } from "../../composables/gsapSetup";
import { useLenis } from "../../composables/useLenis";
import { useSiteNav } from "../../composables/useSiteNav";
import { nav } from "../../data/content";
import MagneticButton from "../ui/MagneticButton.vue";
import logo from "../../assets/logo.svg";

const headerEl = ref(null);
const menuOpen = ref(false);
const menuPanel = ref(null);
const scrolled = ref(false);
const { scrollTo } = useLenis();
const route = useRoute();
const router = useRouter();
const { goTo: navigateTo } = useSiteNav();

let st;

onMounted(() => {
  st = ScrollTrigger.create({
    start: 40,
    onUpdate: (self) => {
      scrolled.value = self.scroll() > 40;
    },
  });
});

onBeforeUnmount(() => st?.kill());

function goTo(href) {
  menuOpen.value = false;
  navigateTo(href);
}

function goHome() {
  menuOpen.value = false;
  if (route.path === "/") {
    scrollTo(0);
  } else {
    router.push("/");
  }
}

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<template>
  <header
    ref="headerEl"
    class="fixed inset-x-0 top-0 z-50 transition-[background,border-color,box-shadow] duration-500"
    :class="
      scrolled
        ? 'glass border-b border-gray-900/5 shadow-soft'
        : 'border-b border-transparent'
    "
  >
    <div
      class="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-10"
    >
      <a
        href="/"
        data-cursor-hover
        class="flex items-center shrink-0"
        @click.prevent="goHome"
      >
        <img
          :src="logo"
          alt="Lumen Ledger"
          class="h-16 lg:h-20 w-auto object-contain"
        />
      </a>

      <nav class="hidden items-center gap-9 md:flex">
        <a
          v-for="item in nav"
          :key="item.href"
          :href="item.href"
          data-cursor-hover
          class="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          @click.prevent="goTo(item.href)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="hidden md:block">
        <MagneticButton
          as="a"
          href="#pricing"
          @click.prevent="goTo('#pricing')"
          data-cursor-hover
          class="!px-6 !py-3 text-xs"
        >
          Start free
        </MagneticButton>
      </div>

      <button
        class="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        aria-label="Toggle menu"
        @click="toggleMenu"
      >
        <span
          class="h-px w-6 bg-gray-900 transition-transform duration-300"
          :class="menuOpen && 'translate-y-[3.5px] rotate-45'"
        />
        <span
          class="h-px w-6 bg-gray-900 transition-transform duration-300"
          :class="menuOpen && '-translate-y-[3.5px] -rotate-45'"
        />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-400 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="menuOpen"
        ref="menuPanel"
        class="glass-strong absolute inset-x-0 top-20 border-b border-gray-900/5 px-6 py-8 shadow-card md:hidden"
      >
        <nav class="flex flex-col gap-6">
          <a
            v-for="item in nav"
            :key="item.href"
            :href="item.href"
            class="font-display text-2xl font-semibold tracking-tight text-gray-900"
            @click.prevent="goTo(item.href)"
          >
            {{ item.label }}
          </a>
        </nav>
        <MagneticButton
          as="a"
          href="#pricing"
          class="mt-8 w-full"
          @click.prevent="goTo('#pricing')"
        >
          Start free
        </MagneticButton>
      </div>
    </Transition>
  </header>
</template>
