var Videos = Backbone.Collection.extend({
  
  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(q) {
    this.fetch({
      data: {
        key: window.YOUTUBE_API_KEY,
        q: q,
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });  
  },
  
  parse: function(response) {
    return response.items;
  }

});