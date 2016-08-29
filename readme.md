## @joegesualdo/youtube-video-info-node [![Build Status](https://travis-ci.org/joegesualdo/youtube-video-info-node.svg?branch=master)](https://travis-ci.org/joegesualdo/youtube-video-info-node)
> Get information for a youtube video.

## Install
```
$ npm install --save @joegesualdo/youtube-video-info-node 
```

## Usage
```javascript
import YoutubeVideoInfo from 'joegesualdo/youtube-video-info-node';

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


```

## API
### `YoutubeVideoInfo(videoId)`
> Creates an instance of YoutubeVideoInfo 

| Name | Type | Description |
|------|------|-------------|
| videoId | `String` | The id of the youtube video you want info for|

Returns: `YoutubeVideoInfo` instance

```javascript
import YoutubeVideoInfo from 'joegesualdo/youtube-video-info-node';

new YoutubeVideoInfo('D_U6luQ6I90')
.then(instance => {
  ...
})
```

### `getInfo()`
> Gets the info for a youtube video.

Returns: `Object` where the key/values represent data for a youtube video.

```javascript
import YoutubeVideoInfo from 'joegesualdo/youtube-video-info-node';

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
```
## Test
```
$ npm test
```
## Build
```
$ npm run build
```

## License
MIT © [Joe Gesualdo]()
