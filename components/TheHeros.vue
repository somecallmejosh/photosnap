<template>
  <div class="hero-list max-w-full">
    <div
      class="hero-item relative md:grid md:grid-cols-5 w-full max-w-full"
      v-for="(hero, index) in heroes"
      :key="hero.id"
      :class="hero.style"
    >
      <div
        class="hero-image md:col-span-2 relative"
        :class="index % 2 === 0 ? 'md:order-1' : 'md:order-0'"
      >
        <v-picture :image="hero.image"></v-picture>
      </div>
      <div
        class="md:flex md:items-center md:col-span-3"
        :class="index % 2 === 0 ? 'md:order-0' : 'md:order-1'"
      >
        <div class="space-y-4 px-8 md:px-12 lg:px-28 py-20">
          <h2 class="text-3xl uppercase tracking-widest font-bold">
            {{ hero.title }}
          </h2>
          <p class="opacity-60 leading-normal font-thin">
            {{ hero.description }}
          </p>
          <nuxt-link
            :to="hero.url"
            class="
              flex
              items-center
              space-x-2
              uppercase
              text-sm
              tracking-widest
            "
          >
            <span>{{ hero.linkText }}</span>
            <icon-right-arrow class="h-4" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VPicture from "~/components/ui/VPicture";
import IconRightArrow from "~/components/svgs/IconRightArrow";

export default {
  components: { IconRightArrow, VPicture },
  data() {
    return {
      heroes: [
        {
          id: "1",
          title: "Create and share your photo stories.",
          description:
            "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
          url: "/",
          linkText: "Get an invite",
          image: {
            alt: "Photographer standing on a pier, staring at a lake.",
            dimensions: {
              height: 353,
              width: 450,
            },
            src: {
              mobile: "/images/home/mobile/create-and-share.jpg",
              tablet: "/images/home/tablet/create-and-share.jpg",
              desktop: "/images/home/desktop/create-and-share.jpg",
            },
          },
          style: "bg-black text-white",
        },
        {
          id: "2",
          title: "Beatiful Stories Every Time",
          description:
            "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
          url: "/",
          linkText: "View the stories",
          image: {
            alt: "Computer monitor displaying photo editing software",
            dimensions: {
              height: 325,
              width: 450,
            },
            src: {
              mobile: "/images/home/mobile/beautiful-stories.jpg",
              tablet: "/images/home/tablet/beautiful-stories.jpg",
              desktop: "/images/home/desktop/beautiful-stories.jpg",
            },
          },
          style: "bg-white text-black",
        },
        {
          id: "3",
          title: "Designed For Everyone",
          description:
            "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
          url: "/",
          linkText: "View the stories",
          image: {
            alt: "Photographer testing equipment.",
            dimensions: {
              height: 450,
              width: 325,
            },
            src: {
              mobile: "/images/home/mobile/designed-for-everyone.jpg",
              tablet: "/images/home/tablet/designed-for-everyone.jpg",
              desktop: "/images/home/desktop/designed-for-everyone.jpg",
            },
          },
          style: "bg-white text-black",
        },
      ],
    };
  },
};
</script>
