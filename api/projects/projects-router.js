// Write your "projects" router here!
const router = require("express").Router()
const md = require('./projects-middleware')
const Project = require("./projects-model")

router.get("/", (req, res, next) => {
    Project.get()
        .then(projects => {
        res.status(200).json(projects)
        })
        .catch(next)
})

router.get('/:id', md.validateProjectId, (req, res) => {
    res.json(req.project)  
});

router.post('/', md.validateProject, (req, res, next) => {
    
    Project.insert(req.body)
      .then(newProject => {      
        res.status(201).json(newProject)
      })
      .catch(next)
});  

router.put('/:id', md.validateProjectId, md.validateProject, (req, res, next) => {
    
    Project.update(req.params.id, req.body)
      .then(updatedProject => {      
        res.status(201).json(updatedProject)
      })
      .catch(next)
  });

module.exports = router