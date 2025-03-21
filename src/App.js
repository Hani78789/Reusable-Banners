import './App.css'
import BannerCard from './components/BannerCardItem'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

const App = () => (
  <div>
    <h1>The Best Designs</h1>
    <h1>Top-Quality Products</h1>
    <h1>Exclusive Deals</h1>
    <ul>
      {bannerCardsList.map(card => (
        <BannerCard
          key={card.id}
          headerText={card.headerText}
          description={card.description}
          className={card.className}
        />
      ))}
    </ul>
  </div>
)

export default App
