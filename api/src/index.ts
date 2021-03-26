import axios from 'axios'
import cheerio from 'cheerio'
import { Mammal, DailyData } from '../types/index';

const url = 'https://newportwhales.com/whalecount.html'

const AxiosInstance = axios.create()

AxiosInstance.get(url)
  .then(
    response => {
      const html = response.data;

      //normalize whitespace gave me most probles, simple fix! read. the. docs.
      const $ = cheerio.load(html, { xmlMode: true, normalizeWhitespace: true, decodeEntities: true })
      const tableArray = $('h1:contains("Recent Counts") ~ table').html().split('</tr>')
      let responseDataArray: DailyData[] = []

      tableArray.forEach((row, i) => {
        //daily <tr>
        const rowArray: string[] = row.split('</td> <td>')
        //first <td> - date
        const date: string = rowArray[0].split('<td>')[1]
        //second <td> - string of mammals and count
        const mammalArray: string[] = rowArray[1] && rowArray[1].split('</td>')[0].split(', ')

        let dailyTotalCount = 0
        let dailyData: DailyData = { date, dailyTotalCount, mammals: [] }

        mammalArray && mammalArray.forEach((mammal, i) => {
          //daily count for each species, add to dailyTotal
          const countSpecies = parseFloat(mammal.match(/[a-z]+|[^a-z]+/gi)[0].replace(/,/g, ''))
          dailyTotalCount += countSpecies

          //species name
          const species = mammal.replace(/^[, ]+|[, ]+$|[, ]+/g, " ").match(/\D/g).join('').trim()

          //mammalObject
          const mammalObject: Mammal = { name: species, count: countSpecies }

          dailyData.mammals = [...dailyData.mammals, mammalObject]
        })

        dailyTotalCount = isNaN(dailyTotalCount) ? 0 : dailyTotalCount
        dailyData.dailyTotalCount = dailyTotalCount
        dailyData.date && responseDataArray.push(dailyData)
        console.log(responseDataArray);

      })
    }
  ).catch(console.error)
