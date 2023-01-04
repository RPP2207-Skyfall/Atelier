const Axios = require('axios');
require("dotenv").config();

module.exports = {
  post_interactions: (req, res) => {
    console.log('postInteractions req', req.body)

    // create current time
    if (req.body !== undefined) {
      var interactionData = req.body
      interactionData['time'] = new Date
      console.log(interactionData)


      Axios.defaults.headers.common['Authorization'] = process.env.REACT_APP_API_INTERACTION_KEY
      var url = process.env.REACT_APP_API_INTERACTION_URL

      Axios.post(url, interactionData)
        .then((result) => {
          //console.log(result)
          res.send(result.statusText)
        })
        .catch((err) => {
          console.log('Err posting interaction log: ', err)
          res.send(err)
        })

    }
  }
}

