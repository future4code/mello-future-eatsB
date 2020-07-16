import React, {useContext, useState} from "react";
import FiltersContext from '../../Contexts/Filters'

import styled from "styled-components";


const SearchStyled = styled.input`
 width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  `

  
const SearchCard = (props) => {

  const {filters, dispatch} = useContext(FiltersContext)
  const [productSearch, setProductSearch] = useState(filters.productSearch)
  
  const handleChange = (event) => setProductSearch(event.target.value)

  const applyFilter = () => {
    const filterAction = {
        type: "SET_FILTERS",
        productSearch,

    }
    dispatch(filterAction)

  }
  /* BOTÃO PARA TESTAR O FILTRO */
  return (
    <div>
      <form onSubmit>
        <SearchStyled placeholder="Restaurante" onChange={handleChange} value={productSearch}/>
        <button type="submit" onClick={applyFilter}>Pesquisar</button>
      </form>
   
    </div>
  );
};

export default SearchCard;