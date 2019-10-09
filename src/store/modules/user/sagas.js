import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = rest.oldPassword ? { ...payload.data } : { name, email };

    const response = yield call(api.put, 'users', profile);

    toast.success('Profile succesfully updated');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Profile not updated, please check you information');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
