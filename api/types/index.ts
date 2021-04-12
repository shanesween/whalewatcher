export enum Species {
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
  Sunfish = "SUNFISH",

  BadWeather = "BADWEATHER"
}


export interface Mammal {
  name: string,
  count: number
}

export interface DailyData {
  date: number,
  dailyTotalCount: number
  mammals: Mammal[]
}
