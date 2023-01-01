import { Product } from "types/product";
import { PLACEHOLDER_IMG } from "constants/placeholderImage";
import * as Styled from "./ProductList.style";

interface RowProps {
  product: Product;
}

const Row = (props: RowProps) => {
  const {
    product: { name, thumbnail, price },
  } = props;
  return (
    <Styled.ResultTrow>
      <Styled.TableData>
        <Styled.Thumbnail src={thumbnail || PLACEHOLDER_IMG} />
        <Styled.Name>{name}</Styled.Name>
      </Styled.TableData>
      <Styled.Td>카테고리</Styled.Td>
      <Styled.Td>{price}</Styled.Td>
      <Styled.Td>수량</Styled.Td>
    </Styled.ResultTrow>
  );
};

export default Row;
