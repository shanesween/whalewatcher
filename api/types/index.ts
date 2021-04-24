export interface Mammal {
  name: string,
  count: number
}

export interface DailyData {
  date: number,
  dailyTotalCount: number
  mammals: Mammal[]
}
