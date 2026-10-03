// ============================================================
// server.js
// 一个最简单的 Hello World HTTP 服务器
// 浏览器访问时显示问候语 + 当前服务器时间
// ============================================================

const http = require('http');

// 服务器监听端口（可通过环境变量 PORT 覆盖）
const PORT = process.env.PORT || 3000;

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 只处理首页请求，其它路径返回 404
  if (req.url !== '/' && req.url !== '/index.html') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found');
    return;
  }

  // 获取当前服务器时间（服务器本地时间）
  const now = new Date();

  // 渲染 HTML 页面
  const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World！</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: -apple-system, "Segoe UI", "Microsoft YaHei", Arial, sans-serif;
      color: #fff;
    }
    .card {
      background: rgba(255, 255, 255, 0.15);
      border-radius: 16px;
      padding: 48px 64px;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(8px);
    }
    h1 {
      font-size: 28px;
      margin: 0 0 20px 0;
      font-weight: 600;
    }
    .time {
      font-size: 20px;
      color: #ffe66d;
      font-family: "Courier New", monospace;
      letter-spacing: 1px;
    }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello World！我是【KT 猫】，我的第一个 AI 开发的网站</h1>
    <p class="time">当前服务器时间：${now.toLocaleString('zh-CN', { hour12: false })}</p>
  </div>
</body>
</html>`;

  // 返回页面（Content-Type 为 HTML，UTF-8 编码）
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
});

// 启动服务器
server.listen(PORT, () => {
  console.log(`Hello World 服务器已启动：http://localhost:${PORT}`);
});
