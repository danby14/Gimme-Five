import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem;
`;

const rotate = keyframes`
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => `${props.size}${props.sizeUnit}`};
  height: ${props => `${props.size}${props.sizeUnit}`};
  border: ${props => `${props.size / 5}${props.sizeUnit}`} solid ${props => props.color};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 0.75s linear infinite;
`;

export const CircleSpinner = ({ size, color, loading, sizeUnit }) => {
  return (
    loading && (
      <Container>
        <Wrapper size={size} color={color} sizeUnit={sizeUnit} />
      </Container>
    )
  );
};

CircleSpinner.defaultProps = {
  loading: true,
  size: 3,
  color: '#000',
  sizeUnit: 'rem',
};

CircleSpinner.propTypes = {
  loading: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  sizeUnit: PropTypes.string,
};
