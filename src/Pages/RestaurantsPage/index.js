import React, { useState, useEffect, useContext } from "react";

import { useHistory, useParams } from "react-router";
import Back from "../../Assets/img/Back.svg";
import {
  Container,
  Bar,
  BackImg,
  TextBar,
  RestaurantPresentation,
  ImgLogo,
  GreenTextTitle,
  GreyTextCategory,
  GreyTextTime,
  GreyTextShipping,
  GreyTextAddress,
  RestaurantMenu,
  ItemCard,
  CategoryMenu,
  GreenText,
  GreySmallText,
  BlackText,
  AddButton,
  ImgMenu,
  BoxDescription,
  QuantityButton,
  ModalDiv,
  SelectStyle,
  OptionStyle,
  BlackTextModal,
  GreenTextModal,
} from "./styled";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import CartContext from "../../Contexts/CartContext/context";
import futureEats from "../../Services/futureEats";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    position: "absolute",
    width: 328,
    height: 216,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const RestaurantsPage = () => {
  const [products, setProducts] = useState([]);
  const [logoUrl, setLogoUrl] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [category, setCategory] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [shippingPrice, setShippingPrice] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [productAmount, setProductAmount] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState("");

  const { getRestaurantDetail: sendRestaurantDetail, dispatch } = useContext(
    CartContext
  );
  const { restaurantId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getRestaurantDetail();
    // eslint-disable-next-line
  }, []);

  const getRestaurantDetail = async () => {
    const axiosConfig = {
      headers: {
        auth: String(localStorage.getItem("token")),
      },
    };

    try {
      const response = await futureEats.get(
        `restaurants/${restaurantId}`,
        axiosConfig
      );
      setProducts(response.data.restaurant.products);
      setLogoUrl(response.data.restaurant.logoUrl);
      setRestaurantName(response.data.restaurant.name);
      setCategory(response.data.restaurant.category);
      setDeliveryTime(response.data.restaurant.deliveryTime);
      setShippingPrice(response.data.restaurant.shipping);
      setRestaurantAddress(response.data.restaurant.address);
    } catch (error) {
      console.log(error);
    }
  };

  const backToFeed = () => {
    history.push("/feed");
  };

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = (id) => () => {
    setSelectedProduct(products.filter((item) => item.id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sendToCart = () => {
    sendRestaurantDetail(restaurantId);

    dispatch({
      type: "ADD_TO_CART",
      product: selectedProduct,
      quantity: productAmount,
    });

    handleClose();
  };

  const body = (
    <ModalDiv style={modalStyle} className={classes.paper}>
      <BlackTextModal id="simple-modal-description">
        Selecione a quantidade desejada
      </BlackTextModal>
      <SelectStyle onChange={(e) => setProductAmount(e.target.value)}>
        <OptionStyle value={1}>1</OptionStyle>
        <OptionStyle value={2}>2</OptionStyle>
        <OptionStyle value={3}>3</OptionStyle>
        <OptionStyle value={4}>4</OptionStyle>
        <OptionStyle value={5}>5</OptionStyle>
        <OptionStyle value={6}>6</OptionStyle>
        <OptionStyle value={7}>7</OptionStyle>
        <OptionStyle value={8}>8</OptionStyle>
        <OptionStyle value={9}>9</OptionStyle>
        <OptionStyle value={10}>10</OptionStyle>
      </SelectStyle>
      <GreenTextModal onClick={sendToCart}>
        ADICIONAR AO CARRINHO
      </GreenTextModal>
    </ModalDiv>
  );

  return (
    <Container>
      <Bar>
        <BackImg onClick={backToFeed} src={Back} alt="Drop Right" />
        <TextBar>Restaurante</TextBar>
      </Bar>
      <RestaurantPresentation>
        <ImgLogo src={logoUrl} alt="Logo" />
        <GreenTextTitle>{restaurantName}</GreenTextTitle>
        <GreyTextCategory>{category}</GreyTextCategory>
        <GreyTextTime>{deliveryTime} min</GreyTextTime>
        <GreyTextShipping>Frete R${shippingPrice}</GreyTextShipping>
        <GreyTextAddress>{restaurantAddress}</GreyTextAddress>
      </RestaurantPresentation>
      {products &&
        products.map((product) => {
          return (
            <RestaurantMenu>
              <CategoryMenu>{product.category}</CategoryMenu>
              <ItemCard>
                <ImgMenu
                  src={product.photoUrl}
                  alt="ImgFood"
                />
                <BoxDescription>
                  <QuantityButton>1</QuantityButton>
                  <GreenText>{product.name}</GreenText>
                  <GreySmallText>{product.description}</GreySmallText>
                  <BlackText>R${product.price}</BlackText>
                  <AddButton type="button" onClick={handleOpen(product.id)}>
                    adicionar
                  </AddButton>
                </BoxDescription>
              </ItemCard>
            </RestaurantMenu>
          );
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
