import styled from "styled-components";

import Dropdown from "../../Assets/img/Dropdown.svg"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 640px;
`;

export const Bar = styled.div`
    top: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 64px;
    border-bottom: 0.5px solid rgba(0, 0, 0, 0.25);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 var(--black-25);
    background-color: #ffffff;
`;

export const BackImg = styled.img`
    position: absolute;
    width: 23px;
    height: 24px;
    top: 30px;
    left: 16px;
    object-fit: contain;
`;

export const TextBar = styled.p`
    color: #000000;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;

    position: absolute;
    top: 33px;
`;

export const RestaurantPresentation = styled.div`
    position: absolute;
    top: 81px;

    display: flex;
    flex-direction: column;
`;

export const ImgLogo = styled.img`
    width: 328px;
    height: 120px;
    object-fit: cover;

    border-radius: 8px 8px 0 0;
`;

export const RestaurantMenu = styled.div`
    position: relative;
    top: 230px;

    display: flex;
    flex-direction: column;
`;

export const ItemCard = styled.div`
    width: 328px;
    height: 112px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    margin-top: 8px;

    display: flex;
`;

export const StandardText = styled.p`
    font-size: 16px;
`;

export const CategoryMenu = styled(StandardText)`
    width: 328px;
    height: 34px;
    border-bottom: 0.5px solid black;

    margin-top: 16px;
`;

export const StandardSmallText = styled.p`
    font-size: 12px;
`;

export const GreenTextTitle = styled(StandardText)`
    color: #5CB646;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;

    position: absolute;
    width: 328px;
    height: 18px;
    top: 132px;
`;

export const GreyTextCategory = styled(StandardText)`
    color: #B8B8B8;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;

    position: absolute;
    width: 104px;
    height: 18px;
    top: 158px;
`;

export const GreyTextTime = styled(StandardText)`
    color: #B8B8B8;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;

    position: absolute;
    width: 104px;
    height: 18px;
    top: 184px;
`;

export const GreyTextShipping = styled(StandardText)`
    color: #B8B8B8;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;

    position: absolute;
    width: 104px;
    height: 18px;
    top: 184px;
    right: 128px;
`;

export const GreyTextAddress = styled(StandardText)`
    color: #B8B8B8;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;

    position: absolute;
    width: 328px;
    height: 18px;
    top: 210px;
`;

export const GreenText = styled(StandardText)`
    color: #5CB646;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;

    position: absolute;
    top: 76px;
    right: 49px;
    width: 167px;
    height: 18px;
`;

export const GreyText = styled(StandardText)`
    color: #B8B8B8;
`;

export const GreySmallText = styled(StandardSmallText)`
    color: #B8B8B8;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;

    position: absolute;
    bottom: 30px;
    right: 16px;
    width: 200px;
    height: 30px;
`;

export const BlackText = styled(StandardText)`
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;

    position: absolute;
    bottom: 15px;
    right: 98px;
    width: 118px;
    height: 19px;
`;

export const AddButton = styled.button`
    width: 90px;
    height: 31px;
    border-radius: 8px 0 8px 0;
    border: solid 1px #5cb646;
    color: #5cb646;
    background-color: transparent;

    position: absolute;
    bottom: 0;
    right: 0;
`;

export const ImgMenu = styled.img`
    width: 96px;
    height: 112px;
    object-fit: cover;
    color: #B8B8B8;
    font-size: 12px;
    text-align: center;
    border-radius: 8px 0 0 8px;

    position: absolute;
    top: 58px;
    left: 0;
    z-index: -1;
`;

export const BoxDescription = styled.div`
    display: flex;
    flex-direction: column;

    width: 232px;
    height: 112px;
`;

export const QuantityButton = styled.button`
    width: 33px;
    height: 33px;
    border-radius: 0 8px 0 8px;
    border: solid 1px #5cb646;
    color: #5cb646;
    background-color: transparent;

    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;

    position: absolute;
    top: 58px;
    right: 0;
`;

export const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SelectStyle = styled.select`
    width: 296px;
    height: 56px;
    border-radius: 4px;
    border: solid 1px #b8b8b8;

    position: absolute;
    top: 92px;
    padding-left: 16px;
    padding-right: 16px;

    -webkit-appearance: none; 
    -moz-appearance: none;
    appearance: none;       /* remove default arrow */
    background-image: url(${Dropdown});   /* add custom arrow */
    background-repeat: no-repeat;
    background-position: 255px center;
`;

export const OptionStyle = styled.option`
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #000000;
`;

export const BlackTextModal = styled(StandardText)`
    color: #000000;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    
    position: absolute;
    text-align: center;
    top: 43px;
`;

export const GreenTextModal = styled(StandardText)`
    color: #5CB646;
    
    position: absolute;
    bottom: 21px;
    right: 16px;
`;
