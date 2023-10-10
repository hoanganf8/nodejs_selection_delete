const CustomerController = require("../controllers/CustomerController");
var express = require("express");
var router = express.Router();

router.get("/", CustomerController.index);
router.post("/deletes", CustomerController.deletes);

module.exports = router;
