export interface Country {
  id: number;
  name: string;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  tests: number;
  flag: string;
}
