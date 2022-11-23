import * as React from 'react';


import TradeCard from './TradeCard'

export default function Trades(props) {
  const { listings } = props
  return (
    <>
    <TradeCard listings={listings}/>
    </>
  )
}