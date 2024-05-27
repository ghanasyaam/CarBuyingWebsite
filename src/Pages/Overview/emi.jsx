import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTenure, setLoanTenure] = useState(12);
  const [loanEMI, setLoanEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const chartRef = useRef(null);
  const myChartRef = useRef(null);

  useEffect(() => {
    calculateEMI();
  }, [loanAmount, interestRate, loanTenure]);

  const checkValues = () => {
    const regexNumber = /^[0-9]+$/;
    const regexDecimalNumber = /^(\d*\.)?\d+$/;

    if (!loanAmount.toString().match(regexNumber)) {
      setLoanAmount(10000);
    }

    if (!loanTenure.toString().match(regexNumber)) {
      setLoanTenure(12);
    }

    if (!interestRate.toString().match(regexDecimalNumber)) {
      setInterestRate(7.5);
    }
  };

  const calculateEMI = () => {
    checkValues();
    const interest = interestRate / 12 / 100;
    const emi = loanAmount * interest * (Math.pow(1 + interest, loanTenure) / (Math.pow(1 + interest, loanTenure) - 1));
    updateData(emi);
  };

  const updateData = (emi) => {
    const totalAmt = Math.round(loanTenure * emi);
    const totalInt = Math.round(totalAmt - loanAmount);

    setLoanEMI(Math.round(emi));
    setTotalAmount(totalAmt);
    setTotalInterest(totalInt);

    if (myChartRef.current) {
      updateChart(totalInt);
    } else {
      displayChart(totalInt);
    }
  };

  const displayChart = (totalInterestPayable) => {
    const ctx = chartRef.current.getContext('2d');
    myChartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Total Interest', 'Principal Loan Amount'],
        datasets: [
          {
            data: [totalInterestPayable, loanAmount],
            backgroundColor: ['#e63946', '#15577e'],
            borderWidth: 0,
          },
        ],
      },
    });
  };

  const updateChart = (totalInterestPayable) => {
    myChartRef.current.data.datasets[0].data[0] = totalInterestPayable;
    myChartRef.current.data.datasets[0].data[1] = loanAmount;
    myChartRef.current.update();
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    calculateEMI();
  };

  return (
    <div className="loan-calculator">
      <div className="top">
        <h2>Loan Calculator</h2>
        <form onSubmit={handleCalculate}>
          <div className="group">
            <div className="title">Amount</div>
            <input
              type="text"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="loan-amount"
            />
          </div>

          <div className="group">
            <div className="title">Interest Rate</div>
            <input
              type="text"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="interest-rate"
            />
          </div>

          <div className="group">
            <div className="title">Tenure (in months)</div>
            <input
              type="text"
              value={loanTenure}
              onChange={(e) => setLoanTenure(e.target.value)}
              className="loan-tenure"
            />
          </div>

          <button type="submit" className="calculate-btn">Calculate</button>
        </form>
      </div>

      <div className="result">
        <div className="left">
          <div className="loan-emi">
            <h3>Loan EMI</h3>
            <div className="value">{loanEMI}</div>
          </div>

          <div className="total-interest">
            <h3>Total Interest Payable</h3>
            <div className="value">{totalInterest}</div>
          </div>

          <div className="total-amount">
            <h3>Total Amount</h3>
            <div className="value">{totalAmount}</div>
          </div>
        </div>

        <div className="right">
          <canvas ref={chartRef} id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
