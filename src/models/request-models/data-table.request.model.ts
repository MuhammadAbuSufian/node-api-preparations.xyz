export class DataTableRequestModel {
  draw: number;
  columns: {data: string, name: string, searchable: boolean, orderable: boolean, search: {value: string, regex: boolean} }[];
  order: {column: number, dir: string}[];
  start: number;
  length: number;
  search: {value: string, regex: boolean};
}