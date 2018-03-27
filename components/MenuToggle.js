import React from 'react';
import { Icon } from 'react-native-elements';

const MenuToggle = (props) => {
  return (
    <Icon
      name="menu"
      color="#fff"
      onPress={ () => props.onMenuPress() }
    />
  );
};

export default MenuToggle;
