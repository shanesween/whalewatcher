export const getYesterdaySightings: (sightings: ISighting[]) => Record<string, number> = (
  sightings: ISighting[],
) => {
  const today: Date = new Date();
  const yesterday: Date = new Date();

  yesterday.setDate(today.getDate() - 1);
  yesterday.setHours(0, 0, 0, 0);

  const yesterdayEpoch = yesterday.getTime();

  const winner = sightings.find((s) => s.date === yesterdayEpoch);
  const yesterdayHashMap: Record<string, number> = {};

  winner?.mammals.forEach((m: Mammal) => {
    if (!yesterdayHashMap[m.name]) {
      yesterdayHashMap[m.name] = m.count;
    }
    yesterdayHashMap[m.name] += m.count;
  });

  return yesterdayHashMap;
};

export const getWeekSightings: (sightings: ISighting[]) => Record<string, number> = (
  sightings: ISighting[],
) => {
  const today: Date = new Date();
  const lastWeek: Date = new Date();

  lastWeek.setDate(today.getDate() - 7);
  lastWeek.setHours(0, 0, 0, 0);

  const lastWeekEpoch = lastWeek.getTime();

  const winner = sightings.filter((s) => s.date >= lastWeekEpoch);
  const weekHashMap: Record<string, number> = {};

  winner.forEach((s) => {
    s.mammals.forEach((m: Mammal) => {
      if (!weekHashMap[m.name]) {
        weekHashMap[m.name] = m.count;
      }
      weekHashMap[m.name] += m.count;
    });
  });
  return weekHashMap;
};

export const getMonthSightings: (sightings: ISighting[]) => Record<string, number> = (
  sightings: ISighting[],
) => {
  const today: Date = new Date();
  const lastMonth: Date = new Date();

  lastMonth.setDate(today.getDate() - 30);
  lastMonth.setHours(0, 0, 0, 0);

  const lastMonthEpoch = lastMonth.getTime();

  const winner = sightings.filter((s) => s.date >= lastMonthEpoch);
  const monthHashMap: Record<string, number> = {};

  winner.forEach((s) => {
    s.mammals.forEach((m: Mammal) => {
      if (!monthHashMap[m.name]) {
        monthHashMap[m.name] = m.count;
      }
      monthHashMap[m.name] += m.count;
    });
  });

  return monthHashMap;
};

export const setData: (value: number, sightings: ISighting[]) => Record<string, number> = (
  value: number, sightings: ISighting[],
) => {
  let data: Record<string, number> = {};

  const yesterdayData = getYesterdaySightings(sightings);

  const weekData = getWeekSightings(sightings);

  const monthData = getMonthSightings(sightings);

  switch (value) {
    case 0:
      data = yesterdayData;
      break;
    case 1:
      data = weekData;
      break;
    case 2:
      data = monthData;
      break;
    default:
      break;
  }
  return data;
};

export default setData;
