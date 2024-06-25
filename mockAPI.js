// mockAPI.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const steps = [
  {
    title: 'How was your week overall?',
    options: [
      { icon: '👍', label: 'Good', value: 'good' },
      { icon: '🤔', label: 'Okay', value: 'okay' },
      { icon: '👎', label: 'Bad', value: 'bad' }
    ]
  },
  {
    title: 'How was your month overall?',
    options: [
      { icon: '👍', label: 'Good', value: 'good' },
      { icon: '🤔', label: 'Okay', value: 'okay' },
      { icon: '👎', label: 'Bad', value: 'bad' }
    ]
  },
  {
    title: 'How was your year overall?',
    options: [
      { icon: '👍', label: 'Good', value: 'good' },
      { icon: '🤔', label: 'Okay', value: 'okay' },
      { icon: '👎', label: 'Bad', value: 'bad' }
    ]
  },
  {
    title: 'How was your decade overall?',
    options: [
      { icon: '👍', label: 'Good', value: 'good' },
      { icon: '🤔', label: 'Okay', value: 'okay' },
      { icon: '👎', label: 'Bad', value: 'bad' }
    ]
  },
];

app.get('/steps', (req, res) => {
  res.json(steps);
});

app.post('/submit', (req, res) => {
  console.log('Received answers:', req.body);
  res.json({ message: 'Submission successful' });
});

app.listen(3001, () => {
  console.log('Mock API running on http://localhost:3001');
});
