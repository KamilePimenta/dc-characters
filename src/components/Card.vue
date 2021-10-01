<template>
  <div :class="`card ${data.color} ${darkMode ? 'dark' : 'light'}`">
    <figure class="image">
      <img
        :src="require(`../assets/img/${data.slug}.png`)"
        :alt="`Picture of ${data.name}`"
      />
    </figure>
    <div class="bio clear">
      <h3 class="title">História</h3>
      <div class="text" v-html="data.history"></div>
      <img
        class="symbol"
        :src="require(`../assets/svg/${data.slug}.svg`)"
        :alt="`Symbol of ${data.name}`"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    data: Object,
    darkMode: Boolean,
  },
};
</script>
<style lang="scss" scoped>
.card {
  .image,
  .bio {
    position: relative;
    padding: 32px;
    height: 50vh;
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
    }
  }

  .title {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: bold;
  }

  .symbol {
    position: absolute;
    right: 32px;
    bottom: 32px;
  }

  // Colors
  &.light {
    .image {
      background-color: $white;
    }
    .bio {
      color: $greyDark;
      &::before {
        background-color: $white;
      }
    }
  }
  &.dark {
    .image {
      background-color: $greyDark;
    }
    .bio {
      color: $greyLight;
      &::before {
        background-color: $greyDark;
      }
    }
  }

  &.blue {
    .image::before,
    .bio {
      background: $blue;
      background: radial-gradient(circle, $blueLight 0%, $blue 100%);
    }
  }
  &.marine {
    .image::before,
    .bio {
      background: $marine;
      background: radial-gradient(circle, $marineLight 0%, $marine 100%);
    }
  }
  &.orange {
    .image::before,
    .bio {
      background: $orange;
      background: radial-gradient(circle, $orangeLight 0%, $orange 100%);
    }
  }
  &.red {
    .image::before,
    .bio {
      background: $red;
      background: radial-gradient(circle, $redLight 0%, $red 100%);
    }
  }
  &.yellow {
    .image::before,
    .bio {
      background: $yellow;
      background: radial-gradient(circle, $yellowLight 0%, $yellow 100%);
    }
  }

  @media only screen and (min-width: 540px) {
    max-width: 420px;
    margin: 40px auto;
    overflow: hidden;
    -webkit-border-radius: 60px;
    -moz-border-radius: 60px;
    -o-border-radius: 60px;
    border-radius: 60px;
    -webkit-box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.2);

    .image,
    .bio {
      height: calc(50vh - 40px);
    }

    .image {
      &::before {
        border-bottom-left-radius: 90px;
      }
    }

    .bio {
      &::before {
        border-top-right-radius: 90px;
      }
    }
  }
}
</style>