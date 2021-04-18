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
    console.log(yesterdayEpoch);
    console.log(yesterday);
    console.log(winner);

    return winner
    // const yesterdaySightings: ISighting = []
}

export default helpers