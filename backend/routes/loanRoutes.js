const express = require('express');
const {
  getAllLoans,
  saveLoan,
  getSingleLoan,
  updateLoan,
  deleteLoan,
} = require('../controllers/loanController');

const router = express.Router();

router.route('/').get(getAllLoans).post(saveLoan);
router.route('/:id').get(getSingleLoan).patch(updateLoan).delete(deleteLoan);

module.exports = router;
