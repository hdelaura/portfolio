<template>
<div class="container">
  <section class="section is-large">
    <div class="columns">
      <div class="column is-half-desktop is-full-tablet is-full-mobile">
        <div class="is-size-4">-----   Haley DeLaura</div>
        <h1 class="large-text is-size-1-mobile main_title">
            <span data-aos="transform">Hello, my</span>
            <span data-aos="transform">name's Haley.</span>
            <span data-aos="transform">I'm a Front End</span>
            <span data-aos="flip-down">Web Developer.</span>
        </h1>
      </div>
      <div class="column is-half-desktop is-full-tablet is-full-mobile">
        <animation />
      </div>
    </div>
  </section>
</div>
</template>

<script>
import animation from './animation'
export default {
  name: 'App',
  components: {
    animation
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.large-text {
  font-size: 3.5rem;
}
.main_title span {
  display: block;
}
</style>
