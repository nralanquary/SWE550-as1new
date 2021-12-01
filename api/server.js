const express       = require('express');
const dbOperation   = require('./dbOperation');
const cors = require('cors');
const morgan = require('morgan');

const API_PORT = process.env.PORT || 5000; 
const app = express(); 

app.use(cors()); 
app.use(morgan('dev')); app.use(morgan('tiny')); 
app.use(express.json({
    'limit': '50mb'
})); 

app.use(express.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000
}));

app.get('/test', async (req, res) => {
    res.send('API is working v2')
})
app.post('/api', async (req, res) => { 
    console.log('called'); 
    try {
        const count = req.body.count;
        const employees = await dbOperation.getEmployees(parseInt(count));
        res.send(employees); 
    } catch (error) {
        res.status(500).send({error: error.message})
    }
}); 

app.post('/hello', async (req, res) => { 
    console.log('called'); 
    try {
        const employee = req.body;

      const newEmployee = await dbOperation.createEmployees(employee);

        console.log(newEmployee);
        res.send(newEmployee);   
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
   
}); 


dbOperation.connect();
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`)); 
