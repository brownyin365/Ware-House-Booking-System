<template>
    <div>
        <div class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3">
                 <!-- <img class="hidden bg-cover lg:block lg:w-2/3" :style="{'background-image':'url(https://media.istockphoto.com/photos/cheerful-warehouse-employee-loading-boxes-into-truck-picture-id1351437852?b=1&k=20&m=1351437852&s=170667a&w=0&h=DELtrjVOV1McQiXX0tx5J-KqWFmr_G574r-oQp648gY=)'}"> -->
                    <div class="flex items-center h-full px-20 bg-blue-900 bg-opacity-40">
                        <div>
                            <h2 class="text-4xl font-bold text-black">List Your Ware house</h2>

                            <p class="max-w-xl mt-3 text-xl text-black">We are one of the best company to get a your Ware House lease within 24 hours from listing time.</p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="text-center">
                            <h2 class="text-4xl font-bold text-center text-black dark:text-white">List WareHouse</h2>

                            <!-- <h2 class="mt-3 text-gray-500 dark:text-gray-300">Book WareHouse</h2> -->
                        </div>

                        <div class="mt-8">
                            <form @submit="sendBooking">
                                <div>
                                    <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                                        Name</label>
                                    <input v-model="listspace.name" type="text" name="name" id="name"
                                        placeholder="Name"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div>
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="mt-6">
                                                <div class="flex justify-between mb-2">
                                                    <label for="city"
                                                        class="text-sm text-gray-600 dark:text-gray-200">City</label>
                                                </div>

                                                <input v-model="listspace.location" type="text" name="location" id="location"
                                                    placeholder="Your Location"
                                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mt-6">
                                                <div class="flex justify-between mb-2">
                                                    <label for="text"
                                                        class="text-sm text-gray-600 dark:text-gray-200">Available Space
                                                        Size</label>
                                                </div>

                                                <input v-model="listspace.availablespace" type="text" name="availablespace" id="availablespace"
                                                    placeholder="Ex: 1200sq"
                                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div class="row">
                                        <div class="col-6">
                                             <div class="mt-6">
                                                <div class="flex justify-between mb-2">
                                                    <label for="password"
                                                        class="text-sm text-gray-600 dark:text-gray-200">Phone</label>
                                                </div>

                                                <input v-model="listspace.contact" type="text" name="conatct" id="contact"
                                                    pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" placeholder="0244-000-000"
                                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>

                                        </div>
                                        <div class="col-6">
                                            <div class="mt-6">
                                                <div class="flex justify-between mb-2">
                                                    <label for="text"
                                                        class="text-sm text-gray-600 dark:text-gray-200">Price per Square</label>
                                                </div>

                                                <input v-model="listspace.pricepersquare" type="text" name="pricepersquare" id="pricepersquare"
                                                    placeholder="ex: 50gh"
                                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                               <div class="row">
                                   <div class="col-6">
                                        <div class="mt-6">
                                            <button type="submit"
                                                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                               Submit
                                            </button>
                                        </div>
                                   </div>
                                   <div class="col-6">
                                        <div class="mt-6">
                                            <router-link type="submit" to="/"
                                                class="w-full px-4 py-2 tracking-wide text-center no-underline text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                Canceal Listing
                                            </router-link>
                                        </div>
                                   </div>
                               </div>

                            </form>

                            <p class="mt-6 text-sm text-center text-gray-900">Our Rep will Contact you within 10min to Confirm Your Listing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from "../firebase";
import "vuejs-noty/dist/vuejs-noty.css";

export default {
    data() {
        return {
            listspaces: [],
            listspace: {
                name: null,
                location: null,
                availablespace: null,
                pricepersquare: null,
                contact: null,
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
        sendBooking() {
            this.$firestore.listspaces
                .add(this.listspace)
                .then((response) => {
                    this.$noty.success("Successfully Book Your Seat ", response);
                })
                .catch((error) => {
                    console.error("Error writing document: ", error); // eslint-disable-line no-console
                });
            this.$router.replace("/Payment");
        },

        // updateBooking: function (booking) {
        //     this.$firestore.bookings
        //         .doc(booking.id)
        //         .update(this.booking)
        //         .then((response) => {
        //             this.$noty.success("Successfully Deleted ", response);
        //         })
        //         .catch((error) => {
        //             console.error("Error removing document: ", error); /* eslint-disable-line no-console */
        //         });
        // },
    },
};
</script>

<style>
.body-of-main {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../assets/images/slide1.jpg);
}
</style>
