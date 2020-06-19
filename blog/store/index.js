import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          post => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(process.env.firebaseUrl+"posts.json")
          .then(res => {
            const postArray = [];
            for (let key in res.data) {
              postArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setPosts", postArray);
          })
          .catch(e => context.error(e));

        // if(!process.client){
        //   console.log(context.req)
        // }
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //   vuexContext.commit("setPosts", [
        //     {
        //       id: "1",
        //       title: "First Post",
        //       previewText: "This is our first post!",
        //       thumbnail:
        //         "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        //     },
        //     {
        //       id: "2",
        //       title: "Second Post",
        //       previewText: "This is our second post!",
        //       thumbnail:
        //         "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        //     }
        //   ]);
        //   resolve();
        // }, 1000);
        // });
      },
      addPost(vuexContext, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date()
        };
        return axios
          .post(
            process.env.firebaseUrl+"posts.json",
            createdPost
          )
          .then(res => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: res.data.name
            });
          })
          .catch(e => {
            console.log(e);
          });
      },
      editPost(vuexContext, post) {
        return axios
          .put(
            process.env.firebaseUrl+"posts/" + post.id + ".json",
            post
          )
          .then(res => {
            vuexContext.commit("editPost", post);
          })
          .catch(e => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;
