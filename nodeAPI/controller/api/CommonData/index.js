/**
 * Author : Bharat Jograna
 * Created : 20 July 2022
 * File Comment : /Profile api controller file...
*/
const express = require('express');
const router = express.Router();
const paginate = require('jw-paginate');
var sql = require('../../connection');

let Response = {
  Data: [],
  ReturnMsg: "",
  ReturnCode: 1,
  ErrorCode: 0
}

// @route   post Profile/Add
// @desc    Return jwt token
// @access  Private
router.post('/Add', (req, res) => {

  // const { errors, isValid } = validateCity.validateAddCityInput(req.body);
  let request = req.body;

  try {
    sql.query("SELECT * FROM profile_table", function (err, result) {
      if (err) {
        Response.ReturnMsg = err + "";
        Response.ReturnCode = 0;
        Response.ErrorCode = 1203;
        return res.status(400).send(Response);
      }
      else {
        request.ProfileID = result.length + 1;
        sql.query("INSERT INTO profile_table set ?", request, function (err, result) {

          if (err) {
            Response.ReturnMsg = err + "";
            Response.ReturnCode = 0;
            Response.ErrorCode = 1003;
            return res.status(400).send(Response);
          }
          else {
            Response.Data = JSON.parse(JSON.stringify(request.UserID));
            Response.ReturnMsg = "Success";
            Response.ReturnCode = 9;
            Response.ErrorCode = 1001;
            return res.status(200).json(Response);
          }
        });
      }
    });
  }
  catch (err) {
    Response.ReturnMsg = err + "";
    Response.ReturnCode = 1;
    Response.ErrorCode = 1002;
    return res.status(404).send(Response);
  }
}
);

// @route   post Profile/Edit
// @desc    Return jwt token
// @access  Private
router.put('/Edit', (req, res) => {

  // const { errors, isValid } = validateCity.validateAddCityInput(req.body);

  try {
    sql.query("UPDATE profile_table SET profile_pic = ?, profile_name = ?, profile_title = ?, profile_context = ?, ctegory_name = ? WHERE profileID = ?",
      [req.body.profile_pic, req.body.profile_name, req.body.profile_title, req.body.profile_context, req.body.ctegory_name,req.body.profileID],

      function (err, result) {

        if (err) {
          Response.ReturnMsg = err + "";
          Response.ReturnCode = 0;
          Response.ErrorCode = 1403;
          return res.status(400).send(Response);
        }
        else {
          Response.Data = JSON.parse(JSON.stringify(result.insertId));
          Response.ReturnMsg = "Success";
          Response.ReturnCode = 9;
          Response.ErrorCode = 1401;
          return res.status(200).json(Response);
        }
      });
  }
  catch (err) {
    Response.ReturnMsg = err + "";
    Response.ReturnCode = 1;
    Response.ErrorCode = 1402;
    return res.status(404).send(Response);
  }
}
);

// @route   post Profile/Delete
// @desc    Return jwt token
// @access  Private
router.delete('/Delete', (req, res) => {

  // const { errors, isValid } = validateCity.validateAddCityInput(req.body);

  var Reqdata = [req.body.SectionID]

  try {
    sql.query("DELETE FROM profile_table WHERE profileID = ?", [Reqdata], function (err, result) {

      if (err) {
        Response.ReturnMsg = err + "";
        Response.ReturnCode = 0;
        Response.ErrorCode = 1603;
        return res.status(400).send(Response);
      }
      else {
        Response.Data = JSON.parse(JSON.stringify(result.insertId));
        Response.ReturnMsg = "Success";
        Response.ReturnCode = 9;
        Response.ErrorCode = 1601;
        return res.status(200).json(Response);
      }
    });
  }
  catch (err) {
    Response.ReturnMsg = err + "";
    Response.ReturnCode = 1;
    Response.ErrorCode = 1602;
    return res.status(404).send(Response);
  }
}
);

// @route   post Profile/List
// @desc    Return jwt token
// @access  Private
router.get('/Profiles', (req, res) => {

  try {
    sql.query("SELECT * FROM profile_list", function (err, result) {

      if (err) {
        Response.ReturnMsg = err + "";
        Response.ReturnCode = 0;
        Response.ErrorCode = 1803;
        return res.status(400).send(Response);
      }
      else {
        Response.Data = JSON.parse(JSON.stringify(result));
        Response.ReturnMsg = "Success";
        Response.ReturnCode = 9;
        Response.ErrorCode = 1801;
        return res.status(200).json(Response);
      }
    });
  }
  catch (err) {
    Response.ReturnMsg = err + "";
    Response.ReturnCode = 1;
    Response.ErrorCode = 1802;
    return res.status(404).send(Response);
  }
}
);

// @route   post Catagory/List
// @desc    Return jwt token
// @access  Private
router.get('/Category', (req, res) => {

  try {
    sql.query("SELECT * FROM category_list", function (err, result) {

      if (err) {
        Response.ReturnMsg = err + "";
        Response.ReturnCode = 0;
        Response.ErrorCode = 1903;
        return res.status(400).send(Response);
      }
      else {
        Response.Data = JSON.parse(JSON.stringify(result));
        Response.ReturnMsg = "Success";
        Response.ReturnCode = 9;
        Response.ErrorCode = 1901;
        return res.status(200).json(Response);
      }
    });
  }
  catch (err) {
    Response.ReturnMsg = err + "";
    Response.ReturnCode = 1;
    Response.ErrorCode = 1902;
    return res.status(404).send(Response);
  }
}
);

module.exports = router;
