import React from 'react'

const helpers = () => {
    console.log("AYY");

}

export const getYesterdaySightings = (sightings: ISighting[]) => {
    const today: Date = new Date()
    const yesterday: Date = new Date()

    yesterday.setDate(today.getDate() - 1)
    yesterday.setHours(0, 0, 0, 0)


    const yesterdayEpoch = yesterday.getTime()

    const winner = sightings.find(s => {

        return s.date === yesterdayEpoch
    })
    let yesterdayHashMap: Record<string, number> = {}

    winner?.mammals.map((m: Mammal) => {
        if (!yesterdayHashMap[m.name]) {
            yesterdayHashMap[m.name] = m.count
        }
        yesterdayHashMap[m.name] += m.count
    })

    return yesterdayHashMap
    // const yesterdaySightings: ISighting = []
}

export const getWeekSightings = (sightings: ISighting[]) => {
    const today: Date = new Date()
    const lastWeek: Date = new Date()

    lastWeek.setDate(today.getDate() - 7)
    lastWeek.setHours(0, 0, 0, 0)

    const lastWeekEpoch = lastWeek.getTime()

    const winner = sightings.filter((s) => {
        return s.date >= lastWeekEpoch
    })
    // console.log(winner);
    let weekHashMap: Record<string, number> = {}

    winner.map((s) => {
        s.mammals.map((m: Mammal) => {
            if (!weekHashMap[m.name]) {
                weekHashMap[m.name] = m.count
            }
            weekHashMap[m.name] += m.count
        })
    })
    // console.log(weekHashMap);

    return weekHashMap
}

export const getMonthSightings = (sightings: ISighting[]) => {
    const today: Date = new Date()
    const lastMonth: Date = new Date()

    lastMonth.setDate(today.getDate() - 30)
    lastMonth.setHours(0, 0, 0, 0)

    const lastMonthEpoch = lastMonth.getTime()

    const winner = sightings.filter((s) => {
        return s.date >= lastMonthEpoch
    })
    // console.log(winner);
    let monthHashMap: Record<string, number> = {}

    winner.map((s) => {
        s.mammals.map((m: Mammal) => {
            if (!monthHashMap[m.name]) {
                monthHashMap[m.name] = m.count
            }
            monthHashMap[m.name] += m.count
        })
    })
    // console.log(monthHashMap);

    return monthHashMap
}

export default helpers