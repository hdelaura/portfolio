<template>
<body>
    <nav></nav>
    <about></about>
    <!-- <footer></footer> -->
</body>
</template>

<script>
import nav from '../components/nav.vue'
import about from '../components/about.vue'
// import footer from '../components/footer.vue'

export default {
  name: 'about',
  components: {
    nav,
    about
  }
}
</script>