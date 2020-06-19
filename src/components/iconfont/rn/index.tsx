/* tslint:disable */
/* eslint-disable */

import { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconNvhai from './IconNvhai';
import IconNanhai from './IconNanhai';
import IconCat from './IconCat';
import IconChat from './IconChat';
import IconKiss from './IconKiss';
import IconLoveLetter1 from './IconLoveLetter1';
import IconLoveLetter from './IconLoveLetter';
import IconMicrophone from './IconMicrophone';
import IconPotion from './IconPotion';
import IconLoveLetter from './IconLoveLetter';
import IconLove from './IconLove';

export type IconNames = 'icon-nvhai' | 'icon-nanhai' | 'icon-cat' | 'icon-chat-' | 'icon-kiss' | 'icon-love-letter1' | 'icon-love-letter-' | 'icon-microphone' | 'icon-potion' | 'icon-love-letter' | 'icon-love';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-nvhai':
      return <IconNvhai {...rest} />;
    case 'icon-nanhai':
      return <IconNanhai {...rest} />;
    case 'icon-cat':
      return <IconCat {...rest} />;
    case 'icon-chat-':
      return <IconChat {...rest} />;
    case 'icon-kiss':
      return <IconKiss {...rest} />;
    case 'icon-love-letter1':
      return <IconLoveLetter1 {...rest} />;
    case 'icon-love-letter-':
      return <IconLoveLetter {...rest} />;
    case 'icon-microphone':
      return <IconMicrophone {...rest} />;
    case 'icon-potion':
      return <IconPotion {...rest} />;
    case 'icon-love-letter':
      return <IconLoveLetter {...rest} />;
    case 'icon-love':
      return <IconLove {...rest} />;
  }

  return null;
};

export default IconFont;
