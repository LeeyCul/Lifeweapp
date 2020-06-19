Component({
  props: {
    // icon-nvhai | icon-nanhai | icon-cat | icon-chat- | icon-kiss | icon-love-letter1 | icon-love-letter- | icon-microphone | icon-potion | icon-love-letter | icon-love
    name: null,
    // string | string[]
    color: '',
    size: 30,
  },
  data: {
    quot: '"',
    svgSize: 30,
    isStr: true,
  },
  didMount() {
    const size = this.props.size;
    const color = this.props.color;

    this.setData({
      isStr: typeof color === 'string',
    });

    if (size !== this.data.svgSize) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
  disUpdate(prevProps) {
    const size = this.props.size;
    const color = this.props.color;

    if (color !== prevProps.color) {
      this.setData({
        isStr: typeof color === 'string',
      });
    }

    if (size !== prevProps.size) {
      this.setData({
        svgSize: size / 750 * my.getSystemInfoSync().windowWidth,
      });
    }
  },
});
