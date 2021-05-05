import axios from 'axios';
import cheerio from 'cheerio';
import { Mammal, DailyData } from '../types/index';

const url = 'https://newportwhales.com/whalecount.html';

const AxiosInstance = axios.create();

export const getData: () => Promise<DailyData[] | undefined> = async () => {
  try {
    const result = await AxiosInstance.get(url);

    const html = result.data;

    // normalize whitespace gave me most problems, simple fix! read. the. docs.
    const $ = cheerio.load(
      html,
      { xmlMode: true, normalizeWhitespace: true, decodeEntities: true },
    );

    let tableArray: string[] = $('h1:contains("Recent Counts") ~ table')?.html()?.split('</tr>') ?? [];
    if (url.includes('2015')) {
      tableArray = $('h1:contains("2015 Counts") ~ table')?.html()?.split('</tr>') ?? [];
    }

    const responseDataArray: DailyData[] = [];

    tableArray && tableArray.forEach((row) => {
      // daily <tr>
      if (row) {
        const rowArray: string[] = row.split('</td> <td>');
        // first <td> - date
        const date: number = Date.parse(rowArray[0].split('<td>')[1]);
        // second <td> - string of mammals and count
        const mammalArray: string[] = rowArray[1]?.split('</td>')[0]?.split(', ') ?? [];

        let dailyTotalCount = 0;
        const dailyData: DailyData = { date, dailyTotalCount, mammals: [] };

        mammalArray.forEach((mammal) => {
          // daily count for each species, add to dailyTotal
          if (mammal !== 'Bad Weather') {
            const mammalDigitsOnly: RegExpMatchArray = mammal.match(/[a-z]+|[^a-z]+/gi) ?? [];
            const countSpecies = parseFloat(mammalDigitsOnly[0]?.replace(/,/g, ''));

            dailyTotalCount += countSpecies;

            // species name
            // have to check for > 2 because some data is incorrectly inputted on site (missing space after a comma)
            if (mammal.length > 2) {
              const species = mammal.replace(/^[, ]+|[, ]+$|[, ]+/g, ' ')?.match(/\D/g)!.join('').trim();
              const modifiedSpecies = species.replace('&apos;', '\'');

              // mammalObject
              const mammalObject: Mammal = {
                name: modifiedSpecies, count: Number.isNaN(countSpecies) ? 0 : countSpecies,
              };

              dailyData.mammals = [...dailyData.mammals, mammalObject];
            }
          }
        });

        dailyTotalCount = Number.isNaN(dailyTotalCount) ? 0 : dailyTotalCount;
        dailyData.dailyTotalCount = dailyTotalCount;
        dailyData.date && responseDataArray.push(dailyData);
      }
    });

    return responseDataArray;
  } catch (err) {
    console.error(err);
  }
};

export default getData;
