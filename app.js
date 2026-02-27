const express = require("express");
const app = express();

// Home page (simple website)
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Small Website</title>
        <style>
          body { font-family: Arial; padding: 40px; }
          .box { max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 12px; }
          h1 { margin-top: 0; }
          button { padding: 10px 14px; cursor: pointer; }
        </style>
      </head>
      <body>
        <div class="box">
          <h1>Hello 👋</h1>
          <p>This is my small website running on Docker + EC2.</p>
          <button onclick="alert('Button clicked!')">Click me</button>
          <p style="margin-top:16px;color:gray;">Version: 1</p>
        </div>
      </body>
    </html>
  `);
});

// Health check (helps testing)
app.get("/health", (req, res) => res.send("OK"));

app.listen(3000, "0.0.0.0", () => {
  console.log("server running on port 3000");
});
