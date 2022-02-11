// Write your "actions" router here!
const router = require("express").Router()
const md = require('./actions-middlware')
const { validateProjectId } = require('../projects/projects-middleware')
const Action = require("./actions-model")

router.get('/', (req, res, next) => {
    
    Action.get()
      .then( actions => {
        res.status(200).json(actions)
      })
      .catch (() => {
       next({ message: "The actions information could not be retrieved" })
      })
    
});

router.get('/:id', md.validateActionId, (req, res) => {
    res.json(req.action)  
});

router.post('/', validateProjectId, md.validateAction, (req, res, next) => {
    
    Action.insert(req.body)
      .then(newAction => {      
        res.status(201).json(newAction)
      })
      .catch(next)
  });



module.exports = router