<template>
<section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-8 mx-auto">
            <div class="lg:flex lg:-mx-2">
                <div class="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 d-none d-sm-block">
                  <img src="../assets/images/call.jpg" alt="" style="height: 250px">
                    <h2 class="block font-medium text-gray-500 dark:text-black hover:underline no-underline p-4 text-xl">Call us<br>
                      Our support service personel are available 24/7</h2>
                    <hr/>
                </div>

                <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                    <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p class="text-gray-500 dark:text-gray-300"></p>
                        <div class="flex items-center">
                            <!-- <p class="text-gray-500 dark:text-gray-300">Sort</p> -->
                            <!-- <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                <option value="#">Recommended</option>
                                <option value="#">Size</option>
                                <option value="#">Price</option>
                                <option value="#">Price</option>
                            </select> -->

                             <router-link to="/adware" type="button" class="flex items-center no-underline justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <span class="mx-1 w-32 text-center h-6">List Your Space</span>
                            </router-link>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto" v-for="listspace in listspaces" :key="listspace.id">
                            <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1624026676760-53603406ac94?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="T-Shirt">
                            <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{{ listspace.name }}</h4>
                             <p class="text-blue-500">Location: {{ listspace.location }}</p> 
                             <div class="row">
                                <div class="col-9">
                                 <p class="text-blue-500">Spaces Available: </p>   
                                </div>
                                <div class="col-3">
                                 <p class="text-blue-500">{{ listspace.availablespace }}</p> 
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-9">
                                 <p class="text-blue-500">Price per Square: </p>   
                                </div>
                                <div class="col-3">
                                 <p class="text-blue-500">{{ listspace.pricepersquare }}</p> 
                                </div>
                            </div>

                            <router-link to="/bookplace" type="button" class="flex items-center no-underline justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                </svg>
                                <span class="mx-1">Reserve Space</span>
                            </router-link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- </div> -->
    </section>
</template>


<script>
import { db } from "../firebase";
import "vuejs-noty/dist/vuejs-noty.css";

export default {
  data() {
    return {
      listspaces: [],
      listspace: {
        availablespace: null,
        contact: null,
        location: null,
        pricepersquare: null,
        name: null
      },
    };
  },
  firestore() {
    return {
      // Collection
      listspaces: db.collection("listspaces"),
    };
  },

  methods: {
    addSchedule() {
      this.$firestore.schedules.add(this.schedule);
    },

    // deleteSchedule(schedule) {
    //   db.collection("schedules")
    //     .doc(schedule.id)
    //     .delete()
    //     .then((response) => {
    //       this.$noty.success("Successfully Deleted ", response);
    //     })
    //     .catch((error) => {
    //       console.error("Error removing document: ",error); /* eslint-disable-line no-console */
    //     });
    // },
  },
};
</script>