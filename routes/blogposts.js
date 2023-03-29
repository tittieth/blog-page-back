const express = require("express");
const router = express.Router();
const BlogpostModel = require("../models/blogpost-model");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
    const blogposts = await BlogpostModel.find().populate("author");
    res.status(200).json(blogposts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/add", async (req, res, next) => {
  try {
    const savePost = await new BlogpostModel(req.body);
    const savedPost = await savePost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const post = await BlogpostModel.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await BlogpostModel.updateOne({ $set: req.body });
      res.status(200).json("it has been updated");
    } else {
      res.status(403).json("you can only update your post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  await BlogpostModel.findByIdAndDelete({ _id: req.params.id });
  res.status(200).json("Blogpost successfully deleted");
});

module.exports = router;
