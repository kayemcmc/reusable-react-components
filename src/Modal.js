import React, { Component } from 'react';
import styled from 'styled-components';
import Portal from './Portal';

export default class Modal extends Component {
  render() {
    const { children, handleToggle, on} = this.props;
    return (
      <Portal>
      {on && (
        <ModalWrapper>
            <button onClick={handleToggle}></button>
            <div>
            {children}
            </div>
        </ModalWrapper>
      )}
  
        
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: teal;
`;