import React, { memo } from 'react';
import * as FiIcons from 'react-icons/fi';
import { FiAlertTriangle } from 'react-icons/fi';

const SafeIcon = memo(({ icon, name, ...props }) => {
  let IconComponent;
  
  try {
    IconComponent = icon || (name && FiIcons[`Fi${name}`]);
  } catch (e) {
    IconComponent = null;
  }

  return IconComponent 
    ? React.createElement(IconComponent, props)
    : <FiAlertTriangle {...props} />;
});

SafeIcon.displayName = 'SafeIcon';

export default SafeIcon;