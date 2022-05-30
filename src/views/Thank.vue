<template>
  <div>
    <b-container>
      <b-row class="justify-content-md-center mt-4">
        <b-col col md="6">
          <b-card 
          header="Booking"
          header-bg-variant="dark"
          header-text-variant="white"
          >
            <b-card-text>
              <b-form @submit="sendSeat">
                <b-form-group label="First Name">
                  <b-form-input v-model="seat.seatNum" placeholder="Enter First Name" required></b-form-input>
                </b-form-group>
                <br>
                <b-form-group>
                  <b-button type="submit" variant="outline-primary">Submit</b-button>
                </b-form-group>
              </b-form>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <br><br>

    <b-container class="flex flex-row inline-flex gap-4 md:grid-cols-6">
    <div class="relative grid grid-cols-7 grid-rows-10 gap-px bg-gray-200 border border-gray-200 bg-purple-200 p-4 text-center"
       v-for="seat in busseats" :key="seat.id"
    >
    {{seat.seatNum}}
    </div>
    </b-container>
  </div>
</template>

<script>
import { db } from "../firebase";
export default {
  data() {
    return {
      busseats: [],
      seat: {
        seatNum: null,
      },

    }
  },
    firestore () {
    return {
        // Collection
        busseats: db.collection('busseats'),
    }
  },
  methods: {
    sendSeat() {
       this.$firestore.busseats.add(this.seat)
        .then((response) =>{
                        this.$noty.success("Successfully Paid ", response);
                    })
                    .catch((error) =>{
                        console.error("Error writing document: ", error); // eslint-disable-line no-console
                    });
                    this.$router.replace('/bookings');
                },
              


     }
};
</script>
