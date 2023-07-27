import styled from "styled-components";


export const CardModel = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ThumbnailCardModel = styled.img`
  width: 100%;
  min-height: 350px;
  border-radius: 10px;
`;

export const TitleCardModel  = styled.span`
  color: ${({theme}) => theme.colors.primary};
  font-size: 20px;
  font-weight: 700;
`;

export const DetailsCardModel = styled.span`
  color: 	#400080;
  font-weight: 700;
  font-size: 18px;
`;