var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.initialized = false;
    this.render();
    this.collection.on('sync', this.render, this);
    this.initialized = true;
  },

  renderVideo: function(video) {
    var i = 0;
    while (i < 5) {
      var videoListEntryView = new VideoListEntryView({model: video[i]});
      this.$el.append(videoListEntryView.render());
      i++;
    }
  },
  
  //Original Below
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    if (this.initialized) {
      this.renderVideo(this.collection.models);
    }
    return this;
  },

  //Original Below
  template: templateURL('src/templates/videoList.html')
  

});



    // for (var i = 0; i < 5; i++) {
    //   this.renderMovie(this.collection.models[i]);
    // }