import Vuex from "vuex";

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
        // this.$axios
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get("posts.json")
          .then(data => {
            const postArray = [];
            for (let key in data) {
              postArray.push({ ...data[key], id: key });
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
        return this.$axios
          .$post(
            // process.env.firebaseUrl+
            "posts.json",
            createdPost
          )
          .then(res => {
            vuexContext.commit("addPost", {
              ...createdPost,
              id: res.name
            });
          })
          .catch(e => {
            console.log(e);
          });
      },
      editPost(vuexContext, post) {
        return this.$axios
          .$put(
            // process.env.firebaseUrl+
            "posts/" + post.id + ".json",
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
