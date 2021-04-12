import axios from 'axios'
import cheerio from 'cheerio'
import { Mammal, DailyData } from '../types/index';

const url = 'https://newportwhales.com/whalecount.html'

const AxiosInstance = axios.create()

export const getData = async () => {
  try {

    const result = await AxiosInstance.get(url)

    const html = result.data;

    //normalize whitespace gave me most probles, simple fix! read. the. docs.
    const $ = cheerio.load(html, { xmlMode: true, normalizeWhitespace: true, decodeEntities: true })
    console.log($);

    let tableArray: string[] = $('h1:contains("Recent Counts") ~ table')?.html()?.split('</tr>') ?? []
    if (url.includes('2015')) {
      tableArray = $('h1:contains("2015 Counts") ~ table')?.html()?.split('</tr>') ?? []
    }

    let responseDataArray: DailyData[] = []

    tableArray && tableArray.forEach((row, i) => {
      //daily <tr>
      if (row) {
        const rowArray: string[] = row.split('</td> <td>')
        //first <td> - date
        const date: number = Date.parse(rowArray[0].split('<td>')[1])
        //second <td> - string of mammals and count
        const mammalArray: string[] = rowArray[1]?.split('</td>')[0]?.split(', ') ?? []

        let dailyTotalCount = 0
        let dailyData: DailyData = { date, dailyTotalCount, mammals: [] }

        mammalArray.forEach((mammal, i) => {
          //daily count for each species, add to dailyTotal
          console.log();
          const mammalDigitsOnly: RegExpMatchArray = mammal.match(/[a-z]+|[^a-z]+/gi) ?? []
          const countSpecies = parseFloat(mammalDigitsOnly![0]?.replace(/,/g, ''))

          dailyTotalCount += countSpecies

          //species name
          if (mammal.length > 2) {

            const species = mammal.replace(/^[, ]+|[, ]+$|[, ]+/g, " ")?.match(/\D/g)!.join('').trim()

            //mammalObject
            const mammalObject: Mammal = { name: species, count: isNaN(countSpecies) ? 0 : countSpecies }

            dailyData.mammals = [...dailyData.mammals, mammalObject]
          }
        })

        dailyTotalCount = isNaN(dailyTotalCount) ? 0 : dailyTotalCount
        dailyData.dailyTotalCount = dailyTotalCount
        dailyData.date && responseDataArray.push(dailyData)
      }
    })
    
    return responseDataArray

  } catch (err) {
    console.error(err)
  }
}


export default getData
