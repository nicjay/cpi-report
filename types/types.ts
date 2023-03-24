export type BlsApiResponse = {
  status: string;
  responseTime: number;
  message: string[];
  Results: Results;
};

export type Results = {
  series: Series[];
};

export type Series = {
  seriesID: string;
  catalog: Catalog;
  data: Data[];
};

export type Catalog = {
  series_title: string;
  series_id: string;
  seasonality: string;
  survey_name: string;
  survey_abbreviation: string;
  measure_data_type: string;
  area: string;
  item: string;
};

export type Data = {
  year: string;
  period: string;
  periodName: string;
  latest: string;
  value: string;
  footnotes: {}[];
  calculations: Calculations;
};

export type Calculations = {
  net_changes: {};
  pct_changes: {
    1: string;
    3: string;
    6: string;
    12: string;
  };
};
