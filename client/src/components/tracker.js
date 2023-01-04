const Axios = require('axios');


const tracker = {
  userInteraction: async (element, widget) => {
    console.log(element, widget)
    if (element !== undefined && widget !== undefined) {
      const interactionData = {
        element: element,
        widget: widget
      }
      try {
        let postInteractions = await Axios.post('/interactions', interactionData)
        //console.log(addNewReview)
        if (postInteractions.data === 'Created') {
          console.log('Log created')

        }

      } catch (err) {
        console.log("Err posting log: ", err)
      }
    }

  }
}

export default tracker