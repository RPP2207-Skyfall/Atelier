const Axios = require('axios');
require("dotenv").config();

module.exports = {
  getProductQA: (req, res) => {
    var url = process.env.REACT_APP_API_QA_URL;
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_QA_KEY,
        "Content-Encoding": 'gzip'
      },
      params: {
        product_id: req.body.product_id,
        count: 15
      }
    };
    Axios.get(url, requestOption)
      .then(result => {
        res.send(result.data);
      })
      .catch(err => {
        console.log("Err: ", err);
        res.send(err);
      })
  },

  addNewQuestion: (req, res) => {
    var url = process.env.REACT_APP_API_QA_NEW_Q_URL;
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_QA_KEY,
        // "Content-Encoding": 'gzip',
        "x-no-compression": true
      }
    };
    Axios.post(url, req.body, requestOption)
      .then(result => {
        res.status(201);
        res.send();
      })
      .catch(err => {
        console.log(err);
        res.status(500);
        res.send();
      })
  },

  addNewAnswer: (req, res) => {
    var question_id = req.body.question_id;
    var url = `${process.env.REACT_APP_API_QA_NEW_Q_URL}/${question_id}/answers`;
    var incomingAnswer = {
      body: req.body.body,
      name: req.body.name,
      email: req.body.email,
      photos: req.body.photos
    };
    var requestOption = {
      headers: {
        "Content-Type": "application/json",
        "Authorization": process.env.REACT_APP_API_QA_KEY,
        // "Content-Encoding": 'gzip',
        "x-no-compression": true
      }
    };
    Axios.post(url, incomingAnswer, requestOption)
      .then(result => {
        res.status(201);
        res.send();
      })
      .catch(err => {
        console.log(err);
        res.status(500);
        res.send();
      })
  },

  helpfulQuestion: (req, res) => {
    var question_id = req.body.question_id;
    var url = `${process.env.REACT_APP_API_QA_NEW_Q_URL}/${question_id}/helpful`;
    Axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_QA_KEY;
    Axios.put(url)
      .then(result => {
        res.status(204);
        res.send();
      })
      .catch(err => {
        console.log(err);
        res.status(500);
        res.send();
      })
  },

  reportQuestion: (req, res) => {
    var question_id = req.body.question_id;
    var url = `${process.env.REACT_APP_API_QA_NEW_Q_URL}/${question_id}/report`;
    Axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_QA_KEY;
    Axios.put(url)
      .then(result => {
        res.status(204);
        res.send();
      })
      .catch(err => {
        console.log(err);
        res.status(500);
        res.send();
      })
  },

  helpfulAnswer: (req, res) => {
    var answer_id = req.body.answer_id;
    var url = `${process.env.REACT_APP_API_QA_A_URL}/${answer_id}/helpful`;
    Axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_QA_KEY;
    Axios.put(url)
      .then(result => {
        res.status(204);
        res.send();
      })
      .catch(err => {
        console.log(err);
        res.status(500);
        res.send();
      })
  },

  reportAnswer: (req, res) => {
    var answer_id = req.body.answer_id;
    var url = `${process.env.REACT_APP_API_QA_A_URL}/${answer_id}/report`;
    Axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_QA_KEY;
    Axios.put(url)
      .then(result => {
        res.status(204);
        res.send();
      })
      .catch(err => {
        console.log(err);
        res.status(500);
        res.send();
      })
  }
};