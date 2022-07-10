import styled from 'styled-components';


export const LessonInfo = styled.div `
  display: flex;
  flex-direction: column;
  

  @media screen and (min-width: 1560px) {
    transform: scale(1.3);
    margin: 10rem;
  }

  
`;

export const LessonDescription = styled.p `
  color: white;
`;
export const LessonWrapper = styled.div.attrs(props => ({
  style: {
    background: props.backgroundColor,
    color: props.fontColor ? "white" : "black",

   
  },
})) `
  display: flex;
  flex-direction: column;
  width: 80vh;
  height: 80%;
  padding: 5%;
  justify-content: flex-start;
  border-radius: 50px;


  @media screen and (min-width:1200px) {
    transform: scale(1);
    width: 80vw;

  }

  @media screen and (min-width: 1560px) {
    transform: scale(1.2);
    width: 100vw;
    transition: 1s ease;
  }

  
  
`;

export const LessonName = styled.h1`
  color: white;
`;


export const Oner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  

  & output {
    margin: auto;
    font-size: 1.5rem;
  }
`;

export const LessonLabel = styled.label`
  position: static;
  margin-right: 20px;

`;




