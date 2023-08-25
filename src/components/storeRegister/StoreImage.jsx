import React, { useState } from 'react';
import * as S from './style/StoreImage.style'

const StoreImage = () => {
  const [imageSrcs, setImageSrcs] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);

  const onUpload = (e) => {
    const files = e.target.files;

    if (files.length === 0) {
      return;
    }

    if (uploadedImages.length + files.length > 8) {
      alert('이미지는 최대 8개까지 등록할 수 있습니다.');
      return;
    }

    const newImageSrcs = [];
    const newUploadedImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (!isFileAlreadyUploaded(file)) {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          newImageSrcs.push(reader.result || null);
          newUploadedImages.push(file);
          setImageSrcs(newImageSrcs);
          setUploadedImages(newUploadedImages);
        };
      } else {
        alert(`${file.name} 파일은 이미 업로드되었습니다.`);
      }
    }
  };

  const isFileAlreadyUploaded = (file) => {
    return uploadedImages.some((uploadedFile) => uploadedFile.name === file.name);
  };

  const removeImage = (index) => {
    const newImageSrcs = [...imageSrcs];
    newImageSrcs.splice(index, 1);
    setImageSrcs(newImageSrcs);
  };

  return (
    <>
      <S.TableLine>
        <div className="table_title">
          <span>대표이미지</span>
        </div>
        <div className="table_content">
          <S.ImgDiv>
            <S.ImageUpload>
              <div>
                <label htmlFor="image_input">
                  이미지 업로드
                </label>
              </div>
              <S.ImageInput
                id="image_input"
                type="file"
                accept="image/*"
                multiple
                onChange={onUpload}
              />
            </S.ImageUpload>
          </S.ImgDiv>
        </div>
      </S.TableLine>
      <div id="img_line">
        <S.ImagesPreview>
          {imageSrcs.map((imageSrc, index) => (
            <S.Image key={index}>
              <S.Img
                src={imageSrc}
                alt={`uploaded-image-${index}`}
              />
              <S.CancelButton onClick={() => removeImage(index)}>취소</S.CancelButton>
            </S.Image>
          ))}
        </S.ImagesPreview>
      </div>
    </>
  );
};

export default StoreImage;

