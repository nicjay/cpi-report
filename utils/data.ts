import { BlsApiResponse } from '../types/types';

const SERIES_ID_CPI: string = 'CUUR0000SA0'; // U.S. city average, All items
const SERIES_ID_FOOD: string = 'CUUR0000SAF1'; // U.S. city average, Food
const SERIES_ID_ENERGY: string = 'CUUR0000SA0E'; // U.S. city average, Energy
const SERIES_ID_GAS: string = 'CUUR0000SETB01'; // U.S. city average, Gasoline, all types

export async function getData() {
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      seriesid: [SERIES_ID_CPI, SERIES_ID_FOOD, SERIES_ID_ENERGY, SERIES_ID_GAS],
      startyear: 2022,
      endyear: 2023,
      catalog: true,
      calculations: true,
      registrationkey: process.env.BLS_API_KEY
    })
  };

  const response = await fetch('https://api.bls.gov/publicAPI/v2/timeseries/data/', requestOptions);

  const responseJson: BlsApiResponse = await response.json();

  return {
    cpi: getChange_Latest12Month(responseJson, SERIES_ID_CPI),
    food: getChange_Latest12Month(responseJson, SERIES_ID_FOOD),
    energy: getChange_Latest12Month(responseJson, SERIES_ID_ENERGY),
    gas: getChange_Latest12Month(responseJson, SERIES_ID_GAS),
    rawAll: responseJson
  };
}

function getChange_Latest12Month(responseJson: BlsApiResponse, seriesId: string) {
  const series = responseJson.Results.series.find((item) => item.seriesID == seriesId);
  const data = series?.data.sort((a, b) => +b.year - +a.year || b.period.localeCompare(a.period));

  if (!data) return '';

  return data[0].calculations.pct_changes[12];
}
