import React, { ChangeEvent, Dispatch, SetStateAction } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PLACEHOLDER_IMG } from "constants/placeholderImage";
import { ProductType } from "types/product";
import * as Styled from "./ImageUploader.style";

type ImageUploaderProp = {
  product: ProductType;
  setProduct: Dispatch<SetStateAction<ProductType>>;
};

const ImageUploader = (props: ImageUploaderProp) => {
  const { product, setProduct } = props;
  const { thumbnail } = product;

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setProduct({
          ...product,
          thumbnail: reader.result as string,
        });
      }
    };
    reader.readAsDataURL(files);
  };

  return (
    <Styled.Container>
      {thumbnail && (
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
          <Styled.Image src={thumbnail || PLACEHOLDER_IMG} />
        </Styled.ImageWraper>
      )}
      <Styled.Label
        htmlFor="fileUpload"
        aria-label={thumbnail ? "썸네일 교체" : "썸네일 추가"}
      >
        {thumbnail ? "썸네일 교체" : "썸네일 추가"}
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
