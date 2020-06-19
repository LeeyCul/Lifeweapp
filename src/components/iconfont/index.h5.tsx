/* tslint:disable */
/* eslint-disable */

import Taro, { FunctionComponent } from '@tarojs/taro';
import Icon from './h5';

interface Props {
  name: 'icon-nvhai' | 'icon-nanhai' | 'icon-cat' | 'icon-chat-' | 'icon-kiss' | 'icon-love-letter1' | 'icon-love-letter-' | 'icon-microphone' | 'icon-potion' | 'icon-love-letter' | 'icon-love';
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color } = props;

  return <Icon name={name} size={parseFloat(Taro.pxTransform(size))} color={color} />;
};

IconFont.defaultProps = {
  size: 30,
};

export default IconFont;
