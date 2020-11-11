<template>
  <v-row justify="center" class="grey lighten-2 py-10">
    <v-col cols="11" sm="10" md="10" lg="10">
      <div style="color:#236983" class=" title-text my-5 mx-3 ">גלרייה</div>
      <v-card>
        <ImageCard />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import ImageCard from '../components/ImageCard';

export default {

  components: {
    ImageCard},
  data: () => ({

  }),
  methods: {}
}
</script>
