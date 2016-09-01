import YoutubeVideoScraper from '@joegesualdo/youtube-video-scraper-node';

class YoutubeVideoInfo {
  constructor(videoId) {
    this.videoId = videoId
    return new Promise((resolve, reject) => {
      new YoutubeVideoScraper(videoId)
      .then(scraper => {
        this.scraper = scraper;
        scraper.getMetaInformation()
        .then(meta => {
          this.metaInformation = meta
          resolve(this)
        })
      })
      .catch(err => {
        console.log(err)
      })
    })
  }
  getDescription() {
    return this.getMeta('description')
  }
  getTitle() {
    return this.getMeta('title')
  }
  getTags() {
    return this.getMetas('og:video:tag')
  }
  getChannelId() {
    return this.getMeta('channelId')
  }
  isFamilyFriendly() {
    return this.getMeta('isFamilyFriendly')
  }
  getViewCount() {
    return this.getMeta('interactionCount')
  }
  getDatePublished() {
    return this.getMeta('datePublished')
  }
  getGenre() {
    return this.getMeta('genre')
  }
  getMeta(typeValue) {
    return new Promise((resolve, reject) => {
      this.scraper.getMetaInformation()
      .then(metaInformation => {
        metaInformation.forEach(meta => {
          if (meta.typeValue === typeValue) {
            resolve(meta.value);
          }
        })
      })
    })
  }
  getMetas(typeValue) {
    return new Promise((resolve, reject) => {
      let values = []
      this.scraper.getMetaInformation()
      .then(metaInformation => {
        metaInformation.forEach(meta => {
          if (meta.typeValue === typeValue) {
            values.push(meta.value)
          }
        })
        resolve(values);
      })
      .catch(err => {
        console.log(err)
      })
    })
  }
  getInfo(){
    let result = {}
    return new Promise((resolve, reject) => {
      this.getGenre()
      .then(genre => {
        return new Promise(resolve => {
          result.genre = genre;
          resolve(this)
        })
      })
      .then(instance => {
        return new Promise(resolve => {
          instance.getDatePublished()
          .then(publishedDate => {
            result.publishedDate = publishedDate;
            resolve(instance);
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
      .then(instance => {
        return new Promise(resolve => {
          instance.getViewCount()
          .then(viewCount => {
            result.viewCount = Number(viewCount);
            resolve(instance)
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
      .then(instance => {
        return new Promise(resolve => {
          instance.isFamilyFriendly()
          .then(isFamilyFriendly => {
            result.isFamilyFriendly = Boolean(isFamilyFriendly);
            resolve(instance)
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
      .then(instance => {
        return new Promise(resolve => {
          instance.getChannelId()
          .then(id => {
            result.channelId = id;
            resolve(instance)
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
      .then(instance => {
        return new Promise(resolve => {
          instance.getTitle()
          .then(title => {
            result.title = title;
            resolve(instance)
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
      .then(instance => {
        return new Promise(resolve => {
          instance.getDescription()
          .then(description => {
            result.description = description;
            resolve(instance)
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
      .then(instance => {
        return new Promise(resolve => {
          instance.getTags()
          .then(tags => {
            result.tags = tags;
            resolve(instance)
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
      .then(instance => {
        return new Promise(resolve => {
          instance.getDescription()
          .then(description => {
            result.description = description; 
            resolve(instance)
          })
          .catch(err => {
            console.log(err)
          })
        })
      })
      .then(() => {
        resolve(result)
        // console.log(result)
      })
      .catch(err => {
        console.log(err)
      })
    })
  }
}

export default YoutubeVideoInfo
