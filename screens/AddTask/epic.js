import { of, from } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED
} from './action';
import HttpService from '../../store/httpService';

class AddTaskEpic {
  static addTask = action$ =>
    action$.pipe(
      ofType(ADD_TASK),
      switchMap(({payload}) =>
        from(HttpService.post('https://gsmtasks.com/api/tasks/tasks/', {
          "address": { "raw_address": payload },
          "category": "assignment",
          "account": "https://gsmtasks.com/api/tasks/accounts/77fd7716-7c6d-497f-a800-7608ad2b108d/"
        })).pipe(
          switchMap(res => {
            return of({
              type: ADD_TASK_SUCCESS,
              payload: res.data
            });
          }),
          catchError(error => {
            return  of({
              type: ADD_TASK_FAILED,
              payload: error.message 
            })
          }
          )
        )
      )
    );
 
}

export default AddTaskEpic;