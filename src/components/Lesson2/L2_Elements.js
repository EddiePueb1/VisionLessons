import styled from 'styled-components';

export const StopSign = styled.img`
  display: none;
`;

export const ImgContainer = styled.div ``;

export const ImgCanvas = styled.canvas.attrs(props => ({
  style : {
    background: props.backgroundColor,
  }
})) ``;

export const PreviewContainer = styled.div``;

export const TextContainer = styled.h3``;

export const PreviewCanvas = styled.canvas.attrs(props => ({
  style: {
    background: props.backgroundColor,
  },
})) `
  
`;

export const Sliders = styled.div``;

export const Slider = styled.input`
`;
