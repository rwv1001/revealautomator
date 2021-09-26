<template>
  <div>    
    <router-link :to="{ name: 'presentations-create' }" class="button is-success mt-5"
      >Add New</router-link
    >
    <table class="table is-striped is-bordered mt-2 is-fullwidth">
      <thead>
        <tr>
          <th>Title</th>
          <th>Content</th>
          <th class="has-text-centered">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.content }}</td>
          <td class="has-text-centered">
            <router-link
              :to="{ name: 'presentation-edit', params: { presentationId: item.id } }"
              class="button is-info is-small"
              >Edit</router-link
            >, 
            <router-link
              :to="{ name: 'presentation', params: { presentationId: item.id } }"
              class="button is-info is-small"
              >View</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PresentationsService from "@/services/PresentationsService";
export default {
  name: "PresentationList",
  data() {
    return {
      items: [],
    };
  },

  created() {
    this.getPresentations();
  },

  methods: {
    // Get All Products
    async getPresentations() {
      try {
        const response = await PresentationsService.index();
        this.items = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
#login_id {
  padding-top: 60px;
}
</style>
