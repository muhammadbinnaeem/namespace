import { of, from } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  GET_ALL_TASK,
  GET_ALL_TASK_SUCCESS,
  GET_ALL_TASK_FAILED
} from './action';
import HttpService from '../../store/httpService';

class MapEpic {
  static getAllTasks = action$ =>
    action$.pipe(
      ofType(GET_ALL_TASK),
      switchMap(() =>
        from(HttpService.get('https://gsmtasks.com/api/tasks/tasks/')).pipe(
          switchMap(res => {
            return of({
              type: GET_ALL_TASK_SUCCESS,
              payload: res.data 
            });
          }),
          catchError(error => {
            return  of({
              type: GET_ALL_TASK_FAILED,
              payload: error.message
            })
          }
          )
        )
      )
    );
 
}

export default MapEpic;