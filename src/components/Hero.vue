<template>
<div id="nav">
<div x-data="{ open: false }" class="relative bg-gray-900 overflow-hidden">
  <div class="max-w-screen-xl mx-auto bg-scroll">
    <div class="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      
      <Nav />
    </div>
  </div>
</div>
</div>
</template>

<script>
import Nav from '@/components/Nav'

    export default {
        components: {Nav},
    data() {
        return {
          
        }
    }
        
    }
</script>

<style lang="scss" scoped>
</style>