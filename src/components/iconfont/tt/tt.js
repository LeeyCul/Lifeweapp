Component({
  properties: {
    // icon-nvhai | icon-nanhai | icon-cat | icon-chat- | icon-kiss | icon-love-letter1 | icon-love-letter- | icon-microphone | icon-potion | icon-love-letter | icon-love
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      value: '',
      observer: function(color) {
        this.setData({
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 30,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * tt.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    svgSize: 30 / 750 * tt.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
});
