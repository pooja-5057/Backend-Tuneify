// const express = require("express");
// const mongoose = require("mongoose");
// const passport = require("passport");
// const session = require("express-session");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");

// dotenv.config();
// require("./config/passport");

// const app = express();


// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB connected"))
// .catch((err) => console.error("❌ MongoDB error:", err));


// app.use(cors({
//   origin: "http://localhost:3000", 
//   credentials: true
// }));
// app.use(express.json());

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());


// app.use("/auth", authRoutes); 
// app.use("/api", userRoutes);

// app.get("/", (req, res) => res.send("🎵 Tuneify backend running"));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios"); 
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
require("./config/passport");

const app = express();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB error:", err));

app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes); 
app.use("/api", userRoutes);


app.get("/", (req, res) => res.send("🎵 Tuneify backend running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
