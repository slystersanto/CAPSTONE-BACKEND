const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const mongodb = require("mongodb");
const mongoclient = mongodb.MongoClient;
// const URL =process.env.DB;
const URL = process.env.DB;
const SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const cors = require("cors");

app.use(express.json());

app.use((req, res, next) => {
   
    res.setHeader('Access-Control-Allow-Origin', 'https://precious-mermaid-2319d8.netlify.app','http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  






// app.use(cors({
//     origin: ["http://localhost:3000",
//      "https://precious-mermaid-2319d8.netlify.app",
//     ]
// }));

const authorize = (req, res, next) => {
    if (req.headers.authorization) {
        try {
            const verify = jwt.verify(req.headers.authorization, SECRET);
            if (verify) {
                next();
            }
        } catch (error) {
            res.status(401).json({message: "Unauthorized"});
        }
    } else {
        res.status(401).json({message: "Unauthorized"});
    }
} 
app.get("/featured/colors", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("Featured_colors");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/colors/palettes", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("colorpalettes");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/colorpsychology", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("Psychologycolors");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/seasonal-colors/summer", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("summer");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/seasonal-colors/spring", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("autumn");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/seasonal-colors/autumn", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("spring");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/seasonal-colors/winter", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("winter");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/outfits/wedding", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("wedding");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/outfits/birthday", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("birthday");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/outfits/party", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("party");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.get("/featured/outfits/date", authorize, async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("date");
        const transactions = await collection.find({}).toArray();
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.post("/register", async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("app_users");
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        console.log(hash);
        req.body.password = hash;
        const transactions = await collection.insertOne(req.body);
        console.log(transactions);
        await connection.close();
        res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

app.post("/login", async (req, res) => {
    try {
        const connection = await mongoclient.connect(URL);
        const db = connection.db("Dress_Suggestions");
        const collection = db.collection("app_users");
        const user = await collection.findOne({email: req.body.email});

        if (user) {
            const compare = await bcrypt.compare(req.body.password, user.password);
            if (compare) { // res.json({message:"Correct!"})
                const token = jwt.sign({
                    id: user._id
                }, SECRET,);
                console.log(token);
                res.json({message: "Login Success", token});
            } else {
                res.json({message: "Email/Password is Wrong"});
            }
        } else {
            res.status(401).json({message: "Email/Password is Wrong"});
        }

        await connection.close();
        // res.json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
