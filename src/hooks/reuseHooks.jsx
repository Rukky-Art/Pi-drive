import { useState, useEffect } from 'react';

const useImageSlider = (imagesArray, intervalTime = 3000) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === imagesArray.length - 1 ? 0 : prevIndex + 1
            );
        }, intervalTime);

        return () => clearInterval(interval);
    }, [imagesArray, intervalTime]);

    return currentImageIndex;
};

export default useImageSlider;