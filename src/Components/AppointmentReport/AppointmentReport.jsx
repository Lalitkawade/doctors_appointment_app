import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import SidebarSection from '../Sidebar/SidebarSection';
import "./AppointmentReport.css"

// Register necessary components
Chart.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);
const AppointmentReport = () => {
  const [reportType, setReportType] = useState('daily');
  // Sample data for reports
  const reports = {
    daily: {
      labels: ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
      patientData: [5, 8, 3, 6, 7, 2, 5, 8, 4],
      doctorData: [3, 4, 2, 5, 6, 1, 3, 5, 2],
    },
    weekly: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      patientData: [20, 25, 30, 15, 22, 18, 24],
      doctorData: [12, 15, 10, 8, 20, 14, 16],
    },
    monthly: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      patientData: [100, 120, 140, 130, 150, 110, 160, 170, 180, 190, 200, 210],
      doctorData: [40, 45, 50, 55, 60, 50, 55, 70, 75, 80, 85, 90],
    },
    yearly: {
      labels: ['2020', '2021', '2022', '2023'],
      patientData: [500, 600, 700, 800],
      doctorData: [200, 220, 250, 300],
    },
  };
  // Prepare the data for the chart
  const data = {
    labels: reports[reportType].labels.flatMap(label => [label, label]), // Duplicate labels for grouping
    datasets: [
      {
        label: 'Patients',
        data: reports[reportType].patientData.flatMap(data => [data, null]), // Null to create space for Doctors
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Doctors',
        data: reports[reportType].doctorData.flatMap(data => [null, data]), // Null to create space for Patients
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  // Chart options
  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time/Days',
        },
        ticks: {
          autoSkip: false,
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const datasetLabel = tooltipItem.dataset.label || '';
            const dataPoint = tooltipItem.raw || 0; // Get the data point value
            return `${datasetLabel}: ${dataPoint}`; // Format the tooltip text
          },
        },
      },
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  return (
    <div className="report-doctor-container row">
      <SidebarSection />
      <div className="col-sm-9">
        <div className="content">
          <h2>Appointment Reports</h2>
          <div>
            <button className='btn-report'  onClick={() => setReportType('daily')}>Daily Report</button>
            <button className='btn-report' onClick={() => setReportType('weekly')}>Weekly Report</button>
            <button className='btn-report' onClick={() => setReportType('monthly')}>Monthly Report</button>
            <button className='btn-report' onClick={() => setReportType('yearly')}>Yearly Report</button>
          </div>
          <Bar data={data} options={options} />
        </div>
      </div>
    </div>
  );
};
export default AppointmentReport;