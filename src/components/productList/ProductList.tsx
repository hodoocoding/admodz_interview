import { useEffect } from "react";
import { useProductsQuery } from "hooks/useProductsQuery";
import { ProductType } from "types/product";
import { useProductStore } from "store/useProductStore";
import { Header } from "components/header";
import * as Styled from "./ProductList.style";
import Row from "./Row";

const ProductList = () => {
  const { data, isSuccess, isLoading } = useProductsQuery();
  const { products, fetchProducts } = useProductStore();

  console.log(products);

  useEffect(() => {
    fetchProducts(data?.products);
  }, [isSuccess && !isLoading]);

  if (!products) return null;

  return (
    <>
      <Header />
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
          {products.length &&
            products.map((product: ProductType) => {
              return <Row product={product} key={product.id} />;
            })}
        </Styled.Tbody>
      </Styled.Container>
    </>
  );
};

export default ProductList;
