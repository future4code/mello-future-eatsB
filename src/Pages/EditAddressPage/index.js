import React from 'react'
import Header from '../../Components/Header'
import EditAddress from '../../Components/EditAddress'

const EditAddressPage = () => {
  return(
    <div>
      <Header 
        title='Endereço'/>
      <EditAddress />
    </div>
  )
}

export default EditAddressPage