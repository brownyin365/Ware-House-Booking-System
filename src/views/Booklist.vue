<template>
  <div>
    <div class="overflow-x-auto">
      <div
        class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden"
      >
        <div class="w-full lg:w-5/6">
          <div>
            <h1 class="text-xl">Available Bookings</h1>
          </div>
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">Full Name</th>
                  <th class="py-3 px-6 text-left">Phone Number</th>
                  <th class="py-3 px-6 text-center">Email</th>
                  <th class="py-3 px-6 text-center">City</th>
                  <th class="py-3 px-6 text-center">Date</th>
                  <th class="py-3 px-6 text-center">Goods</th>
                  <th class="py-3 px-6 text-center">Size</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr
                  class="border-b border-gray-200 hover:bg-gray-100"
                  v-for="booking in bookings"
                  :key="booking"
                >
                  <td class="py-3 px-6 text-left whitespace-nowrap">
                    <div class="flex items-center">
                      <span class="font-medium">{{ booking.firstName }}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>{{ booking.phone }}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span
                      class="flex item-center justify-center"
                      >{{ booking.email }}</span
                    >
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      {{ booking.city }}
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      {{ booking.date }}
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <span
                        class="flex item-center justify-center"
                        >{{ booking.goods }}</span
                      >
                    </div>
                  </td>
                   <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      {{ booking.size }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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
      booking: [],
    };
  },
  firestore() {
    return {
      // Collection
      bookings: db.collection("bookings"),
    };
  },

  methods: {
    deleteBooking(booking) {
      db.collection("bookings")
        .doc(booking.id)
        .delete()
        .then((response) => {
          this.$noty.success("Successfully Deleted ", response);
        })
        .catch((error) => {
          console.error("Error removing document: ",error); // eslint-disable-line no-console
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
