<template>
    <div>

        <div class="bg-white dark:bg-gray-900">
            <div class="flex justify-center h-screen">
                <div class="hidden bg-cover lg:block lg:w-2/3"
                    style="background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
                    <div class="flex items-center h-full px-20 bg-blue-400 bg-opacity-40">
                        <div>
                            <h2 class="text-4xl font-bold text-white">Reserve A Space with Us</h2>

                            <p class="max-w-xl mt-3 text-gray-300">Our WARE-HOUSE a super Clean and Top Notch,with 24hrs security services,24hrs access
                                to all clients,
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div class="flex-1">
                        <div class="text-center">
                            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Book WareHouse</h2>

                            <!-- <h2 class="mt-3 text-gray-500 dark:text-gray-300">Book WareHouse</h2> -->
                        </div>

                        <div class="mt-8">
                            <form @submit="sendBooking">
                                <div>
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full
                                        Name</label>
                                    <input v-model="booking.firstName" type="text" name="text" id="fullName"
                                        placeholder="Full Name"
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

                                                <input v-model="booking.city" type="city" name="city" id="city"
                                                    placeholder="Your City"
                                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mt-6">
                                                <div class="flex justify-between mb-2">
                                                    <label for="text"
                                                        class="text-sm text-gray-600 dark:text-gray-200">Digital Address
                                                        Size</label>
                                                </div>

                                                <input v-model="booking.digitalAddress" type="text" name="digitalAddress" id="digitalAddress"
                                                    placeholder="Digital Address"
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
                                                    <label for="email"
                                                        class="text-sm text-gray-600 dark:text-gray-200">Email</label>
                                                </div>

                                                <input v-model="booking.email" type="email" name="email" id="email"
                                                    placeholder="Your Email"
                                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mt-6">
                                                <div class="flex justify-between mb-2">
                                                    <label for="date"
                                                        class="text-sm text-gray-600 dark:text-gray-200">Date</label>
                                                </div>

                                                <input v-model="booking.date" type="date" name="date" id="date"
                                                    placeholder="Date"
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
                                                    <label for="text" class="text-sm text-gray-600 dark:text-gray-200">Type of
                                                        Goods</label>
                                                </div>

                                                <input v-model="booking.goods" type="text" name="goods" id="goods"
                                                    placeholder="Type of Goods"
                                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="mt-6">
                                                <div class="flex justify-between mb-2">
                                                    <label for="text"
                                                        class="text-sm text-gray-600 dark:text-gray-200">Square Fit
                                                        Size</label>
                                                </div>

                                                <input v-model="booking.size" type="text" name="size" id="size"
                                                    placeholder="Square Fit"
                                                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6">
                                    <div class="flex justify-between mb-2">
                                        <label for="password"
                                            class="text-sm text-gray-600 dark:text-gray-200">Phone</label>
                                    </div>

                                    <input v-model="booking.phone" type="phone" name="phone" id="phone"
                                        pattern="[0-9]{4}-[0-9]{3}-[0-9]{3}" placeholder="0244-000-000"
                                        class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="row">
                                   <div class="col-6">
                                        <div class="mt-6">
                                            <button type="submit"
                                                class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                Book
                                            </button>
                                        </div>
                                   </div>
                                   <div class="col-6">
                                        <div class="mt-6">
                                            <router-link type="submit" to="/"
                                                class="w-full px-4 py-2 tracking-wide text-center no-underline text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                                Canceal Booking
                                            </router-link>
                                        </div>
                                   </div>
                               </div>

                            </form>

                            <p class="mt-6 text-sm text-center text-gray-900">Our Rep will Contact you within 10min to Confirm Your Booking</p>
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
            bookings: [],
            booking: {
                firstName: null,
                city: null,
                size: null,
                digitalAddress: null,
                email: null,
                phone: null,
                goods: null,
            },
        };
    },
    firestore() {
        return {
            // Collection
            bookings: db.collection("bookings"),
        };
    },
    methods: {
        sendBooking() {
            this.$firestore.bookings
                .add(this.booking)
                .then((response) => {
                    this.$noty.success("Successfully Book Your Seat ", response);
                })
                .catch((error) => {
                    console.error("Error writing document: ", error); // eslint-disable-line no-console
                });
            this.$router.replace("/Payment");
        },

        updateBooking: function (booking) {
            this.$firestore.bookings
                .doc(booking.id)
                .update(this.booking)
                .then((response) => {
                    this.$noty.success("Successfully Deleted ", response);
                })
                .catch((error) => {
                    console.error("Error removing document: ", error); /* eslint-disable-line no-console */
                });
        },
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
