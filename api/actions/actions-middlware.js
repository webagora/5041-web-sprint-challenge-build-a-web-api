// add middlewares here related to actions
const Action = require("./actions-model")

function validateActionId (req, res, next) {
    Action.get(req.params.id)
        .then ( action => {
            if (action) {
                req.action = action
                next() 
            } else {
                next ({status: 404, message : `no action with the given ${req.params.id}` })
            }
        })
        .catch (next)
  }

function validateAction (req, res, next) {

    const { notes, description } = req.body
    if (!notes || !notes.trim() || !description || !description.trim() ) {
      res.status(400).json ({
        message: 'missing request body field'
      })
    } else {    
      next()
    }

  }

module.exports ={    
    validateActionId,
    validateAction,
    
  } 