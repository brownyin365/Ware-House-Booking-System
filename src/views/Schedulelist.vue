<template>
  <div>
    <div class="overflow-x-auto">
      <div
        class="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-900 font-sans overflow-hidden"
      >
        <div class="w-full lg:w-5/6">
          <div>
            <h1 class="text-xl">Available Ware Houses</h1>
          </div>
          <div class="bg-white shadow-md rounded my-6">
            <table class="min-w-max w-full table-auto">
              <thead>
                <tr
                  class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                >
                  <th class="py-3 px-6 text-left">Name</th>
                  <th class="py-3 px-6 text-center">Location</th>
                  <th class="py-3 px-6 text-center">Available Space</th>
                  <th class="py-3 px-6 text-center">Phone</th>
                  <th class="py-3 px-6 text-center">Price Per Square</th>
                  <th class="py-3 px-6 text-center">Action</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                <tr
                  class="border-b border-gray-200 hover:bg-gray-100"
                  v-for="listspace in listspaces"
                  :key="listspace"
                >
                  <td class="py-3 px-6 text-left">
                    <div class="flex items-center">
                      <span>{{ listspace.name }}</span>
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex items-center justify-center">
                      {{ listspace.location }}
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <span
                      class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs"
                      >{{ listspace.availablespace }}</span
                    >
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      {{ listspace.contact }}
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      {{ listspace.pricepersquare }}
                    </div>
                  </td>
                  <td class="py-3 px-6 text-center">
                    <div class="flex item-center justify-center">
                      <button
                        class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        @click="deleteSchedule(listspace)">
                        Delete
                      </button>
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
      listspace: {
        availablespace: null,
        name: null,
        location: null,
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
    addSchedule() {
      this.$firestore.schedules.add(this.schedule);
    },

    deleteSchedule(listspace) {
      db.collection("listspaces")
        .doc(listspace.id)
        .delete()
        .then((response) => {
          this.$noty.success("Successfully Deleted ", response);
        })
        .catch((error) => {
          console.log("Error removing document: ",error); // eslint-disable-line no-console
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
