import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ coin }) {
  return (
    <div className="home-crypto">
      <Link to={`/${coin.id}`}>
        <span className="home-crypto-image">
          <img src={coin.image} />
        </span>
        <span className="home-crypto-name">{coin.name}</span>
        {coin.price_btc && <span className="home-crypto-prices">
          <span className="home-crypto-btc">
            <img src="/bitcoin.webp" />
            {coin.price_btc.toFixed(10)} BTC
          </span>
          <span className="home-crypto-usd">({coin.price_usd.toFixed(10)} USD)</span>
        </span>}
      </Link>
    </div>
  )
}