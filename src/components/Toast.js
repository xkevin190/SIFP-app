
import { ToastAndroid} from 'react-native';

export default function Toast(props) {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      1,
      ToastAndroid.CENTER,
      25,
      60,
    );
    return null;
  }
  return null;
};
