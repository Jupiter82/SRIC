const ContactInfoModel = require("./contactInfo.model");

class ContactInfoService {
  transformRequest = (req, isEdit = false) => {
    const data = {
      ...req.body, // title, status, url, image, createdBy
    };
    if (!isEdit) {
      data.createdBy = req.authUser._id;
    } else {
      data.updatedBy = req.authUser._id;
    }
    return data;
  };

  createdContactInfo = async (data) => {
    try {
      const contactInfo = new ContactInfoModel(data);
      return await contactInfo.save(); //store
    } catch (exception) {
      throw exception;
    }
  };
  getContactInfoById = async (id) => {
    try {
      return await ContactInfoModel.findById(id);
    } catch (exception) {
      throw exception;
    }
  };
  updateContactInfo = async (id, data) => {
    try {
      let status = await ContactInfoModel.findByIdAndUpdate(id, { $set: data });
      return status;
    } catch (exception) {
      throw exception;
    }
  };
  deleteById = async (id) => {
    try {
      let response = await ContactInfoModel.findByIdAndDelete(id);
      if (!response) {
        throw {
          code: 404,
          message: "ContactInfo does not exist or already deleted.",
        };
      } else {
        return response;
      }
    } catch (exception) {
      throw exception;
    }
  };
  getAllContactInfos = async () => {
    try {
      return await ContactInfoModel.find();
    } catch (exception) {
      throw exception;
    }
  };
}

const contactInfoSvc = new ContactInfoService();
module.exports = contactInfoSvc;
