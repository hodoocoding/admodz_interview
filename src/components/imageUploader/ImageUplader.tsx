import React, { ChangeEvent } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PLACEHOLDER_IMG } from "constants/placeholderImage";
import { ProductType } from "types/product";
import * as Styled from "./ImageUploader.style";

type ImageUploaderProp = {
  product: ProductType;
  setProduct: (image: any) => void;
};

const ImageUploader = (props: ImageUploaderProp) => {
  const { product, setProduct } = props;

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setProduct({
          ...product,
          thumbnail: reader.result,
        });
      }
      e.target.value = "";
    };
    reader.readAsDataURL(files);
  };

  return (
    <Styled.Container>
      {product.thumbnail ? (
        <Styled.ImageWraper>
          <Styled.CloseButtonWrap
            onClick={() => {
              setProduct({
                ...product,
                thumbnail: "",
              });
            }}
          >
            <AiOutlineClose />
          </Styled.CloseButtonWrap>
          <Styled.Image src={product.thumbnail || PLACEHOLDER_IMG} />
        </Styled.ImageWraper>
      ) : null}
      <Styled.Label
        htmlFor="fileUpload"
        aria-label={product.thumbnail ? "교체하기" : "썸네일 추가하기"}
      >
        {product.thumbnail ? "교체하기" : "썸네일 추가하기"}
      </Styled.Label>
      <Styled.Input
        accept="image/*"
        type="file"
        id="fileUpload"
        onChange={handleUpdate}
      />
    </Styled.Container>
  );
};

export default ImageUploader;
