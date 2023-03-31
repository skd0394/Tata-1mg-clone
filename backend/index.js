
const express = require("express");
const { dbConnection } = require("./dbConnection");
const { adminRouter } = require("./Routes/adminRoutes");
const { getRouter } = require("./Routes/get_products.route");
const {UserRouter} = require("./Routes/user.route")
const { CartRouter } = require("./Routes/cart_product.route");

require("dotenv").config()

const app = express()

app.use(express.json())
app.use("/", getRouter)
app.use("/user", UserRouter);
app.use("/cart",CartRouter)

const cors = require("cors")
app.use(cors())
app.use("/",getRouter)
app.use("/admin",adminRouter)

app.listen(process.env.PORT,dbConnection);

