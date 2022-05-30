<template>
  <div>
    <div class="pt-6 px-2 sm:px-6 lg:px-8 h-8">
      <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <h1 href="#" class="font-medium no-underline text-white hover:text-gray-500 font-3xl focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
              365Solutions
              <!-- <img class="h-20 w-auto sm:h-48" src="../assets/images/logo6.png" alt /> -->
            </h1>
          </div>
        </div>
        <div class="hidden md:block md:ml-10 md:pr-4 pt-8 uppercase flex">
          <router-link
            to="/"
            class="font-medium no-underline text-white hover:text-gray-500 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >Home</router-link>
          <router-link
            to="/warehouse"
            class="ml-8 font-medium no-underline text-white hover:text-gray-500 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
          >House Ware</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: true
    };
  }
};
</script>