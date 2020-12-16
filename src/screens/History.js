import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchHistory } from '../actions/firestoreActions';
import { Table } from 'react-bootstrap';
import Message from '../components/Message';
import { Link } from 'react-router-dom';

const History = ({ currentUser, fetchHistory, ordersHistory }) => {
  useEffect(() => {
    if (currentUser) {
      fetchHistory(currentUser);
    }
  }, [fetchHistory, currentUser]);
  return (
    <>
      <h1>History of Orders</h1>
      {ordersHistory && ordersHistory.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Order Details</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {ordersHistory.map((order) => (
              <tr key={order.id}>
                <td>{order.date}</td>
                <td>
                  {' '}
                  {order.cartItems.map((item) => (
                    <div key={item.product}>{`${item.qty} ${item.name}`}</div>
                  ))}
                </td>
                <td>{order.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Message>
          Your History is empty <Link to='/'>Go back</Link>
        </Message>
      )}
    </>
  );
};

const mapStateToProps = ({ auth, firestore }) => ({
  ordersHistory: firestore.history,
  currentUser: auth.currentUser,
});
const HistoryConnected = connect(mapStateToProps, {
  fetchHistory,
})(History);
export default HistoryConnected;
