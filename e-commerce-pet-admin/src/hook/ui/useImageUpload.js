import { useState, useEffect } from 'react';

export const useImageUpload = (initialImages = []) => {
    const [listImg, setListImg] = useState(initialImages);
    const [base64Image, setBase64Image] = useState('');

    const handleRemoveUploadImage = (src) => {
        setListImg((prevList) => prevList.filter((item) => item !== src));
    };

    const handleRemoveAllImage = () => {
        setListImg([]);
    };

    useEffect(() => {
        if (base64Image) {
            setListImg((prevList) => [...prevList, base64Image]);
        }
    }, [base64Image]);

    return {
        listImg,
        setListImg,
        base64Image,
        setBase64Image,
        handleRemoveUploadImage,
        handleRemoveAllImage,
    };
};
