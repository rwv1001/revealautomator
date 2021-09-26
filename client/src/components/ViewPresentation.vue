<template>
  <div >
    <div class="field">
      <label class="label">Titled</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Title"
          v-model="presentation.title"
        />        
      </div>
    </div>
 
    <div class="field">
      <label class="label">Content</label>
      <div class="control">
        <textarea
          class="form-control"
          type="text"
          placeholder="Content"
          v-model="presentation.content"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PresentationsService from '@/services/PresentationsService'

export default {
  data () {
    return {
      presentation: {
        title: null,
        content: null
      },
      error: null,
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      

     
      try {
        await PresentationsService.put(this.presentation)
        this.$router.push({
        name: 'presentations'})
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const presentationId = this.$store.state.route.params.presentationId
      this.presentation = (await PresentationsService.show(presentationId)).data
      
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style scoped>
</style>