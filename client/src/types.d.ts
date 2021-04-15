interface ISighting {
    date: number
    count: number
    mammals: []
}

interface Mammal {
    name: string
    count: number
}

type SightingState = {
    sightings: ISighting[],
    loading: boolean
}

type SightingAction = {
    type: string
    sightings: ISighting[]
}