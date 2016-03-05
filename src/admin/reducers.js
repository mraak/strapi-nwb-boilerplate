export default {
  config:{
    adminConfig: (state, action) => action
  },
  models: {
    graphql: (state, { status, data, error }) => {
      if(!data || !data.data.__schema)
        return state;

      return {
        status,
        data: [...(state.data || []), ...data.data.__schema.types],
        error
      };
    }
  },
  model: {
    graphql: (state, { status, data, error }) => {
      // if(!data || !data.data.page)
      //   return state;

      return {
        status,
        data: data && data.data.page,
        error
      };
    }
  }
};
