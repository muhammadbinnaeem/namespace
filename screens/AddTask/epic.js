import { of, from } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILED
} from './action';
import HttpService from '../../store/httpService';
import { CATEGORY, ACCOUNT_URL } from '../../config';

class AddTaskEpic {
  static addTask = action$ =>
    action$.pipe(
      ofType(ADD_TASK),
      switchMap(({payload}) =>
        from(HttpService.post('https://gsmtasks.com/api/tasks/tasks/', {
          "address": { "raw_address": payload },
          "category": CATEGORY,
          "account": ACCOUNT_URL
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