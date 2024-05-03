const router = require("express").Router();
const { USER_ROLES } = require("../../config/constants.config");
const authCheck = require("../../middlewares/auth.middleware");
const PermissionCheck = require("../../middlewares/rbac.middleware");
const { validator } = require("../../middlewares/validator.middleware");
const logoCtrl = require("./logo.controller");
const { logoCreateSchema } = require("./logo.request");
const uploader = require("../../middlewares/uploader.middleware");

// router.post('/',authCheck, PermissionCheck('admin'), "control")

//logo/view
router.get("/home", logoCtrl.listForHome)

// logo/post/dashboard
router
  .route("/")
  .post(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    uploader.single("image"),
    validator(logoCreateSchema),
    logoCtrl.createLogo
  )

  .get(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    logoCtrl.listAllLogos
  )
router.route("/:id")
  .get(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    logoCtrl.getLogoDetail
  )
  .put(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    uploader.single("image"),
    validator(logoCreateSchema),
    logoCtrl.updateById
  )
  .delete(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    logoCtrl.deleteById
  )
module.exports = router;
