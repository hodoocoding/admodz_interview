import React, { ChangeEvent, useState, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PLACEHOLDER_IMG } from "constants/placeholderImage";
import * as Styled from "./ImageUploader.style";

type ImageUploaderProp = {
  setProductThumbnail: (image: string) => void;
};

const ImageUploader = (props: ImageUploaderProp) => {
  const { setProductThumbnail } = props;
  const [image, setImage] = useState<string | null>(); // 미리보기 이미지

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) {
        setImage(reader.result as string);
        setProductThumbnail(reader.result as string);
      }
      // e.target.value = "";
    };
    reader.readAsDataURL(files);
  };

  return (
    <Styled.Container>
      {image ? (
        <Styled.ImageWraper>
          <Styled.CloseButtonWrap
            onClick={() => {
              setImage(null);
              setProductThumbnail("");
            }}
          >
            <AiOutlineClose />
          </Styled.CloseButtonWrap>
          <Styled.Image src={image || PLACEHOLDER_IMG} />
        </Styled.ImageWraper>
      ) : null}
      <Styled.Label htmlFor="fileUpload">썸네일 업로드</Styled.Label>
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
