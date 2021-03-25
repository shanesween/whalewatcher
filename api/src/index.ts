import axios from 'axios'
import cheerio from 'cheerio'
const url = 'https://newportwhales.com/whalecount.html'

const AxiosInstance = axios.create()


enum Species {
  GrayWhale = "GRAY WHALE",
  BlueWhale = "BLUE WHALE",
  FinWhale = "FIN WHALE",
  HumpbackWhale = "HUMPBACK WHALE",
  MinkeWhale = "MINKE WHALE",
  Orca = "ORCA",
  BrydeWhale = "BRYDE'S WHALE",

  CommonDolphin = "COMMON DOLPHIN",
  PacificDolphin = "PACIFIC WHITE-SIDED DOLPHIN",
  BottlenoseDolphin = "BOTTLENOSE DOLPHIN",
  RissoDolphin = "RISSO'S DOLPHIN",

  MakoShark = "MAKO SHARK",
  ThresherShark = "THRESHER SHARK",
  HammerheadShark = "HAMMERHEAD SHARK",
  GreatWhiteShark = "GREAT WHITE SHARk",
  FalseKillerWhale = "FALSE KILLER WHALE",
  Sunfish = "SUNFISH"
}


interface Mammal {
  name: Species,
  count: number
}

interface MammalData {
  date: string
  totalCount: number
  mammals: Mammal[]
}

AxiosInstance.get(url)
  .then(
    response => {
      const html = response.data;
      //normalize whitespace gave me most probles, simple fix! read. the. docs.
      const $ = cheerio.load(html, { xmlMode: true, normalizeWhitespace: true, decodeEntities: true })
      const tableArray = $('h1:contains("Recent Counts") ~ table').html().split('</tr>')

      tableArray.forEach((elem, i) => {
        const rowArray: string[] = elem.split('</td> <td>')
        console.log(rowArray);
      })

    }
  ).catch(console.error)
