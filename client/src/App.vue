<template>
  <v-app id="app">
    <v-app-bar
      fixed
      color="primary"
     
    >
      <div class="sm-text mx-4 hidden-sm-and-down secondary--text">
        מזל פדידה- נוי לבית
      </div>
      <v-spacer class="hidden-md-and-down" />
      <v-btn
        :key="item.link"
        rounded
        text
        class="mx-auto mx-md-5"
        :to="item.link"
        v-for="item in navRoutesButtons"
      >
        <v-icon left color="white">{{ item.icon }}</v-icon>
        <span class="white--text">{{ item.title }}</span>
      </v-btn>
    </v-app-bar>

    <v-main class="my-0 py-0" id="scrolling-techniques">
      <router-view />
    </v-main>

    <v-footer dark padless>
      <v-card
        width="100vw"
        flat
        tile
        class="darken-4 white--text text-center"
        color="primary"
      >
        <v-card-text class="white--text pt-3">
          <div class="md-text">צור קשר</div>
          <v-responsive class="mx-auto my-2 xs-text" width="56"> </v-responsive>
          <div class="my-3 xs-text">
            טלפון
            <a class="info--text" href="tel:0505603042">050-5603042</a>
          </div>
          <div class="xs-text my-3">
            דוא"ל
            <a
              class="info--text"
              style="text-decoration: none"
              href="mailto:fadida-store3@gmail.com"
              >fadida-store@gmail.com</a
            >
          </div>
          {{ new Date().getFullYear() }} —
          <strong>מזל פדידה</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    navRoutesButtons: [
      { title: "דף הבית", icon: "mdi-home", link: "/" },
      { title: "גלרייה", icon: "mdi-image", link: "/gallery" },
    ],
  }),
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Rubik:100,300");

.v-application div {
  font-family: "Rubik", sans-serif !important;
  font-weight: 300 !important;
}

.title-text {
  font-size: 3rem;
}

.md-text {
  font-size: 2rem;
}

.sm-text {
  font-size: 1.9rem;
}

.xs-text {
  font-size: 1.4rem;
}

a {
  text-decoration: none;
  color: white;
}
</style>
