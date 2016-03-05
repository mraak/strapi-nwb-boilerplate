export default {
  // posts: {
  //   graphql: (state, { status, data, error, skip, limit }) => {
  //     if(!data || !data.data.posts)
  //       return state;
  //
  //     return {
  //       status,
  //       skip,
  //       limit,
  //       count: data.data.countPosts,
  //       data: [...(state.data || []), ...data.data.posts],
  //       error
  //     };
  //   }
  // },
  posts: {
    posts: (state, action) => action
  },
  post: {
    post: (state, action) => action
  }
  // post: {
  //   graphql: (state, { status, data, error }) => {
  //     // if(!data || !data.data.post)
  //     //   return state;
  //
  //     return {
  //       status,
  //       data: data && data.data.post,
  //       error
  //     };
  //   }
  // }
};
