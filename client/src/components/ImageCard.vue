<template>
  <v-row justify="center" >
    <v-col
        v-for="(item, i) in products"
        cols="12"
        sm="6"
        md="4"
    >
      <v-hover v-slot="{ hover }">
        <v-img
            :src="require(`../assets/item-${i}.jpeg`)"
            :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
            aspect-ratio="1"
            class="grey lighten-2 elevation-4 mx-2"
        >
          <v-expand-transition>
            <div
                @click="openImageInModal(item , i)"
                v-if="hover"
                class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal md-text  black--text"
                style="height: 100%; cursor: pointer"
            >
              <v-row justify="center" class="text-center">
                  <v-col cols="12">

                {{item.title}}
                  </v-col>
                <v-col cols="12" class="display-3">

            {{item.price}}
                </v-col>
              </v-row>

            </div>
          </v-expand-transition>
        </v-img>
      </v-hover>
    </v-col>


    <v-dialog overlay-opacity="0.8"  v-model="imageInfoModal" max-width="600" v-if="imageInfoModal">
      <v-btn absolute top right color="white" @click="imageInfoModal = false" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-card class="px-5" elevation="0">
          <v-img
              height="100%"
              width="100%"
              contain
              :src="require(`../assets/item-${selectedImage.index}.jpeg`)"
              :lazy-src="`https://picsum.photos/10/6?image=${selectedImage.index * 5 + 10}`"
              aspect-ratio="1"
          />
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Products from "@/utils/Products";
export default {
  name: "ImageCard",
  data: () => ({
    products: [],
    imageInfoModal: false,
    selectedImage : {}
  }),
  methods: {
    openImageInModal(item , index) {
      this.imageInfoModal = true;
      this.selectedImage =  {
        price: item.price,
        title: item.title,
        index
      }

    }
  },
  async created() {
    this.products = Products;

  }
}
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .7;
  position: absolute;
  width: 100%;
}
</style>
