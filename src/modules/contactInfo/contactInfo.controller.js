const contactInfoSvc = require("./contactInfo.service");
const ContactInfoModel = require("../contactInfo/contactInfo.model");

class ContactInfoController {
  createContactInfo = async (req, res, next) => {
    try {
      const data = contactInfoSvc.transformRequest(req);
      const success = await contactInfoSvc.createdContactInfo(data);
      res.json({
        result: success,
        message: "ContactInfo stored successfully",
        meta: null,
      });
    } catch (exception) {
      console.log("ContactInfoCreate", exception);
      next(exception);
    }
  };
  listAllContactInfos = async (req, res, next) => {
    try {
      const data = await ContactInfoModel.find({});
      console.log(data);
      res.json({
        result: data,
        message: "ContactInfos Fetched",
      });
    } catch (exception) {
      console.log(exception);
      next(exception);
    }
  };
  getContactInfoDetail = async (req, res, next) => {
    try {
      const data = await contactInfoSvc.getContactInfoById(req.params.id);
      if (!data) {
        throw { code: 404, message: "COntactInfo does not exists" };
      } else {
        res.json({
          result: data,
          message: "ContactInfoDetail Fetched",
          meta: null,
        });
      }
    } catch (exception) {
      next(exception);
    }
  };
  updateById = async (req, res, next) => {
    try {
      const data = contactInfoSvc.transformRequest(req);
      const updatedContactInfo = await contactInfoSvc.updateContactInfo(
        req.params.id,
        data
      );
      if (!updatedContactInfo) {
        return res.status(404).json({ message: "Contact info not found" });
      }
      res.json({
        result: updatedContactInfo,
        message: "ContactInfo updated successfully",
      });
    } catch (exception) {
      console.log("ContactInfoUpdate", exception);
      next(exception);
    }
  };
  deleteById = async (req, res, next) => {
    try{
      let response = await contactInfoSvc.deleteById(req.params.id)
      if(!response){
        throw {code:400, message: "Problem while deleting banner"}
      }
      else{
        res.json({
          result:response,
          message:"ContactInfo Deleted successfully",
          meta: null
        })
      }
    }catch(exception){
      console.log("deleteById",exception);
      next(exception)
    }
  };
  listForHome = async (req, res, next) =>{
    try {
        const data = await contactInfoSvc.getAllContactInfos();
        if(!data){
            throw{code:400, message:"Empty ContactInfo list"}
        }
        res.json({
          result: data,
          message: "ContactInfo Fetched",
          meta: null
        });
      } catch (exception) {
        console.log(exception);
        next(exception);
      }
  }
}

const contactInfoCtrl = new ContactInfoController();
module.exports = contactInfoCtrl;
