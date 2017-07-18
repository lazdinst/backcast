var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    //This Initialized tag is janky, need to find more appropriate solution
    this.initialized = false;
    this.render();
    this.collection.on('sync', this.render, this);
    this.initialized = true;
  },

  renderVideo: function(videos) {
    for(var i = 0; i < 5; i ++) {
      var videoListEntryView = new VideoListEntryView({model: videos[i]});
      this.$el.append(videoListEntryView.render());      
    }
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    //If not initialized, render videos for the first time.
    if (this.initialized) {
      this.renderVideo(this.collection.models);
    }

    
    return this;
  },

  //Original Below
  template: templateURL('src/templates/videoList.html')
});

   
   //OLD CODE - While loop to generate the 5 video in the list entry view 
    // var i = 0;
    // while (i < 5) {
    //   var videoListEntryView = new VideoListEntryView({model: videos[i]});
    //   this.$el.append(videoListEntryView.render());
    //   i++;
    // }