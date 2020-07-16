import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Back from "../../Assets/img/Back.svg"
import { Container, Bar, BackImg, TextBar, 
  RestaurantPresentation, ImgLogo, GreenTextTitle, 
  GreyTextCategory, GreyTextTime, GreyTextShipping,
  GreyTextAddress, RestaurantMenu, ItemCard, 
  CategoryMenu, GreenText, GreyText,
  GreySmallText, BlackText, AddButton, ImgMenu, 
  BoxDescription, QuantityButton, ModalDiv,
  SelectStyle, OptionStyle, BlackTextModal,
  GreenTextModal } 
  from './styled';
/* ------------------------------- */
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
/* ------------------------------- */

const baseUrl = 
    "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB"
 
/* ------------------------------- */

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: 328,
    height: 216,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
/* ------------------------------- */

const RestaurantsPage = () => {

  const [products, setProducts] = useState([]);
  const [logoUrl, setLogoUrl] = useState("")
  const [restaurantName, setRestaurantName] = useState("");
  const [category, setCategory] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");


  const { restaurantId } = useParams(); 

  useEffect(() => {
    getRestaurantDetail();
  }, [])
  
  const getRestaurantDetail = async() => {

    const axiosConfig = {
        headers: {
            auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpXdFp0TjN5QUwzRG40OE96ZkU1IiwibmFtZSI6Ik1hcmlhIiwiZW1haWwiOiJtYXJpYUBnbWFpbC5jb20iLCJjcGYiOiIxMTEuMjIyLjMzMy00NCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJBdi4gQW5nw6lsaWNhLCAxODE0LCAzMDUgLSBIaWdpZW7Ds3BvbGlzIiwiaWF0IjoxNTk0NzcyNzExfQ.9812N7XBG1cLsRAzM-RmIIyKrrBI7LYpfJp2Q1TSVAY",
        }
    };

    try {
        const response = await axios.get(`${baseUrl}/restaurants/${restaurantId}`, axiosConfig)
        setProducts(response.data.restaurant.products)
        setLogoUrl(response.data.restaurant.logoUrl)
        setRestaurantName(response.data.restaurant.name)
        setCategory(response.data.restaurant.category)
        setDeliveryTime(response.data.restaurant.deliveryTime)
        setShippingPrice(response.data.restaurant.shipping)
        setRestaurantAddress(response.data.restaurant.address)
    } catch(error) {
        console.log(error)
    }
  };

  /* ------------------------------- */
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <ModalDiv style={modalStyle} className={classes.paper}>
      <BlackTextModal id="simple-modal-description">Selecione a quantidade desejada</BlackTextModal>
      <SelectStyle>
        <OptionStyle>0</OptionStyle>
        <OptionStyle>1</OptionStyle>
        <OptionStyle>2</OptionStyle>
        <OptionStyle>3</OptionStyle>
        <OptionStyle>4</OptionStyle>
        <OptionStyle>5</OptionStyle>
        <OptionStyle>6</OptionStyle>
        <OptionStyle>7</OptionStyle>
        <OptionStyle>8</OptionStyle>
        <OptionStyle>9</OptionStyle>
        <OptionStyle>10</OptionStyle>
      </ SelectStyle>
      <GreenTextModal>ADICIONAR AO CARRINHO</GreenTextModal>
    </ModalDiv>
  );
  /* ------------------------------- */

  return (
    <Container>
      <Bar>
        <BackImg src={Back} alt="Drop Right"/>
        <TextBar>Restaurante</TextBar>
      </Bar>
      <RestaurantPresentation>
        <ImgLogo src={logoUrl} alt="Logo"/>
        <GreenTextTitle>{restaurantName}</GreenTextTitle>
        <GreyTextCategory>{category}</GreyTextCategory>
        <GreyTextTime>{deliveryTime} min</GreyTextTime>
        <GreyTextShipping>Frete R${shippingPrice}</GreyTextShipping>
        <GreyTextAddress>{restaurantAddress}</GreyTextAddress>
      </RestaurantPresentation>
      {products && products.map((product) => {
        return (
          <RestaurantMenu>
            <CategoryMenu>{product.category}</CategoryMenu>
            <ItemCard>
              <ImgMenu 
                src={product.photoUrl}
                srcSet={`${product.photoUrl}@2.png 2x, @3.png 3x`}
                alt="ImgFood"
              />
              <BoxDescription>
                <QuantityButton>1</QuantityButton>
                <GreenText>{product.name}</GreenText>
                <GreySmallText>{product.description}</GreySmallText>
                <BlackText>R${product.price}</BlackText>
                <AddButton type="button" onClick={handleOpen}>adicionar</AddButton>
              </BoxDescription>
            </ItemCard>
          </RestaurantMenu>
        )
      })}
      {/* ------------------------------- */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
      {/* ------------------------------- */}
    </Container>
   
  );
};

export default RestaurantsPage;