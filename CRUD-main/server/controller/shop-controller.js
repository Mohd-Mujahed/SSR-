import Shop from "../schema/shop-schema.js";

//add shop
export const addShop = async (req, res) => {
  const shop = req.body;
  const newShop = new Shop(shop);
  try {
    await newShop.save();
    res.status(201).json(newShop);
  } catch (err) {
    res.status(409).json(err);
  }
};

//fetch all shops
export const getShops = async (req, res) => {
  try {
    const shops = await Shop.find();
    res.status(200).json(shops);
  } catch (err) {
    res.status(404).json(err);
  }
};

//fetch a shop
export const getShop = async (req, res) => {
  try {
    const shop = await Shop.findOne({ _id: req.params.id });
    // const shop = await Shop.findById(req.params.id);
    res.status(200).json(shop);
  } catch (err) {
    res.status(404).json(err);
  }
};

// update shop
export const editShop = async (req, res) => {
  console.log('controller',req.body)
  try {
    await Shop.findOne({ _id: req.params.id })
      .exec()
      .then(async (shop) => {
        if (!shop) {
          return res.status(404).send(`Shop record not found`);
        }

        const updates = Object.keys(req.body);

        updates.forEach((update) => (shop[update] = req.body[update]));

        await shop.save();
        res.status(200).json(shop);
      });
  } catch (err) {
    res.status(404).json(err);
    console.log(err);
  }
};


// export const editShop  = async (request, response) => {
//   let shop = request.body;

//   const editUser = new Shop(shop);
//   try{
//       await Shop.updateOne({_id: request.params.id}, editUser);
//       response.status(201).json(editUser);
//   } catch (error){
//       response.status(409).json({ message: error.message});     
//   }
// }

//delete shop
export const deleteShop = async (req, res) => {
  try {
    await Shop.deleteOne({ _id: req.params.id });
    res.status(200).json(`Deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get shops near me
export const getShopsNearMe = async (req, res) => {
  // Extract the current location coordinates and range(in km) from the request body
  const range = req.body.range;
  const coordinates=req.body.location.coordinates;
  console.log(req.body.location.coordinates,coordinates, range )

  try {
    console.log('getsopnearme')

    // Find all shops within the specified range from the current location
    const shops = await Shop.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates,
          },
          $maxDistance: range ,
        },
      },
    }).exec();
    

    

    // Return the shops if there are any
    if (shops.length > 0) {
      console.log('getsopnearme',shops)
      res.json(shops);
    } else {
      // Return an error message if there are no shops within the specified range
      res
      console.log('error getting')
        .status(404)
        .json({ message: "No shops found within the specified range." });
    }
  } catch (error) {
    

    res.status(500).json({ message: error.message });
  }
};
