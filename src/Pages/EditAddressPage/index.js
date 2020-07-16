<<<<<<< HEAD
import React from "react";
import { Bar } from "../../Components/Header/Styled";
import Header from "../../Components/Header";

const EditAddressPage = () => {
  return (
    <div>
      <Header title="Endereço" />
    </div>
  );
};
=======
import React from 'react'
import Header from '../../Components/Header'
import EditAddress from '../../Components/EditAddress'
import { Container } from './Styled'

const EditAddressPage = () => {
  return(
    <Container>
      <Header
        title='Endereço'
      />
      <EditAddress />
    </Container>
  )
}
>>>>>>> d5fb4ad89f4066ee63ceae79d6c69af28a35693e

export default EditAddressPage;
