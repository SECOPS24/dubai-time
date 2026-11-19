const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/time', (req, res) => {
  const now = new Date();
  const dubaiTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Dubai' }));
  res.json({
    time: dubaiTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: 'Asia/Dubai'
    }),
    date: dubaiTime.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'Asia/Dubai'
    }),
    timezone: 'Gulf Standard Time (GST, UTC+4)',
    iso: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dubai' })
  });
});

app.listen(PORT, () => {
  console.log(`Dubai Time app running on port ${PORT}`);
});
