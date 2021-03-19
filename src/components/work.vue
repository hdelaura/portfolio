<template>
<div class="container">
  <section class="section is-large">
    <div class="columns">
        <div class="column is-half-desktop is-half-tablet is-full-mobile">
            <div>-----   What this website is built in</div>
        </div>
    </div>
    <div class="columns">
        <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile">
            <figure class="image is-128x128">
                <img class="is-rounded" src="../../public/assets/vuejs.jpeg">
            </figure>
        </div>
        <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile">
            <figure class="image is-128x128">
                <img class="is-rounded" src="../../public/assets/vuejs.jpeg">
            </figure>
        </div>
        <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile">
            <figure class="image is-128x128">
                <img class="is-rounded" src="../../public/assets/vuejs.jpeg">
            </figure>
        </div>
    </div>
  </section>
</div>
</template>

<script>
  export default {
    name: 'work',
    props: {
      msg: String
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>