var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
    
  },

  render: function() {
    //Render App View
    //AppView is created on the index.html when backbone initializes
    //Sample data is 'imported' in the AppView.initialize function above
    this.$el.html(this.template());

    //Render Video Player View
    //What am I passing into VideoPlayerView? => The Selected Video?
    var videoPlayerView = new VideoPlayerView( /*- What am I passing? Object of Attributes? -*/);
    this.$el.html(this.template(this.model.attributes));


    //Render VideoList View => Am I passing this.videos? It should be the collection of example data
    var videoListView = new VideoListView( /*- What am I passing? Object of Attributes? -*/);
    this.$el.html(this.template(this.model.attributes));

    //Render VideoList Entry View => this should grab the first 5 fives from the VideoListView?
    var videoListEntryView = new VideoListEntryView( /*- What am I passing? Object of Attributes? -*/);
    this.$el.html(this.template(this.model.attributes));

    //Render Search View
    this.$el.html(this.template());
    var searchView = new SearchView( /*- What am I passing? Object of Attributes? -*/ );

    return this;
  },

  template: templateURL('src/templates/app.html')
});