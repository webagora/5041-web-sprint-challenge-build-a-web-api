// add middlewares here related to projects
const Project = require("./projects-model")

async function validateProjectId(req, res, next) {
    next()
  }

module.exports ={    
    validateProjectId,
    
  } 