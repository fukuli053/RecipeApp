import {TextInput} from 'react-native';
import styled from 'styled-components';
import {
  compose,
  color,
  size,
  typography,
  space,
  shadow,
  borderRadius,
} from 'styled-system';

import theme from '../utils/Theme';

const Input = styled(TextInput).attrs((props) => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#999',
}))(compose(borderRadius, typography, space, color, size, shadow));

export default Input;
