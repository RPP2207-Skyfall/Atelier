import Axios from 'axios';

const RelatedAPI = {

  getDetails: async (id) => {
    await Axios.get('http://localhost:3000/getItemDetails', { params: { id: id } })
      .then((response) => {
        // setDetail(response.data)
        // console.log("API detail", response.data)
        return response.data
      })
      .catch((err) => {
        console.error(err)
      })
  },







}


export default RelatedAPI