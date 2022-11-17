import { Injectable, Logger, NestMiddleware } from "@nestjs/common";

import { NextFunction, Request, Response } from "express";

@Injectable()
export class AppLoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    // const { ip, method, path: url } = request;
    // const userAgent = request.get('user-agent') || '';

      // const { statusCode } = response;
      const {path, body, query, authInfo, baseUrl, hostname, ...rest} = request;
      // const contentLength = response.get('content-length');

      this.logger.debug([path, body, query, authInfo, baseUrl, hostname])
      // this.logger.log(
      //   `${method} ${url} ${statusCode} ${contentLength} - ${userAgent} ${ip}`
      // );


    next();
  }
}
