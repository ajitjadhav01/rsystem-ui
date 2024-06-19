import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../services/loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const LoaderInterceptor: HttpInterceptorFn = (req, next) => {
  let loader = inject(LoaderService);

  loader.showLoader();

  return next(req).pipe(
    finalize(() => {
      loader.hideLoader();
    })
  );
};
