/* eslint-disable max-len */

// const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
//   const stripe = require("stripe")(
// "sk_test_51JKhIKJG7nMoH53nClz15Z2RNgTnBiKJ1hGanYQ73CkT2lT5U2s1tDBRMQotIj2I9SEgAYbDjwegqilQhj16Hfqy00IKD7kBHD");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());


// app.get('/')

