import Api from '@/services/Api'

export default {
  index (search) {
    return Api().get('/presentations', {
      params: {
        search: search
      }
    })
  },
  show (presentationId) {
    return Api().get(`/presentations/${presentationId}`)
  },
  post (presentation) {
    return Api().post('/presentations', presentation)
  },
  put (presentation) {
    return Api().put(`/presentations/${presentation.id}`, presentation)
  }
}