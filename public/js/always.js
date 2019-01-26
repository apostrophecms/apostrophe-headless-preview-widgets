apos.define('apostrophe-headless-preview-widgets', {
  extend: 'apostrophe-widgets',
  construct: function (self, options) {
    self.play = function ($widget, data, options) {
      if (data.headlessUrl) {
        self.api('load', {
          data: data
        }, function (data) {
          $widget.find('[data-apos-headless-preview-target]').html(data.body);
          console.log(data);
        }, function (err) {
          if (err) {
            console.log('error from server');
            console.log(err);
          }
        });
      }
    };
  }
});
