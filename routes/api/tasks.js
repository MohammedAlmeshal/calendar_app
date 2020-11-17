const express = require("express");
const router = express.Router();

//Task model
const Task = require("../../models/tasks");

// @route GET api/tasks
// @desc Get All Items

router.get("/", (req, res) => {
  //   console.log(res);
  Task.find().lean().then((tasks)=> res.json(tasks));
});

// @route POST api/tasks
// @desc add a task

router.post("/", (req, res) => {
  //   console.log(res);
  const newTask = new Task({
    name: req.body.name,
    date: req.body.date,
  });

  newTask.save().then((task) => {
    res.json(task);
  });
});

// @routes DELTE api/tasks
// @desc DELETE a task
router.delete("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then((task) =>
      task.remove().then(() => {
        res.json({ success: true });
      })
    )
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
