const router = require("express").Router();
const { USER_ROLES } = require("../../config/constants.config");
const authCheck = require("../../middlewares/auth.middleware");
const PermissionCheck = require("../../middlewares/rbac.middleware");
const contactInfoCtrl = require("./contactInfo.controller");

// router.post('/',authCheck, PermissionCheck('admin'), "control")

//contactInfo/view
router.get("/home", contactInfoCtrl.listForHome);

// contactInfo/post/dashboard
router
  .route("/")
  //upload-image
  .post(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    contactInfoCtrl.createContactInfo
  )
  .get(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    contactInfoCtrl.listAllContactInfos
  );

router
  .route("/:id")
  .get(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    contactInfoCtrl.getContactInfoDetail
  )

  .put(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    contactInfoCtrl.updateById
  )

  .delete(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    contactInfoCtrl.deleteById
  );
module.exports = router;
