import { HeaderContainer } from "./styles";
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImg} />
      </div>
    </HeaderContainer>
  )
}