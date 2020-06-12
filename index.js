const express = require("express");
const cors = require("cors");
const authRouter = require("./routers/auth");
const orderRouter = require("./routers/order");
const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

app.use(authRouter);
app.use("/orders", orderRouter);
// app.use("/products", (req, res) => {
//     console.log("HALLLO")
//     res.send("HALLO") 
// })
// app.use("/", (req, res) => {
//     console.log("HALLLO")
//     res.send("HALLO") 
// })

app.listen(PORT, () => console.log(`server started on: ${PORT}`));
