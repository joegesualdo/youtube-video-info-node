let YoutubeVideoInfo = require('./../dist').default;

new YoutubeVideoInfo('D_U6luQ6I90')
.then(instance => {
  instance.getInfo()
  .then(info => {
    console.log(info)
  })
  .catch(err => {
    console.log(err)
  })
})


