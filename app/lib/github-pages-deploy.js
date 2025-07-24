const ghpages = require('gh-pages');

ghpages.publish(
  'out',
  {
    branch: 'gh-pages',
    repo: 'https://github.com/alphastar-avi/serene-sprite.git',
    user: {
      name: 'Avinash Kumar',
      email: 'avinash.kumar@example.com'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
