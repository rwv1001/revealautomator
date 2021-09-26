<template>
  <div>
    <div class="field">
      <label class="label">Title</label>
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
 
    <div class="control">
      <button class="button is-success" @click="savePresentation">SAVE</button>
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
    async savePresentation() {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.presentation)
        .every(key => !!this.presentation[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }

      try {
        await PresentationsService.post(this.presentation)
        this.$router.push({
          name: 'presentations'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
