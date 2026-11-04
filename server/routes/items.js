const router = require('express').Router();
const Item = require('../models/Item');
router.get("/", async (req, res) => res.json(await Item.find()));
router.post("/", async (req, res) => res.json(await Item.create(req.body)));
router.delete("/:id", async (req, res) => res.json(await Item.findByIdAndDelete(req.params.id)));
router.put("/:id", async (req, res) => {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
});
router.get("/:id", async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.json(item);
});
module.exports = router;
