import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class AppActivityInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Solicitud realizada!');
    const started: number = Date.now();
    return next.handle(req).pipe(
      tap((response: HttpEvent<any>) => {
        if (response instanceof HttpResponse) {
          console.log(
            'Tiempo de solicitud : ' +
              (Date.now() - started).toString() +
              ' ms.'
          );
        }
      })
    );
  }
}
