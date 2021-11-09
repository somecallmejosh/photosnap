<template>
  <div class="bg-gray-900">
    <header class="bg-white">
      <div
        class="
          w-full
          max-w-screen-2xl
          mx-auto
          h-20
          flex
          items-center
          justify-between
          px-6
          lg:px-20
        "
      >
        <nuxt-link to="/"><the-logo /></nuxt-link>
        <div>
          <button><icon-menu /></button>
        </div>
      </div>
    </header>
    <main>
      <nuxt />
    </main>
    <footer class="max-w-screen-2xl mx-auto bg-black text-white p-6 lg:p-12">
      Footer
    </footer>
  </div>
</template>
<script>
import IconMenu from "~/components/svgs/IconMenu";
export default {
  components: {
    IconMenu,
  },
};
</script>
