<template>
<div class="container">
  <section class="section">
      <div class="columns is-centered">
        <div class="column is-full-mobile is-full-desktop">
          <p class="title is-1 is-spaced">HELLO</p>
        </div>
      </div>
      <div class="columns">
        <div class="column is-half">
          <p class="title is-1 is-spaced">HELLO</p>
        </div>
        <div class="column is-half">
          <p class="title is-1 is-spaced">HELLO</p>
        </div>
      </div>
  </section>
</div>
</template>

<script>
export default {
  name: 'welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
