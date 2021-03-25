import axios from 'axios'
import cheerio from 'cheerio'
const url = 'https://newportwhales.com/whalecount.html'

const AxiosInstance = axios.create()


AxiosInstance.get(url)
  .then(
    response => {
      const html = response.data;
      //normalize whitespace gave me most probles, simple fix! read. the. docs.
      const $ = cheerio.load(html, { xmlMode: true, normalizeWhitespace: true, decodeEntities: true })
      const tableArray = $('h1:contains("Recent Counts") ~ table').html().split('</tr>')

      console.log(tableArray);
      console.log(typeof tableArray);

    }
  ).catch(console.error)
