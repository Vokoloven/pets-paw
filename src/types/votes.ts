export interface IVotesResponse {
  country_code: string;
  created_at: string;
  id: number;
  image: {
    id: string;
    url: string;
  };
  image_id: string;
  sub_id: null | string;
  value: number;
}
