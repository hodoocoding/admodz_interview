/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Styled from "./Product.style";

type ProductProp = {
  id: string;
  name: string;
  thumbnail: string;
  price: number;
};

function Product(props: ProductProp) {
  const { id, thumbnail, name, price } = props;
  return (
    <Styled.Container key={id}>
      {/* <Styled.Image src={thumbnail} /> */}
      <Styled.Name>{name} </Styled.Name>
      <Styled.Amount>{price}</Styled.Amount>
    </Styled.Container>
  );
}

export default Product;
