const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
  <!doctype html>
  <html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My  First Website</title>
    <style>
      :root{
        --card-bg: rgba(255,255,255,0.10);
        --border: rgba(255,255,255,0.18);
        --text: #f7f7fb;
        --muted: rgba(255,255,255,0.75);
      }
      *{ box-sizing:border-box; }
      body{
        margin:0;
        min-height:100vh;
        font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        color: var(--text);
        display:flex;
        align-items:center;
        justify-content:center;
        padding: 28px;
        background:
          radial-gradient(800px 400px at 15% 20%, rgba(255,255,255,0.18), transparent 60%),
          radial-gradient(700px 350px at 85% 30%, rgba(255,255,255,0.14), transparent 60%),
          linear-gradient(135deg, #6d28d9, #2563eb, #0ea5e9);
      }

      .card{
        width:min(860px, 100%);
        background: var(--card-bg);
        border: 1px solid var(--border);
        border-radius: 18px;
        padding: 26px;
        backdrop-filter: blur(10px);
        box-shadow: 0 20px 60px rgba(0,0,0,0.25);
      }

      .top{
        display:flex;
        gap:16px;
        align-items:center;
        justify-content:space-between;
        flex-wrap:wrap;
      }

      .brand{
        display:flex;
        gap:12px;
        align-items:center;
      }

      .logo{
        width:44px;
        height:44px;
        border-radius: 14px;
        background: rgba(255,255,255,0.14);
        border: 1px solid rgba(255,255,255,0.22);
        display:grid;
        place-items:center;
        font-size: 20px;
      }

      h1{
        margin:0;
        font-size: 26px;
        letter-spacing: 0.2px;
      }

      .sub{
        margin: 6px 0 0 0;
        color: var(--muted);
        font-size: 14px;
      }

      .pill{
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid rgba(255,255,255,0.22);
        background: rgba(0,0,0,0.14);
        font-size: 13px;
        color: rgba(255,255,255,0.9);
      }

      .grid{
        margin-top: 18px;
        display:grid;
        grid-template-columns: 1.2fr 0.8fr;
        gap: 16px;
      }
      @media (max-width: 760px){
        .grid{ grid-template-columns: 1fr; }
      }

      .panel{
        background: rgba(0,0,0,0.14);
        border: 1px solid rgba(255,255,255,0.18);
        border-radius: 16px;
        padding: 16px;
      }

      .actions{
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        margin-top: 12px;
      }

      button, a.btn{
        border: 0;
        border-radius: 12px;
        padding: 10px 14px;
        font-weight: 600;
        cursor: pointer;
        text-decoration:none;
        display:inline-flex;
        align-items:center;
        gap:8px;
      }

      .btn-primary{
        background: white;
        color: #111827;
      }
      .btn-primary:hover{ filter: brightness(0.96); }

      .btn-ghost{
        background: rgba(255,255,255,0.12);
        color: white;
        border: 1px solid rgba(255,255,255,0.22);
      }
      .btn-ghost:hover{ background: rgba(255,255,255,0.16); }

      .kpi{
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }

      .stat{
        padding: 14px;
        border-radius: 14px;
        border: 1px solid rgba(255,255,255,0.18);
        background: rgba(255,255,255,0.08);
      }

      .stat .label{
        color: rgba(255,255,255,0.75);
        font-size: 12px;
      }
      .stat .value{
        margin-top: 6px;
        font-size: 16px;
        font-weight: 700;
      }

      code{
        background: rgba(0,0,0,0.25);
        padding: 3px 8px;
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.12);
        color: rgba(255,255,255,0.95);
      }

      footer{
        margin-top: 14px;
        color: rgba(255,255,255,0.70);
        font-size: 12px;
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap;
        gap:8px;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <div class="top">
        <div class="brand">
          <div class="logo">🚀</div>
          <div>
            <h1>FINAL YEAR PROJECT</h1>
            <p class="sub">Running on Docker + EC2 (CI/CD Pipeline)</p>
          </div>
        </div>
        <div class="pill">Status: <b style="margin-left:6px;">Online ✅</b></div>
      </div>

      <div class="grid">
        <div class="panel">
          <h2 style="margin:0 0 8px 0; font-size:18px;">Welcome 👋</h2>
          <p style="margin:0; color: rgba(255,255,255,0.82); line-height:1.5;">
            This page is served from an Express app inside a Docker container.
            Try the buttons below.
          </p>

          <div class="actions">
            <button class="btn-primary" onclick="sayHi()">✨ Click me</button>
            <a class="btn btn-ghost" href="/health">🩺 Health</a>
            <button class="btn-ghost" onclick="changeTheme()">🎨 Change theme</button>
          </div>

          <p style="margin:14px 0 0 0; color: rgba(255,255,255,0.75);">
            Tip: Visit <code>/health</code> to test the server quickly.
          </p>
        </div>

        <div class="panel">
          <div class="kpi">
            <div class="stat">
              <div class="label">Version</div>
              <div class="value" id="ver">v2</div>
            </div>
            <div class="stat">
              <div class="label">Server time</div>
              <div class="value" id="time">--:--</div>
            </div>
          </div>

          <div class="stat" style="margin-top:12px;">
            <div class="label">Deployment</div>
            <div class="value" style="font-size:14px; font-weight:600;">
              EC2: <code>52.90.155.54:3000</code>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <span>Made with ❤️ using Node.js + Express</span>
        <span id="msg">Ready.</span>
      </footer>
    </div>

    <script>
      function sayHi(){
        document.getElementById("msg").textContent = "Button clicked ✅";
        alert("Hello! Your website is working 🎉");
      }

      function tick(){
        const now = new Date();
        document.getElementById("time").textContent = now.toLocaleTimeString();
      }
      setInterval(tick, 1000);
      tick();

      let theme = 0;
      function changeTheme(){
        theme = (theme + 1) % 3;
        const body = document.body;

        if(theme === 0){
          body.style.background =
            "radial-gradient(800px 400px at 15% 20%, rgba(255,255,255,0.18), transparent 60%)," +
            "radial-gradient(700px 350px at 85% 30%, rgba(255,255,255,0.14), transparent 60%)," +
            "linear-gradient(135deg, #6d28d9, #2563eb, #0ea5e9)";
        } else if(theme === 1){
          body.style.background =
            "radial-gradient(800px 400px at 20% 25%, rgba(255,255,255,0.18), transparent 60%)," +
            "linear-gradient(135deg, #0f172a, #0ea5e9, #22c55e)";
        } else {
          body.style.background =
            "radial-gradient(700px 350px at 80% 25%, rgba(255,255,255,0.16), transparent 60%)," +
            "linear-gradient(135deg, #111827, #ef4444, #f59e0b)";
        }

        document.getElementById("msg").textContent = "Theme changed 🎨";
      }
    </script>
  </body>
  </html>
  `);
});

app.get("/health", (req, res) => res.send("VANAKAM NEENGA NALLA ERUKINGA"));

app.listen(3000, "0.0.0.0", () => {
  console.log("server running on port 3000");
});
