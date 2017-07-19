var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.listenTo(this.videos, 'sync', this.selectFirst);
    this.videos.search('rick astley');
    this.render();
  },


  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    //Render App View
    this.$el.html(this.template());

    //Render Video Player View
    var videoPlayerView = new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
      el: this.$('.player')  
    }).render();
   
    var videoListView = new VideoListView({
      collection: this.videos,
      el: this.$('.list')
    });
    videoListView.render();
    //this.$el.html(this.videoListViewTemplate());

    //Render VideoList Entry View => this should grab the first 5 fives from the VideoListView?
    //var videoListEntryView = new VideoListEntryView( /*- What am I passing? Object of Attributes? -*/);
    //this.$el.html(this.template());

    //Render Search View
    //this.$el.html(this.template());
    var searchView = new SearchView({
      collection: this.videos,
      el: this.$('.search')
    }).render();

    return this;
  },

  template: templateURL('src/templates/app.html'),

});