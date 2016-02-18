import { formatPattern } from 'react-router/lib/PatternUtils';
import { createAction } from 'redux-actions';

import * as fetch from "../fetch";

import endpoints from "./endpoints";

const apiStatus = createAction("api/STATUS");

export function api(key, params, data) {
  return (dispatch, getState) => {
    const endpoint = endpoints[key];
    const status = endpoint.action
      ? (action) => apiStatus(endpoint.action(action, dispatch, getState))
      : apiStatus;

    dispatch(status({ key, status: 1 }));

    var method = endpoint.method;
    if(method == "save") {
      method = !params.id
        ? "post"
        : "put";
    }

    return fetch[method](formatPattern(endpoint.path, params), data)
    .then(data => {
      dispatch(status({ key, status: 2, data }));

      return data;
    })
    .catch(error => {
      dispatch(status({ key, status: 3, error }));

      throw error;
    });
  };
};

export function graphql(query, variables) {
  return api("graphql", {}, { query, variables });
};
