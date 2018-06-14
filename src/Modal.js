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
            <ModalCard>
                <CloseButton onClick={handleToggle}>Close</CloseButton>
                <div>
                {children}
                </div>
            </ModalCard>
            <Background onClick={handleToggle}/>
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
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalCard = styled.div`
    position: relative;
    background: white;
    border-radius: 5px;
    padding: 15px;
    min-width: 320px;
    box-shadow: 2px 2px 10px rgba(0,0,0, 0.4);
    z-index: 10;
    margin-bottom:10%;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
`;

const Background = styled.div`
    position: absolute;
    width: 100%;
    height:100%;
    top: 0;
    left:0;
    background: rgba(0, 0, 0, 0.5);
`;