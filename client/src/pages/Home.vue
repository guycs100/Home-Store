<template>
  <div class="mt-0 pt-0">
    <section id="home">
      <v-img height="100vh" src="../assets/item-17.jpg">
        <v-theme-provider dark>
          <v-container fill-height>
            <v-row align="center" class="mx-auto" justify="center">
              <v-col class="text-center" cols="12" tag="h1">
                <br />
                <div
                  class="title-text mx-3 secondary--text"
                  style="font-size: 100px"
                >
                  דברי נוי
                </div>
              </v-col>
              <v-btn
                class="align-self-end"
                fab
                outlined
                @click="$vuetify.goTo('#service')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </section>

    <section id="service">
      <div class="py-12"></div>
      <v-container class="text-center">
        <h2 class="title-text font-weight-bold mb-3 secondary--text">
          השירות שלנו
        </h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in ourServiceInfo"
            :key="i"
            cols="11"
            md="4"
          >
            <v-card
              class="py-12 px-4 elevation-3"
              color="grey lighten-5"
              flat
              height="350"
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar color="#dfb5296e" size="88">
                    <v-icon large v-text="icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>
              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              ></v-card-title>
              <v-card-text class="subtitle-1" v-text="text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-12"></div>
    </section>

    <section>
      <v-form ref="form">
        <v-row justify="center" class="lightGrey">
          <v-col cols="12" class="mt-10">
        <section-title text="דברו איתנו" />
          </v-col>
          <v-col cols="10">
            <v-text-field
              name="name"
              :rules="[rules.required(form.name)]"
              v-model="form.name"
              outlined
              append-icon="mdi-account-circle"
              label="שם*"
            ></v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              clearable
               append-icon="mdi-information"
              :rules="[rules.required(form.subject)]"
              v-model="form.subject"
              outlined
              label="נושא*"
            ></v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              clearable
                append-icon="mdi-email"
              name="email"
              :rules="[
                rules.required(form.email),
                rules.validEmail(form.email),
              ]"
              v-model="form.email"
              outlined
              label="אימייל*"
            ></v-text-field>
          </v-col>
          <v-col cols="10">
            <v-textarea
            append-icon="mdi-card-text"
              clearable
              :rules="[rules.required(form.text)]"
              v-model="form.text"
              outlined
              label="תוכן*"
            ></v-textarea>
          </v-col>
          <v-col cols="10">
            <v-btn
              :loading="isLoading"
              @click="sendForm"
              block
              color="primary"
              x-large
            >
              שלח
            </v-btn>
          </v-col>
          <div class="py-12"></div>
        </v-row>
      </v-form>
      <!-- </v-container> -->
    </section>
  </div>
</template>

<script>
import { validEmail, required } from "../utils/formValidation";
import SectionTitle from "../components/SectionTitle";
export default {
  name: "Home",
  components: {
    SectionTitle
   
  },
  data: () => ({
    isLoading: false,
    rules: { validEmail, required },
    form: {
      name: "",
      subject: "",
      email: "",
      text: "",
    },
    ourServiceInfo: [
      {
        icon: "mdi-fountain-pen",
        title: "איכות",
        text: "המוצרים שלנו איכותיים וטובים",
      },
      {
        icon: "mdi-currency-ils",
        title: "מחיר הוגן",
        text: "אנחנו מציעים מחיר נוח ומתאים לכל כיס, ניתן להיכנס לגלרייה",
      },
      {
        icon: "mdi-star",
        title: "משלוח מהיר",
        text: "משלוח בתוך שלושה ימי עסקים ",
      },
    ],
  }),
  methods: {
    async sendForm() {
      if (!this.$refs.form.validate()) return;

      const body = this.form;
      this.isLoading = true;
      const { data: {success} } = await this.$Api.post("/mail/submit-form", body);
      this.isLoading = false;
      if(success)
       return alert('ההודעה נשלחה בהצלחה, צוות פדידה סטור יחזור אילכם בהקדם המיידי!')
       alert('אירעה שגיאה')
    },
  },
};
</script>
