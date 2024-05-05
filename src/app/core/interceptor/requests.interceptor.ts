import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingState } from '../states/loading.state';
import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';

export const requestsInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingSignal = inject(LoadingState).loading;
  const errorSignal = inject(LoadingState).error;
  return next(req).pipe(
    catchError((err) => {
      loadingSignal.set(false);
      errorSignal.set(true);
      return throwError(() => new Error(err.statusText));
    }),
  );
};
