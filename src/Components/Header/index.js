import React from 'react'
import { Bar, BarContent, Title } from './Styled'
import { ArrowBackIosRounded } from '@material-ui/icons'

const Header = (props) => {
  return (
    <Bar>
      <BarContent>
        <ArrowBackIosRounded />
      </BarContent>
      <Title>
        {props.title}
      </Title>

      <BarContent>

      </BarContent>
    </Bar>
  )
}

export default Header