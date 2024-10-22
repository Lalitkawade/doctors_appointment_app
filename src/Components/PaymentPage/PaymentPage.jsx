import React, { useState } from 'react';
import PaymentComponent from './PaymentComponent'; // Import the PaymentComponent
import './PaymentPage.css'; // Optional: Create a CSS file for styling
const PaymentPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [isPaymentComponentVisible, setIsPaymentComponentVisible] = useState(false); // State to control visibility of PaymentComponent
  const handlePayment = () => {
    // Validate the user information before showing the PaymentComponent
    if (!name || !email || !phoneNo) {
      alert('Please fill in all fields.');
      return;
    }
    setIsPaymentComponentVisible(true); // Show PaymentComponent
  };
  if (isPaymentComponentVisible) {
    return (
      <PaymentComponent
        name={name} 
        email={email} 
        phoneNo={phoneNo} 
        setIsPaymentComponentVisible={setIsPaymentComponentVisible} // Pass the setter function to the PaymentComponent
      />
    );
  }
  return (
    <div className="payment-page">
      <h1>Complete Your Payment</h1>
      
      <div className="payment-form">
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <label>
          Phone No:
          <input 
            type="tel" 
            value={phoneNo} 
            onChange={(e) => setPhoneNo(e.target.value)} 
            required 
          />
        </label>
        <label>
          Amount: 
          <span style={{ fontWeight: 'bold' }}>Rs 1</span>
        </label>
        <button 
          onClick={handlePayment} 
          style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Pay with Razorpay
        </button>
      </div>
    </div>
  );
};
export default PaymentPage;