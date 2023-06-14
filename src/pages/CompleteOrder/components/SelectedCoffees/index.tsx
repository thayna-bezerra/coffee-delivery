import { TitleText } from "../../../../components/Typography";
import { CoffeeCartCard } from "../CoffeCartCart";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle"> 
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}