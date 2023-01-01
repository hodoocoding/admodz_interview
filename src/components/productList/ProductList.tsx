import React from "react";
import { useProductQuery } from "hooks/queries/useProductsQuery";
import { Product } from "types/product";
import * as Styled from "./ProductList.style";
import Row from "./Row";

const ProductList = () => {
  const { data } = useProductQuery();

  if (!data) return null;

  return (
    <Styled.Container>
      <Styled.Table>
        <Styled.Thead>
          <Styled.Trow>
            <Styled.Th1>썸네일</Styled.Th1>
            <Styled.ThName>상품 이름</Styled.ThName>
            <Styled.Th2>카테고리</Styled.Th2>
            <Styled.Th2>상품 가격</Styled.Th2>
            <Styled.Th2>수량</Styled.Th2>
            <Styled.Th2>수정하기</Styled.Th2>
          </Styled.Trow>
        </Styled.Thead>
      </Styled.Table>
      <Styled.Tbody>
        {data.products.map((product: Product) => {
          return <Row product={product} key={product.id} />;
        })}
      </Styled.Tbody>
    </Styled.Container>
  );
};

export default ProductList;
