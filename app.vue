<script setup>
if (process.client) {
  // Google tag (gtag.js)
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-K64BJL8XGL');
}
</script>


<template>
  <div id="page">
    <Header />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Footer />
  </div>
</template>
