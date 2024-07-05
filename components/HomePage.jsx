import React from 'react'
import vidjo6 from '../assets/vidjo6.mp4'
import '../components/HomePage.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const HomePage = () => {

  const [coins, setCoins] = useState([])
  const [allCoins, setAllCoins] = useState([])

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '45',
      offset: '0'
    },
    headers: {
      'x-rapidapi-key':  import.meta.env.VITE_KEY,
      'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    axios.request(options).then((response) => {
        setCoins(response.data.data.coins)
        setAllCoins(response.data.data.coins)
    }).catch(err => console.log(err))
}, [])

console.log(coins)

const SearchCoin = (e) => {
  const filteredData = allCoins.filter(c => c.name.toLowerCase().includes(e.toLowerCase()))
  setCoins(filteredData)
}

  return (
    <div>
       <div className='appi'>
          <video className='video' src={vidjo6} autoPlay loop muted width="1473px"></video>
          <h1 className='large'>Largest Crypto Marketplace</h1>
          <p className='paragraph'>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.
          <input type='text' placeholder='Search Cryptocurrency' className='searchinput' onChange={e => SearchCoin(e.target.value)}></input>
          </p>
          <div className='marketplace'>
          {
  coins.map((currency, index) => (
    <div class="nft" key={index}>
    <div class='main'>
      <img class='tokenImage' src={currency.iconUrl} alt="NFT" />
      <h2 className='emri'>{currency.name}</h2>
      <div class='tokenInfo'>
        <div class="price">
          <ins>◘</ins>
          <p>Price: {Number(currency.price).toFixed(4)}</p>
        </div>
        <div class="price">
          <ins>◘</ins>
          <p>Change: {Number(currency.change).toFixed(5)}</p>
        </div>
        <div class="duration">
          <ins>◷</ins>
          <p>24h Volume {currency.marketCap}</p>
        </div>
      </div>
      <hr />
    </div>
  </div>
  )) 
 }
          </div>
       </div>
    <footer class="footer">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-facebook"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-twitter"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-linkedin"></ion-icon>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <ion-icon name="logo-instagram"></ion-icon>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;CryptoMarket 2024 | All Rights Reserved</p>
  </footer>
    </div>
  )
}

export default HomePage