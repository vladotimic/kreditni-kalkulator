const { StatusCodes } = require('http-status-codes');
const Loan = require('../models/Loan');
const { NotFound } = require('../errors');

const getAllLoans = async (req, res) => {
  const loans = await Loan.find({});
  res.status(StatusCodes.OK).json(loans);
};

const saveLoan = async (req, res) => {
  const { amount, rate, term, payments } = req.body;
  const loan = await Loan.create({ amount, rate, term, payments });
  res.status(StatusCodes.CREATED).json(loan);
};

const getSingleLoan = async (req, res) => {
  const { id } = req.params;
  const loan = await Loan.findById(id);
  if (!loan) {
    throw new NotFound(`There is no loan saved with id: ${id}`);
  }
  res.status(StatusCodes.OK).json(loan);
};

const updateLoan = async (req, res) => {
  const { id } = req.params;
  const { amount, rate, term, payments } = req.body;
  const loan = await Loan.findById(id);
  if (!loan) {
    throw new NotFound(`There is no loan saved with id: ${id}`);
  }

  loan.amount = amount;
  loan.rate = rate;
  loan.term = term;
  loan.payments = payments;

  loan.save();
  res.status(StatusCodes.OK).json(loan);
};

const deleteLoan = async (req, res) => {
  const { id } = req.params;
  const loan = await Loan.findById(id);
  if (!loan) {
    throw new NotFound(`There is no loan saved with id: ${id}`);
  }
  loan.remove();
  res.status(StatusCodes.OK).json({ message: 'Loan removed' });
};

module.exports = {
  getAllLoans,
  saveLoan,
  getSingleLoan,
  updateLoan,
  deleteLoan,
};
