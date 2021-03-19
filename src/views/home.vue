<template>
<body>
    <welcome></welcome>
    <about></about>
    <work></work>
    <!-- <footer></footer> -->
</body>
</template>

<script>
import welcome from '../components/welcome.vue'
import about from '../components/about.vue'
import work from '../components/work.vue'
// import footer from '../components/footer.vue'

export default {
  name: 'home',
  components: {
    welcome,
    about,
    work
  }
}
</script>
