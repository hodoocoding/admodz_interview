import { Product } from "types/product";
import { PLACEHOLDER_IMG } from "constants/placeholderImage";
import { useDeleteMutation } from "hooks/queries/useDeleteMutation";
import { ChangeEvent } from "react";
import * as Styled from "./ProductList.style";

interface RowProps {
  product: Product;
}

const Row = (props: RowProps) => {
  const {
    product: { name, thumbnail, price, id },
  } = props;

  const { mutate } = useDeleteMutation();

  const onClickDeleteItem = (id: string) => {
    console.log("here");
    mutate(id, {
      onSuccess: () => {
        console.log("삭제 성공");
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
      <Styled.Td>수량</Styled.Td>
      <Styled.Td>
        <Styled.ButtonWrap>
          <Styled.Button>수정하기</Styled.Button>
          <Styled.Button onClick={() => onClickDeleteItem(id)}>
            삭제하기
          </Styled.Button>
        </Styled.ButtonWrap>
      </Styled.Td>
    </Styled.ResultTrow>
  );
};

export default Row;
