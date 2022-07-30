Given the following React Router setup, which component would be rendered for the route /post?

<Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/post/:id" component={Post} />
  <Route component={NoMatch} />
</Switch>

Home

Home

Post

Post

NoMatch

NoMatch
Yes, without a ?, the route for the Post component must be /post/something.