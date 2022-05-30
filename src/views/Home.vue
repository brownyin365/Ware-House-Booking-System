<template>
  <div class="home bg-white-900 h-screen w-screen">
    <div id="app">
      <!-- <div class="container mx-auto px-20">
    </div>   -->
      <Hero />
      <!-- Our Programs -->
      <List />
      <!--Schedule-->
      <!-- <Schude /> -->
      <!-- Footer -->
      <br><br><br>
      <Footer />
    </div>
  </div>
</template>

<script>
import Hero from "@/components/Hero";
import List from "@/components/List";
import Footer from "@/components/Footer";

export default {
  name: "Home",
  components: {Hero, List, Footer },
};
</script>
