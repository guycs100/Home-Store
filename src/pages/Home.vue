<template>
  <div class="mt-0 pt-0">
    <section id="home" >

      <v-img
          height="100vh"
          src="../assets/item-17.jpg"
      >
        <v-theme-provider dark>


          <v-container fill-height>

            <v-row align="center" style="color:#236983" class=" mx-auto"  justify="center">
              <v-col class=" text-center" cols="12" tag="h1">
                <br />

                <div  class="  title-text mx-3" style="font-size: 100px" >דברי נוי</div>
              </v-col>

              <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#features')">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>

    </section>

<!--    <section id="blog">-->
<!--      <div class="py-12"></div>-->

<!--      <v-container>-->
<!--        <h2 class="title-text font-weight-bold mb-3 text-uppercase text-center">סוגי עבודה שונים</h2>-->

<!--        <v-responsive class="mx-auto mb-12" width="56">-->
<!--          <v-divider class="mb-1"></v-divider>-->

<!--          <v-divider></v-divider>-->
<!--        </v-responsive>-->

<!--        <v-row>-->
<!--          <v-col v-for="({ src, text, title }, i) in articles" :key="i" cols="12" md="4">-->
<!--            <v-img :src="src()" class="mb-4 elevation-4" height="350" max-width="100%"></v-img>-->

<!--            <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>-->

<!--            <div class="title font-weight-light mb-5" v-text="text"></div>-->
<!--          </v-col>-->
<!--        </v-row>-->
<!--      </v-container>-->

<!--      <div class="py-12"></div>-->
<!--    </section>-->

<!--    <section id="about-me" class="grey lighten-4">-->
<!--      <div class="py-12"></div>-->

<!--      <v-container class="text-center">-->
<!--        <h2 class="title-text font-weight-bold mb-3" style="color: #dfb5296e;">קצת עליי</h2>-->

<!--        <v-responsive class="mx-auto mb-8" width="56">-->
<!--          <v-divider class="mb-1"></v-divider>-->

<!--          <v-divider></v-divider>-->
<!--        </v-responsive>-->

<!--        <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">-->
<!--          . שמי דוד בורא, בן 25, אני סטודנט למחשבת ישראל והיסטוריה במכללת הרצוג-->
<!--          <br />יש לי חיבה מיוחדת לצביעת בתים, אני נמצא בתחום כבר כמה שנים טובות ועשרות לקוחות מרוצים יוכלו להמליץ לכם עלי-->
<!--          <br />אני מציע מחיר אטרקטיבי במיוחד, עבודה מקצועית, כולל גימורים, עושה עבודה בבתים גם עם רהיטים, ומגיע לכל הארץ-->
<!--          <br />אני זמין, תוכלו לפנות אליי בכל עת-->
<!--        </v-responsive>-->

<!--        <v-avatar class="elevation-12 mb-12" size="128">-->
<!--          <v-img src="@/assets/logo.png"></v-img>-->
<!--        </v-avatar>-->

<!--        <div></div>-->

<!--        &lt;!&ndash; <v-btn-->
<!--            color="grey"-->
<!--            href="https://vuetifyjs.com"-->
<!--            outlined-->
<!--            large-->
<!--          >-->
<!--            <span class="grey&#45;&#45;text text&#45;&#45;darken-1 font-weight-bold">-->
<!--              Vuetify Documentation-->
<!--            </span>-->
<!--        </v-btn>&ndash;&gt;-->
<!--      </v-container>-->

<!--      <div class="py-12"></div>-->
<!--    </section>-->

    <section id="features">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 style="color:#236983" class="title-text font-weight-bold mb-3">השירות שלנו</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="11" md="4">
            <v-card class="py-12 px-4 elevation-3" color="grey lighten-5" flat height="350">
              <v-theme-provider dark>
                <div>
                  <v-avatar color="#dfb5296e" size="88">
                    <v-icon large v-text="icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title class="justify-center font-weight-black text-uppercase" v-text="title"></v-card-title>

              <v-card-text class="subtitle-1" v-text="text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({

    articles: [
      {
        // src: () => require ("../assets/logo.png"),
        title: "צביעה בתים",
        text: "",
      },
      {
        // src: () => require ("../assets/logo.png"),
        title: "חידוש רהיטים",
        text: "",
      },
      {
        // src: () => require ("../assets/logo.png"),
        title: "צביעה וחידוש דקים ופרגולות",
        text: "",
      },
    ],
    features: [
      {
        icon: "mdi-fountain-pen",
        title: "איכות",
        text:"המוצרים שלנו איכותיים וטובים",
      },
      {
        icon: "mdi-currency-ils",
        title: "מחיר הוגן",
        text: "אנחנו מציעים מחיר נוח ומתאים לכל כיס, ניתן להיכנס לגלרייה",
      },
      {
        icon: "mdi-star",
        title: "משלוח מהיר",
        text:
            "משלוח בתוך שלושה ימי עסקים ",
      },
    ],
  }),
};
</script>
