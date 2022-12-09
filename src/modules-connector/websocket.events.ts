export const SCRAPPER_JOB_REQUEST = 'scrapper.auth.request';
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
  | 'waiting_for_job'
  | 'authorised'
  | 'running'
  | 'finished'
  | 'error'
  | 'cancelled'
  | 'ready'
  | 'unknown';

export interface ScrapperWorkStatusDto {
  jobName: string;
  workStatus: WorkStatus;
  estimatedTime: number;
  payload: any;
  logs: string[];
}
