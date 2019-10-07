import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function authLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

authLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
