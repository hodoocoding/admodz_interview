import { Link, useLocation } from "react-router-dom";

import { ProductType } from "types/product";
import { PLACEHOLDER_IMG } from "constants/placeholderImage";
import { useDeleteMutation } from "hooks/useDeleteMutation";
import { useSidebarStore } from "store/useSidebarStore";
import { useProductStore } from "store/useProductStore";
import * as Styled from "./ProductList.style";

interface RowProps {
  product: ProductType;
}

const Row = (props: RowProps) => {
  const {
    product: { name, thumbnail, price, id, quantity },
  } = props;

  const { onClickToggle } = useSidebarStore();
  const { deleteProduct } = useProductStore();
  const location = useLocation();

  const { mutate } = useDeleteMutation();

  const onClickDeleteItem = (id: number | string) => {
    mutate(id, {
      onSuccess: () => {
        deleteProduct(id);
      },
    });
  };

  return (
    <Styled.ResultTrow key={id}>
      <Styled.TableData>
        <Styled.Thumbnail src={thumbnail || PLACEHOLDER_IMG} />
        <Styled.Name>{name}</Styled.Name>
      </Styled.TableData>
      <Styled.Td>카테고리</Styled.Td>
      <Styled.Td>{price}</Styled.Td>
      <Styled.Td>{quantity}</Styled.Td>
      <Styled.Td>
        <Styled.ButtonWrap>
          <Link to={`/product/${id}`} state={{ background: location }}>
            <Styled.Button onClick={() => onClickToggle()}>수정</Styled.Button>
          </Link>
          <Styled.Button onClick={() => onClickDeleteItem(id)}>
            삭제
          </Styled.Button>
        </Styled.ButtonWrap>
      </Styled.Td>
    </Styled.ResultTrow>
  );
};

export default Row;
