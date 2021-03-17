<template>
<div class="container">
  <section class="section">
    <div class="columns is-mobile">
      <div class="column is-half">
        <div>-----   Haley DeLaura</div>
        <h1 class="is-size-1">
            Hello, my<br>
            name's Haley.<br>
            I'm a Front End<br>
            <div data-aos="flip-down">Web Developer.<br></div>
        </h1>
      </div>
      <div class="column is-half"></div>
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
