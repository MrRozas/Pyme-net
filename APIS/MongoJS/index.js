const axios = require('axios');
const csv = require('csv-parser');

axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRnVq2kPzzkUsqjgYqQ2Ckbeyj1oRNQQm8vrL9tb3lM3zkmcVEAQITVDZ1uvBNon2abk_v_I7ltMu89/pub?gid=1870803325&single=true&output=csv')
  .then(response => {
    const results = [];

    response.data
      .pipe(csv())
      .on('data', data => {
        // Process each row of the CSV data
        results.push(data);
      })
      .on('end', () => {
        // CSV parsing is complete, do further processing here
        console.log(results);
      });
  })
  .catch(error => {
    console.error('Error reading CSV file:', error);
  });