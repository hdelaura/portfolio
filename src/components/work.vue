<template>
<div class="container">
  <section class="section is-large">
    <div class="columns">
        <div class="column is-half-desktop is-half-tablet is-full-mobile">
            <div>-----   What this website is built in</div>
        </div>
    </div>
    <div class="columns is-centered">
        <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile">
          <div class="card">
            <div class="card-image is-centered">
            <figure class="image is-128x128">
                <img src="../../public/assets/vuejs.jpeg">
            </figure>
            </div>
            <div class="card-content">
              <div class="content">
                This website is built in VueJS. Blah
                blah blah jskdjksjdksd
                jskdjsjsdksjdksdj
                sdsdsdskdl;ksldksldklskd
                kdsjksjdsjdjd ksd skdsjdk
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile">
          <div class="card">
            <div class="card-image is-centered">
            <figure class="image is-128x128">
                <img src="../../public/assets/nodejs.png">
            </figure>
            </div>
            <div class="card-content">
              <div class="content">
                This website is built in VueJS. Blah
                blah blah jskdjksjdksd
                jskdjsjsdksjdksdj
                sdsdsdskdl;ksldksldklskd
                kdsjksjdsjdjd ksd skdsjdk
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-third-desktop is-one-third-tablet is-full-mobile">
          <div class="card">
            <div class="card-image is-centered">
            <figure class="image is-128x128">
                <img src="../../public/assets/bulma.png">
            </figure>
            <figure class="image is-128x128">
                <img src="../../public/assets/sass.png">
            </figure>
            </div>
            <div class="card-content">
              <div class="content">
                This website is built in VueJS. Blah
                blah blah jskdjksjdksd
                jskdjsjsdksjdksdj
                sdsdsdskdl;ksldksldklskd
                kdsjksjdsjdjd ksd skdsjdk
              </div>
            </div>
          </div>
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
.is-horizontal-center {
  justify-content: center;
  align-items: center;
}
</style>