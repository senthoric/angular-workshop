import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';

export class PreloadAfter3Sec implements PreloadingStrategy {

    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        console.log(route);
        
        return Observable.of(true).delay(3000).flatMap(() => fn());
        // if((route.data === undefined)||(route.data.preload === undefined)){
        //     return fn();
        // }
        // if (route.data.preload) {
        //     return fn();
        // }

    }

}