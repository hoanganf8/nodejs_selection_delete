const { Op } = require("sequelize");
const model = require("../models/index");
const moment = require("moment");
const Customer = model.Customer;

module.exports = {
  index: async (req, res) => {
    const customers = await Customer.findAll({
      limit: 10,
    });

    const msg = req.flash("msg");
    const msgType = req.flash("msg_type");

    res.render("customers/index", { customers, moment, msg, msgType });
  },

  deletes: async (req, res) => {
    const ids = req.body.delete_item;
    if (!ids?.length) {
      req.flash("msg", "Vui lòng chọn khách hàng cần xóa");
      req.flash("msg_type", "danger");
    } else {
      const status = await Customer.destroy({
        where: {
          id: {
            [Op.in]: ids,
          },
        },
      });

      if (status) {
        req.flash("msg", "Xóa khách hàng thành công");
      } else {
        req.flash("msg", "Xóa thất bại. Vui lòng thử lại sau");
        req.flash("msg_type", "danger");
      }
    }

    res.redirect("/customers");
  },
};
