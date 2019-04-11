/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require("axios")
const crypto = require("crypto")

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions

  // fetch raw data from the randomuser api
  const fetchRedditPosts = () =>
    axios.get(`https://www.reddit.com/r/aww.json?raw_json=1`)
  // await for results
  const res = await fetchRedditPosts()

  // map into these results and create nodes
  res.data.data.children.map((post, i) => {
    // Create your node object
    const postNode = {
      // Required fields
      id: `${post.data.id}`,
      parent: `__SOURCE__`,
      internal: {
        type: `RedditPost`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      title: post.data.title,
      path: `/reddit/${post.data.id}`,
      thumbnail: post.data.thumbnail,
      img: post.data.preview.images[0].source.url,

      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(postNode))
      .digest(`hex`)
    // add it to postNode
    postNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(postNode)
  })

  return
}
