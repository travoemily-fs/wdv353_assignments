"use strict";

/* REFACTORING PROCESS...

step one: re-write the callback functions as promises
step two: chain together in a single block
step three: add catch methods as fallbacks if promise fails

*/

const getUser = (userId) =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          id: userId,
          name: `User ${userId}`,
        }),
      1000
    )
  );

const getPosts = (userId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000)
  );

const getComments = (postId) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(["Comment 1", "Comment 2"]), 1000)
  );

getUser(1)
  .then((user) => {
    console.log(`User:`, user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
    return getComments(posts[0]);
  })
  .then((comments) => {
    console.log("Comments:", comments);
  })
  // now catch implement error logic
  .catch((error) => console.error("Error:", error));
