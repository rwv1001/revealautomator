const { Presentation } = require('../models')

module.exports = {
  async index(req, res) {
    try {
      let presentations = null
      

      presentations = await Presentation.findAll({
        limit: 10
      })
      res.send(presentations)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the presentations'
      })
    }
  },
  async show(req, res) {
    try {
      const presentation = await Presentation.findByPk(req.params.presentationId)
      res.send(presentation)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the presentations'
      })
    }
  },
  async post(req, res) {
    try {
      const presentation = await Presentation.create(req.body)
      res.send(presentation)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the presentation'
      })
    }
  },
  async put(req, res) {
    try {
      await Presentation.update(req.body, {
        where: {
          id: req.params.presentationId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the presentation'
      })
    }
  }

}