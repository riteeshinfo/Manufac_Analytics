// src/App.js
import './styles.css';
import React, { useEffect, useState } from 'react';
import { Container, Table } from '@mantine/core';
import { processAgricultureData } from './Dataprocesser';

const App = () => {
  const [yearlyData, setYearlyData] = useState([]);
  const [cropStats, setCropStats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { yearlyData, cropStats } = processAgricultureData();
      setYearlyData(yearlyData);
      setCropStats(cropStats);
    };
    fetchData();
  }, []);

  return (
    <Container className="table-container">
      <h1>Agriculture Analysis</h1>

      <h2>Yearly Crop Production</h2>
      <Table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Crop with Maximum Production</th>
            <th>Crop with Minimum Production</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((data) => (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.maxProductionCrop}</td>
              <td>{data.minProductionCrop}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Crop Statistics (1950-2020)</h2>
      <Table>
        <thead>
          <tr>
            <th>Crop</th>
            <th>Average Yield</th>
            <th>Average Cultivation Area</th>
          </tr>
        </thead>
        <tbody>
          {cropStats.map((stat) => (
            <tr key={stat.crop}>
              <td>{stat.crop}</td>
              <td>{stat.averageYield}</td>
              <td>{stat.averageArea}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
