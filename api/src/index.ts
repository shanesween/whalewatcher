import axios from 'axios'
import cheerio from 'cheerio'
const url = 'https://newportwhales.com/whalecount.html'

const AxiosInstance = axios.create()

AxiosInstance.get(url)
  .then(
    response => {
      const html = response.data;
      const $ = cheerio.load(html)
      const table = $('h1:contains("Recent Counts") ~ table').text()
      console.log('table', table);
    }
  ).catch(console.error)
