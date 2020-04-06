<template>
  <v-app>
    <v-content>
      <p>
      <router-link to="/orders">Go to Orders</router-link>
      <router-link to="/notifications">Go to Notifications</router-link>
      
      </p>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
