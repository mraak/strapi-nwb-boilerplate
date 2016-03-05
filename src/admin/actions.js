import { api, graphql } from "../api";

function fetchConfig() {
  return api("adminConfig", {}, {});
}

function fetchPage(id) {
  return graphql("query($id: String!) { page(id: $id) { title, content } }", { id }); // api("page", { id }, {});
}

function fetchModels(){
  return graphql(
    `query {
      __schema{
    		types {
    		  kind
    		  name
    		  description
    		}
      }
    }`
  );
}

export default {
  fetchConfig,
  fetchPage,
  fetchModels
};
