const express = require("express");
const mongoose = require("mongoose");
const commentsPorfolio = mongoose.model("commentsPorfolio");
const router = express.Router();

router.post("/comment", async (req, res) => {
  const { username, comment } = req.body;
  if (!username || !comment) {
    return res
      .status(422)
      .json({ error: "enter all data (username and comment)" });
  }
  const commentdata = await commentsPorfolio.findOne({ comments: comment });

  if (commentdata) {
    return res.status(409).json({ error: "comment already exist" });
  }

  const newComment = new commentsPorfolio({
    username: username,
    comments: comment,
  });
  newComment.save((err,result) =>{
    if(err){
        console.log(err);
        return res.status(502).json({ error : "error in dataBase"})
    }

    return res.json({success : result})
  })
});

router.get('/allcomment',(req,res) =>{
  commentsPorfolio.find((error,doc) =>{
    if(error){
      return res.status(409).json({ error : "error in dataBase"})
    }
    return res.json({result  : doc})
  })
})

module.exports = router;
