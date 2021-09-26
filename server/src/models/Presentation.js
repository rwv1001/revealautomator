module.exports = (sequelize, Datatypes) => {
  const Presentation = sequelize.define('Presentation', {
    user_id: {
      type: Datatypes.INTEGER     
    },
    title: {
      type: Datatypes.STRING
    },
    content: {
      type: Datatypes.TEXT
    },
    version: {
      type: Datatypes.INTEGER
    },
    published: {
      type: Datatypes.BOOLEAN
    }

  })

  
  return Presentation
}