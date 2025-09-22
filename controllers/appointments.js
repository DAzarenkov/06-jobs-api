const Appointment = require("../models/Appointment");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const getAllAppointments = async (req, res) => {
  res.send("Get All Appointments");
};

const getAppointment = async (req, res) => {
  res.send("Get Single Appointment");
};

const createAppointment = async (req, res) => {
  req.body.patient = req.user.userId;
  const appointment = await Appointment.create(req.body);
  res.status(StatusCodes.CREATED).json({ appointment });
};

const updateAppointment = async (req, res) => {
  res.send("Update Appointment");
};

const deleteAppointment = async (req, res) => {
  res.send("Delete Appointment");
};

module.exports = {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
