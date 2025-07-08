const express = require("express");
const passport = require("passport");
const router = express.Router();


router.get("/google", passport.authenticate("google", {
  scope: ["profile", "email"]
}));

 router.get("/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login", 
    successRedirect: "http://localhost:3000", 
   })
);

router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

router.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).send("Not logged in");
  }
  res.send(req.user); 
});

module.exports = router;
