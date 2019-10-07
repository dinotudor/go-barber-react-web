import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSafa() {
  return yield all([auth]);
}
