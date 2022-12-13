export const JOB_SCRAPE = "scrapper.job.scrape"
export const JOB_ML_LEARN = "scrapper.job.ml_learn"
export const JOB_ML_LABEL = "scrapper.job.ml_label"
export const JOB_CLEAR_DB = "scrapper.job.clear_db"
export const SCRAPPER_JOB_REQUEST = 'scrapper.auth.request';
export const SCRAPPER_WORK_STATUS = 'scrapper.job.status';
export const SCRAPER_STATUS_PING = 'scrapper.status.ping';
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
  | 'auth'
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
