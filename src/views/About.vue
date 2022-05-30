<template>
  <div>
    <div class="py-12 bg-gray-900">
      <div>
        <h2
          class="mt-2 text-center text-3xl leading-9 font-extrabold text-white"
        >
          Booking Details
        </h2>
      </div>
    </div>
    <div
      class="min-h-screen flex items-center justify-center bg-gray-900 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div class="max-w-md w-full">
        <br /><br />
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-origin"
            >
              First Name
            </label>
            <input
              v-model="booking.firstName"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Origin"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-destination"
            >
              Last Name
            </label>
            <input
              v-model="booking.lastName"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Destination"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-origin"
            >
              Origin
            </label>
            <input
              v-model="booking.origin"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Origin"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-destination"
            >
              Destination
            </label>
            <input
              v-model="booking.destination"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Destination"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-spouse"
            >
              Spouse Contact Number
            </label>
            <input
              v-model="booking.spouseNum"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="text"
              placeholder="Spouse Number"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Date of Birth
            </label>
            <input
              v-model="booking.dob"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Date Of Birth"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Country
            </label>
            <input
              v-model="booking.country"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Country"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              City
            </label>
            <input
              v-model="booking.city"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="City"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Phone
            </label>
            <input
              v-model="booking.phone"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Phone"
            />
          </div>
          <div class="w-full px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-email"
            >
              ID Number
            </label>
            <input
              v-model="booking.idNumber"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="text"
              placeholder="ID Card Number"
            />
          </div>
        </div>

        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Address
            </label>
            <input
              v-model="booking.address"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Address"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Digital Address
            </label>
            <input
              v-model="booking.digitalAddress"
              class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="GA-000-0000"
            />
          </div>
        </div>

        <div class="mt-6">
          <button
            type="submit"
            @click="updateBooking"
            class="group relative uppercase w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-yellow-800 bg-yellow-400 hover:bg-yellow-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            <span class="absolute left-0 inset-y pl-3">
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </span>
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../firebase";

export default {
  data() {
    return {
      bookings: [],
      booking: {
        address: null,
        city: null,
        country: null,
        destination: null,
        digitalAddress: null,
        dob: null,
        email: null,
        idNumber: null,
        origin: null,
        phone: null,
        spouse: null,
        spouseNum: null,
      },
    };
  },

  firestore() {
    const user = fb.auth().currentUser;
    return {
      booking: db.collection("bookings").doc(user.uid),
    };
  },
  methods: {
    updateBooking() {
      this.$firestore.booking.update(this.booking);
    },
  },
};
</script>

<style lang="scss" scoped></style>
