const express = require('express')
const path = require('path');
const app = express()
const port = 3000

const MongoClient = require('mongodb').MongoClient
const url = "mongodb+srv://aaditya-1219:mKYPr7BkweCQYtWv@cluster0.tllkell.mongodb.net/"

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/dept', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dept.html'));
});

app.get('/contact', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/dept/civil', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'civil.html'));
});
app.get('/dept/mech', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mech.html'));
});
app.get('/dept/cse', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cse.html'));
});
app.get('/dept/eln', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'eln.html'));
});
app.get('/dept/ele', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ele.html'));
});
app.get('/dept/it', async(req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'it.html'));
}); 

app.get('/:deptName/data', async (req, res) => {
    const deptName = req.params.deptName
    MongoClient.connect(url).then((client) => {
        const connect = client.db("wce-dept");
        const collection = connect.collection("dept")
        collection.findOne({dept: deptName}).then((data) => {
            res.json(data)
          });
      })

})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})