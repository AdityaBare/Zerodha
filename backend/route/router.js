const express = require('express')
const router = express.Router();
const {HoldingModel} = require('../model/HoldingModel');
const {PositionModel}=require("../model/PositionModel");
const {OrderModel} = require('../model/OrderModel');
const User = require('../model/UserModel');
const { Signup, Login } = require('../Controllers/AuthController');

// Post 
router.post('/signup', Signup);

router.post('/login',Login)

router.post("/sellholding", async (req, res) => {
  const { name } = req.body;

  try {
    const stock = await HoldingModel.findOne({ name });

    if (!stock) {
      return res.json({ message: "Stock not found",state :false });
    }

    await HoldingModel.deleteOne({ name }); 
  

    res.json({ message: "Stock sold successfully",state:true });
  } catch (error) {
    console.error("Error in /sellholding:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post('/newOrder', async (req, res) => {
  try {
    let { name, qty, price, mode } = req.body;
    qty = Number(qty);
    price = Number(price);


    const newOrder = new OrderModel({ name, qty, price, mode });
    await newOrder.save();

    let stock = await HoldingModel.findOne({ name });

    if (stock) {
      // Update existing holding
      const totalQty = stock.qty + qty;
      const totalInvestment = (stock.qty * stock.avg) + (qty * price);
      const newAvgPrice = totalInvestment / totalQty;

      const netPercent = ((price - newAvgPrice) / newAvgPrice) * 100;
      const formattedNet = `${netPercent >= 0 ? "+" : ""}${netPercent.toFixed(2)}%`;

      stock.qty = totalQty;
      stock.price = price;
      stock.avg = newAvgPrice;
      stock.net = formattedNet;
      stock.day = "00";
      stock.isLoss = netPercent < 0;

      await stock.save();
    } else {
      
      const newHolding = new HoldingModel({
        name,
        qty,
        price,
        avg: price,
        net: "+0.00%",
        day: "00", 
        isLoss: false,
      });

      await newHolding.save();
    }

    res.status(201).send("Order placed and holding updated.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});


// Get 



router.get("/user",  async (req, res) => {
  let email = req.cookies.email;

  let user = await User.findOne({email})
  res.json(user);
  
  
});


router.get('/allHoldings',async(req , res)=>{
    let fetchData = await HoldingModel.find({});
    res.json(fetchData);
})



router.get('/allPositions',async(req , res)=>{
    let fetchData = await PositionModel.find({});
    res.json(fetchData);
})




router.get("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  res.clearCookie("email", {
    httpOnly: false,
    secure: true,
    sameSite: "None",
  });
  res.status(200).json({ success: true, message: "Logged out" });
});

   




module.exports = router;
