<template>
    <div class="sidebar">
        <div class="title">
            365 Ware-Houses
        </div>
        <div class="menu-items">
            <router-link to="/dashboard/overview" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    Overview
                </div>
            </router-link>
            <router-link to="/dashboard/addschedule" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Add Schedules
                </div>
            </router-link>
            <router-link to="/dashboard/schedulelist" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                  List of Ware-house
                </div>
            </router-link>
            <router-link to="/dashboard/bookings" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                   Add Bookings
                </div>
            </router-link>
             <router-link to="/dashboard/booklist" active-class="active" tag="button" exact class="side-btn">
                <div class="link-container">
                    List of Bookings
                </div>
            </router-link>
            <button @click="logout()" class="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">LogOut</button>
        </div>
    </div>
</template>

<script>
import {fb} from "../firebase";
export default {
    data() {
        return {

        }
    },

    methods: {
        logout() {
      fb.auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        })
    },
    }
    
}
</script>

<style scoped>
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
}

.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 6px;
}

.menu-items > * {
    margin-top: 40px;
}

.side-btn {
    border: none;
    padding: 10px 0px;
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    color: white;
    background-color: transparent;
}

.side-btn:focus {
    outline: none;
}

.side-btn.active {
    position: relative;
    background-color: white;
    color: teal;
    font-weight: 600;
    margin-left: 10px;
    border-radius: 30px 0 0 30px;
}

.side-btn.active::before {
    top: -30px;
}

.side-btn.active::after {
    bottom: -30px;
}

.side-btn.active .link-container::before {
    top: -60px;
}

.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

</style>