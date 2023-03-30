// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page,stage,loaders, actions }) => {
    const { createPage } = actions
  
    // page.matchPath is a special key that's used for matching pages
    // only on the client.
  
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /offending-module/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
    if (page.path.match(/^\/admin/)) {
      page.matchPath = "/admin*"
  
      // Update the page.
      createPage(page)
    }
  }