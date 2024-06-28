import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors({
  origin: 'https://codeworks-4syk.onrender.com', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.post('/execute-code', async (req, res) => {
    try {
      const { language, version, code, input } = req.body;
  
      const response = await axios.post(
        "https://emkc.org/api/v2/piston/execute",
        {
          language,
          version,
          files: [{ content: code }],
          stdin: input,
        }
      );
  
      let output = response.data.run.stdout;
      if (response.data.compile.stderr !== "") {
        output = `Error : ${response.data.compile.stderr}`;
      }
  
      res.status(200).json({ output });
    } catch (error) {
      console.error("Error running code:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT} port`);
});
