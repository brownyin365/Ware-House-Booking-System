<template>
  <div>
    <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover"
      style="background-image:url('https://www.graphic.com.gh/images/2020/july/19/vip.png');">
      <div class="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <!--Main Col-->
        <div id="profile"
          class="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div class="p-4 md:p-12 text-center lg:text-left">
            <h1 class="text-3xl font-bold pt-8 lg:pt-0"></h1>
            <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
            <div></div>
            <div>
              <h1 class="text-xl">
                1.Please Continue with Mobile money payment <br />
                2.Use your Ghana Card Number in Payment ID number<br />
                3.You can also make payment Through any Customer Representatives,<br />
                4.Come with your ID Card for verification
              </h1>
            </div>
          </div>
        </div>
        <!--Payment Form-->
        <div class="w-full lg:w-2/5 bg-white rounded-lg" style="height: 500px">
          <form method="POST" action="https://community.ipaygh.com/gateway">
            <input type="hidden" name="merchant_key" value="tk_93ebedda-6c5a-11ea-b8e9-f23c9170642f" />
            <input type="hidden" name="success_url" value="http://localhost:8080/successful" />
            <input type="hidden" name="cancelled_url" value="http://localhost:8080" />
            <input type="hidden" name="deferred_url" value="http://localhost:8080" />
            <br /><br /><br />
            <div class="w-full px-3 pt-16">

              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                ID Number
              </label>
              <input
                class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text" name="invoice_id" value="" placeholder="ID Number" />
            </div>
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Amount
              </label>
              <input
                class="appearance-none block w-full bg-gray-800 text-gray-700 border border-gray-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="total" type="text" size="10" placeholder="Amount" />
            </div>
            <div class="row">
              <div class="col-6">
                <div class="mt-6">
                  <input type="submit"
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"/>      
                </div>
              </div>
              <div class="col-6">
                <div class="mt-6">
                  <router-link type="submit" to="/"
                    class="w-full px-4 py-2 tracking-wide text-center no-underline text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Canceal
                  </router-link>
                </div>
              </div>
            </div>
            <!-- <div class="row">
              <div class="col-12">
                  <input
              class="mt-3 text-lg font-semibold bg-blue-600 content-end text-white rounded-lg px-8 py-2 block shadow-xl hover:bg-gray-700"
              type="submit"
            />
              </div>
            </div> -->
          </form>
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
      email: null,
    };
  },
  created() {
    var user = fb.auth().currentUser;

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.telephone = user.telephone;
    this.city = user.city;
    this.location = user.location;
    this.email = user.email;
  },

  firestore() {
    const user = fb.auth().currentUser;
    return {
      booking: db.collection("profiles").doc(user.uid),
    };
  },

  methods: {
    updateBooking() {
      this.$firestore.Profile.update(this.Profile);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
