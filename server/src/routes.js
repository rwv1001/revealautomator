const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const PresentationsController = require('./controllers/PresentationsController')
module.exports = (app) => {
  app.post('/register', 
    AuthenticationControllerPolicy.register,
    AuthenticationController.register),
  app.post('/login',     
    AuthenticationController.login)

  app.get('/presentations',
    PresentationsController.index)
  app.get('/presentations/:presentationId',
    PresentationsController.show)
  app.put('/presentations/:presentationId',
    PresentationsController.put)
  app.post('/presentations',
    PresentationsController.post)
  
}