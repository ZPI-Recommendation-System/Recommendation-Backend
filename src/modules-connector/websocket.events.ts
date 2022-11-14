export const SCRAPPER_AUTH_REQUEST = 'scrapper.auth.request';
export const SCRAPPER_WORK_STATUS = 'scrapper.work.status';
export const SCRAPPER_WORK_PING = 'scrapper.work.ping';
export const SCRAPPER_WORK_CANCEL = 'scrapper.work.cancel';

export interface ScrapperAuthRequestDto {
  authLink: string;
  timeout: number;
}

//BACKEND --- SCRAPER                                 ALLEGRO
//  click  -> SCRAPPER_SCRAPPING_REQUEST
//show_user <- SCRAPPER_AUTH_REQUEST
//          <-  WORK_STATUS(started)           <---- AUTHORIZED

// export interface ScrapperAuthResponseDto {
//   authResponse: string;
//   timeout: number;
// }

export type WorkStatus =
  | 'authorised'
  | 'running'
  | 'finished'
  | 'error'
  | 'cancelled'
  | 'ready';

export interface ScrapperWorkStatusDto {
  workStatus: WorkStatus;
  estimatedTime: number;
  payload: any;
  logs: string[];
}
