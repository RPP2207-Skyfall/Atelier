import axios from 'axios';

const api = {

  getGeneralProducts: function(ID) {

    // console.log('something in general product')
    const generalUrl = process.env.REACT_APP_API_OVERVIEW_URL + `products/${ID}/styles`;


    return new Promise((resolve, reject) => {
      fetch(generalUrl,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": process.env.REACT_APP_API_OVERVIEW_TOKEN,
            "Accept-Encoding": 'gzip',
            "Content-Encoding": 'gzip'
          }
        }
      )
        .then(res => res.json())
        .then((data) => {

          // console.log('data after first call', data[1].id)

          // var thumbnails = response.data.results[0].photos
          // var originalPrice = response.data.results[0].original_price
          // var salePrice = response.data.results[0].sale_price

          // this.setState({
          //   data: data,
          //   SKU: data[0].id
          // }, () => {
          //   // console.log(this.state)
          //   resolve(this.state)
          // });
          // let data = [thumbnails, originalPrice, salePrice ]

          resolve(data);
        })
        .catch((err) => {
          reject(err)
          console.log('err: ', err);
        })
    })
  }
}

export default api;