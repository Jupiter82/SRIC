const router = require("express").Router();
const { USER_ROLES } = require("../../config/constants.config");
const authCheck = require("../../middlewares/auth.middleware");
const PermissionCheck = require("../../middlewares/rbac.middleware");
const { validator } = require("../../middlewares/validator.middleware");
const testimonialCtrl = require("./testimonial.controller");
const { testimonialCreateSchema } = require("./testimonial.request");
const uploader = require("../../middlewares/uploader.middleware");

// router.post('/',authCheck, PermissionCheck('admin'), "control")

//testimonial/view
router.get("/home", testimonialCtrl.listForHome)

// testimonial/post/dashboard
router
  .route("/")
  //upload-image
  .post(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    uploader.single("image"),
    validator(testimonialCreateSchema),
    testimonialCtrl.createTestimonial
  )

  .get(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    testimonialCtrl.listAllTestimonials
  )
router.route("/:id")
  .get(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    testimonialCtrl.getTestimonialDetail
  )
  //upload
  .put(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    uploader.single("image"),
    validator(testimonialCreateSchema),
    testimonialCtrl.updateById
  )
  //delete
  .delete(
    authCheck,
    PermissionCheck(USER_ROLES.superadmin),
    testimonialCtrl.deleteById
  )
module.exports = router;
