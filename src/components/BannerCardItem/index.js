// Write your code here.
import './index.css'

const BannerCard = ({headerText, description, className}) => (
  <li className={`bannerCard ${className}`}>
    <h2 className="hani">{headerText}</h2>
    <p className="hani">{description}</p>
    <button type="button">Show More</button>
  </li>
)

export default BannerCard
