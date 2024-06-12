<template>
    <svg
      :width="size"
      :height="size"
      :stroke-width="strokeWidth"
      :stroke="color"
      :fill="fill"
      xmlns="http://www.w3.org/2000/svg"
      :viewBox="viewBox"
      v-html="iconSvg"
    />
  </template>
  
  <script>
  import feather from 'feather-icons';
  
  export default {
    name: 'FeatherIcon',
    props: {
      icon: {
        type: String,
        required: true,
      },
      size: {
        type: [Number, String],
        default: 24,
      },
      strokeWidth: {
        type: [Number, String],
        default: 2,
      },
      color: {
        type: String,
        default: 'currentColor',
      },
      fill: {
        type: String,
        default: 'none',
      },
      viewBox: {
        type: String,
        default: '0 0 24 24',
      },
    },
    computed: {
      iconSvg() {
        return feather.icons[this.icon].toSvg();
      },
    },
  };
  </script>
  
  <style scoped>
  svg {
    display: inline-block;
    vertical-align: middle;
  }
  </style>
  