const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/homework', async (req, res) => {
  try {
    const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbx668NsdRR9YxhqQvULobg_NgrUByeerzk6in9jO-TfqX_IZ9qNYUxshGwAK3V0yoUa8w/exec';

    const response = await fetch(googleScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
