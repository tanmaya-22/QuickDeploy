const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>QuickDeploy</title>

            <style>
                body{
                    font-family: Arial;
                    background:#0f172a;
                    color:white;
                    text-align:center;
                    padding-top:80px;
                }

                .card{
                    width:60%;
                    margin:auto;
                    background:#1e293b;
                    padding:30px;
                    border-radius:12px;
                    box-shadow:0 0 10px rgba(0,0,0,0.4);
                }

                h1{
                    color:#38bdf8;
                }

                .status{
                    color:#22c55e;
                    font-size:22px;
                    margin-top:20px;
                }

                .tools{
                    margin-top:30px;
                    line-height:2;
                }

                button{
                    padding:10px 20px;
                    border:none;
                    border-radius:8px;
                    background:#38bdf8;
                    color:black;
                    font-weight:bold;
                    cursor:pointer;
                    margin:10px;
                }
            </style>
        </head>

        <body>

            <div class="card">

                <h1>QuickDeploy DevOps Pipeline</h1>

                <p>
                    Automated CI/CD & Cloud Deployment Pipeline
                </p>

                <div class="status">
                    Deployment Successful
                </div>

                <div class="tools">
                    <p>GitHub Integration</p>
                    <p>Jenkins Automation</p>
                    <p>Docker Containerization</p>
                    <p>Kubernetes Deployment</p>
                    <p>Terraform Infrastructure</p>
                    <p>Prometheus Monitoring</p>
                    <p>Grafana Dashboard</p>
                </div>

                <button>Jenkins</button>
                <button>Grafana</button>
                <button>Prometheus</button>

            </div>

        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`QuickDeploy app running on port ${PORT}`);
});