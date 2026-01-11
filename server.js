require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Route to generate handwriting (free API placeholder)
app.post('/generate', async (req, res) => {
  try {
    const { text, font } = req.body;

    if (!text || !font) {
      return res.status(400).json({ error: "Text and font are required" });
    }

    // Free API call for testing
    const response = await axios.get(process.env.TEXT_API_URL);

    res.json({
      message: "Text received successfully!",
      originalText: text,
      font: font,
      generatedText: response.data // placeholder text
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

app.post('/generate', async (req, res) => {
   app.post('/generate', async (req, res) => {
    // 👇 Ye line paste karo yaha
    console.log(req.body); // frontend se kya aa raha, ye print hoga

    const { text, font } = req.body;

    if (!text || !font) {
        return res.status(400).json({ error: "Text and font required" });
    }

    // Placeholder text (abhi ke liye)
    const generatedText = [`${text} - Handwriting placeholder`];

    res.json({
        originalText: text,
        font: font,
        generatedText: generatedText
    });
});

    });


