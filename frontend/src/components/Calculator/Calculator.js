import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import StyledCalculator from './StyledCalculator';
import { calculatePayment, removeNonNumeric, decimalNum } from '../../utils';
import { saveLoan, updateLoan } from '../../store/features/loanAsyncActions';

const Calculator = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [initState, setInitState] = useState({
    principal: 0,
    interestRate: 0,
    year: 0,
    annuity: 0,
    calculated: false,
    error: false,
  });

  useEffect(() => {
    if (location.state && id) {
      const { amount, rate, term, payments } = location.state;
      setInitState({
        ...initState,
        principal: amount,
        interestRate: rate,
        year: term,
        annuity: payments,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  const handleCalculate = (e) => {
    e.preventDefault();

    if (initState.principal < 1_000 || initState.principal > 1_000_000) {
      setInitState({
        ...initState,
        annuity: 0,
        calculated: false,
        error: true,
      });
      return;
    }
    if (initState.interestRate < 1 || initState.interestRate >= 100) {
      setInitState({
        ...initState,
        annuity: 0,
        calculated: false,
        error: true,
      });
      return;
    }
    if (initState.year < 1 || initState.year > 40) {
      setInitState({
        ...initState,
        annuity: 0,
        calculated: false,
        error: true,
      });
      return;
    }

    setInitState({
      ...initState,
      annuity: calculatePayment(
        initState.principal,
        initState.interestRate,
        initState.year
      ),
      calculated: true,
    });
  };

  const handleChange = (e) => {
    if (e.target.name === 'principal') {
      if (e.target.value < 1_000 || e.target.value > 1_000_000) {
        setInitState({
          ...initState,
          [e.target.name]: removeNonNumeric(e.target.value),
          error: true,
        });
      } else {
        setInitState({
          ...initState,
          [e.target.name]: removeNonNumeric(e.target.value),
          error: false,
        });
      }
    }
    if (e.target.name === 'interestRate') {
      if (e.target.value < 1 || e.target.value >= 100) {
        setInitState({
          ...initState,
          [e.target.name]: decimalNum(e.target.value),
          error: true,
        });
      } else {
        setInitState({
          ...initState,
          [e.target.name]: decimalNum(e.target.value),
          error: false,
        });
      }
    }
    if (e.target.name === 'year') {
      if (e.target.value < 1 || e.target.value > 40) {
        setInitState({
          ...initState,
          [e.target.name]: removeNonNumeric(e.target.value),
          error: true,
        });
      } else {
        setInitState({
          ...initState,
          [e.target.name]: removeNonNumeric(e.target.value),
          error: false,
        });
      }
    }
    // setInitState({
    //   ...initState,
    //   [e.target.name]: removeNonNumeric(e.target.value),
    // });
  };

  const handleSave = (e) => {
    e.preventDefault();

    const payload = {
      amount: Number(initState.principal),
      rate: Number(initState.interestRate),
      term: Number(initState.year),
      payments: Number(initState.annuity),
    };

    if (location.pathname.startsWith('/update/') && id) {
      payload.id = id;
      dispatch(updateLoan(payload));
      navigate('/');
    } else {
      dispatch(saveLoan(payload));
      setInitState({
        principal: 0,
        interestRate: 0,
        year: 0,
        annuity: 0,
        calculated: false,
      });
    }
  };

  return (
    <StyledCalculator>
      <form onSubmit={handleCalculate}>
        <div className="input-group">
          <label htmlFor="principal">Kreditni iznos:</label>
          <input
            type="text"
            id="principal"
            name="principal"
            value={initState.principal}
            onChange={handleChange}
            onFocus={(e) => e.target.select()}
            style={{ color: `${initState.error ? 'red' : 'black'}` }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="initerestRate">Kamatna stopa (u %):</label>
          <input
            type="text"
            id="interestRate"
            name="interestRate"
            value={initState.interestRate}
            onChange={handleChange}
            onFocus={(e) => e.target.select()}
            style={{ color: `${initState.error ? 'red' : 'black'}` }}
          />
        </div>
        <div className="input-group">
          <label htmlFor="year">Rok otplate (u godinama):</label>
          <input
            type="text"
            id="year"
            name="year"
            value={initState.year}
            onChange={handleChange}
            onFocus={(e) => e.target.select()}
            style={{ color: `${initState.error ? 'red' : 'black'}` }}
          />
        </div>

        <p>
          <span>Mjesečni anuitet:</span>
          <span className="payments">{initState.annuity}</span>
        </p>
        <div className="button-group">
          <button>Izračunaj</button>
          {initState.calculated && (
            <button onClick={handleSave}>Sačuvaj</button>
          )}
        </div>
      </form>
    </StyledCalculator>
  );
};

export default Calculator;
