<template>
  <div class="switch">
    <span class="title">{{ title }}</span>
    <input type="checkbox" :id="name" :name="name" @change="check">
    <label :for="name"></label>
  </div>
</template>
<script>
export default {
  name: 'Switch',
  props: {
    name: String,
    title: String
  },
  methods: {
    check(event) {
      this.$store.dispatch('changeTheme', event.target.checked);
    },
  },
}
</script>
<style lang="scss" scoped>
.switch {
  input {
    display: block;
    width: 0;
    height: 0;
    overflow: hidden;

    &:checked {
      &+label {
        background-color: $dcBlue;
        &::before {
          background-color: $white;
          -webkit-transform: translateX(40px);
          -moz-transform: translateX(40px);
          -o-transform: translateX(40px);
          transform: translateX(40px);
        }
      }
    }
  }

  .title {
    position: absolute;
    left: -80px;
    top: 8px;
  }

  label {
    position: relative;
    display: block;
    width: 70px;
    height: 30px;
    padding: 3px;
    background-color: $white;
    text-indent: -9999px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;
    border-radius: 15px;
    will-change: background-color;
    -webkit-transition: all .3s .1s ease;
    -moz-transition: all .3s .1s ease;
    -o-transition: all .3s .1s ease;
    transition: all .3s .1s ease;
    cursor: pointer;
  }

  label::before {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    background-color: $dcBlue;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -o-border-radius: 50%;
    border-radius: 50%;
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    transform: translateX(0);
    will-change: transform;
    -webkit-transition: all .2s linear;
    -moz-transition: all .2s linear;
    -o-transition: all .2s linear;
    transition: all .2s linear;
  }
}
</style>