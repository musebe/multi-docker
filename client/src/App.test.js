import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {});

script:
  - docker run -e CI=true USERNAME/react-test npm test -- --coverage
