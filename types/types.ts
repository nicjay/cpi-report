export type BlsApiResponse = {
  status: string;
  responseTime: number;
  message: string[];
  Results: Results;
};

type Results = {
  series: Series[];
};

type Series = {
  seriesID: string;
  catalog: Catalog;
  data: Data[];
};

type Catalog = {
  series_title: string;
  series_id: string;
  seasonality: string;
  survey_name: string;
  survey_abbreviation: string;
  measure_data_type: string;
  area: string;
  item: string;
};

type Data = {
  year: string;
  period: string;
  periodName: string;
  latest: string;
  value: string;
  footnotes: {}[];
  calculations: Calculations;
};

type Calculations = {
  net_changes: {};
  pct_changes: {
    1: string;
    3: string;
    6: string;
    12: string;
  };
};
