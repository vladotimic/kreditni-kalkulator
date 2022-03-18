import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { getAllLoans, deleteLoan } from '../../store/features/loanAsyncActions';

const ListLoans = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loans, loading } = useSelector((state) => state.loan);

  useEffect(() => {
    if (!loading) {
      dispatch(getAllLoans());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteHandle = (id) => {
    dispatch(deleteLoan(id));
  };
  const updateHandle = (id, data) => {
    navigate(`/update/${id}`, { state: data });
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Kreditni iznos</th>
          <th>Kamatna stopa (u %)</th>
          <th>Rok otplate (u godinama)</th>
          <th>Mjesečni anuitet</th>
          <th>Izmjeni / Izbriši</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((item) => {
          const { _id, amount, rate, term, payments } = item;
          return (
            <tr key={_id}>
              <td>{amount}</td>
              <td>{rate}</td>
              <td>{term}</td>
              <td>{payments}</td>
              <td className="d-flex justify-content-center">
                <Button
                  className="mx-1"
                  onClick={() =>
                    updateHandle(_id, { amount, rate, term, payments })
                  }
                >
                  <i className="fa-solid fa-pen-to-square"></i>
                </Button>
                <Button variant="danger" onClick={() => deleteHandle(_id)}>
                  <i className="fa-solid fa-trash-can"></i>
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ListLoans;
