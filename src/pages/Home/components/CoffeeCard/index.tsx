import { QuantityInput } from "../../../../components/QuantityInput";
import { RegularText, TitleText } from "../../../../components/Typography";
import { ShoppingCart } from "phosphor-react";
import { 
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer, 
  Description, 
  Name, 
  Tags 
} from "./styles";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1687132800&Signature=AnyfCgGysJpWlXqXbRvOCCCHWYtPNn2D2c~GqXnRPacv5iqE5NAj0zIck7uCJG44pjDEzsE6i5ylpjBdzRdWjRwd4rndUDB3xaRNOcszbI9jiZl7qP7FewpskK7xesBGXmikWbUNT6BOedPP17QlIsFQEKTuu6-7okzwrPG2Ej3ztT7OG7IEDnpKiI95xfOZQZPPa6sDRfq3ywQz2caRuW-R~qY2X02vZd6zTuBDEUysHRChJ-x8McNgj1O~7CN5of5tYQ1lCcy8uGyPgHQ0O5LJMyE80H7szj6t4rNQLBpN8sP2k-aTcADcS4YBeb0GjpEzaKGZz2i68kOXJxVTqQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
    
      <Tags>
        <span>Tradicional</span>
        <span>Com leite</span>
      </Tags>

      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9,90</TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}