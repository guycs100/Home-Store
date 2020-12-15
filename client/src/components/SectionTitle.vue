<template>
      <v-responsive class="text-center">
       <span class="title-text font-weight-bold mb-3 secondary--text">
        {{text}}
        </span>
        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>
          <v-divider></v-divider>
        </v-responsive>
    </v-responsive>
</template>


<script>
export default {
    name: 'Title',
    props: ['text']
}
</script>