Router.configure({
    layoutTemplate:'layout'

});

Router.map(function(){
    this.route('about', {path: '/'});
    this.route('time', {path: '/:date'});

});
