const router = require("express").Router();
const { USER_ROLES } = require("../../config/constants.config");
const authCheck = require("../../middlewares/auth.middleware");
const PermissionCheck = require("../../middlewares/rbac.middleware");
const { validator } = require("../../middlewares/validator.middleware");
const serviceCtrl = require("./service.controller");
const { serviceCreateSchema } = require("./service.request");
const uploader = require("../../middlewares/uploader.middleware");

// router.post('/',authCheck, PermissionCheck('admin'), "control")

//service/view
router.get("/home", serviceCtrl.listForHome)

// service/post/dashboard
router
  .route("/")
  //upload-image
  .post(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    uploader.single("image"),
    validator(serviceCreateSchema),
    serviceCtrl.createService
  )

  .get(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    serviceCtrl.listAllServices
  )
router.route("/:id")
  .get(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    serviceCtrl.getServiceDetail
  )
  //upload
  .put(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    uploader.single("image"),
    validator(serviceCreateSchema),
    serviceCtrl.updateById
  )
  //delete
  .delete(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    serviceCtrl.deleteById
  )
module.exports = router;
