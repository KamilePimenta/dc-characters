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

  .image {
    border-bottom-right-radius: 60px;
    &::before {
      border-bottom-left-radius: 60px;
    }
  }

  .bio {
    padding: 32px;
    border-top-left-radius: 60px;
    &::before {
      border-top-right-radius: 60px;
    }

    .text {
      max-height: calc(50vh - 160px);
      padding-right: 10px;
      overflow: hidden;
      overflow-y: auto;
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: $dcBlue;
        border-radius: 4px;
        -webkit-transition: all .3s ease;
        -moz-transition: all .3s ease;
        -o-transition: all .3s ease;
        transition: all .3s ease;
        cursor: pointer;
        &:hover {
          background-color: #2f6ed0;
        }
      }
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

      .text {
        &::-webkit-scrollbar-track {
          background-color: #eaeaea;
        }
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
      .text {
        &::-webkit-scrollbar-track {
          background-color: #555555;
        }
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
    max-width: 380px;
    margin: 40px auto;
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
      border-radius: 60px;
      border-bottom-left-radius: 0;
      z-index: 2;
      &::before {
        border-radius: 60px;
        border-bottom-right-radius: 0;
      }

      img {
        position: absolute;
        left: 50%;
        top: 50%;
        max-width: calc(100% + 160px);
        max-height: calc(100% + 160px);
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
    }

    .bio {
      border-radius: 60px;
      border-top-right-radius: 0;
      &::before {
        border-radius: 60px;
        border-top-left-radius: 0;
      }
      .text {
        max-height: calc(50vh - 200px);
      }
    }
  }
}
</style>