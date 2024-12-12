import { useState } from "react";

function Carousel({ imagesDetail, i, setImgCarousel }) {
    const [index, setIndex] = useState(i);
    const handlePrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    const handleFrwd = () => {
        if (index < imagesDetail.length - 1) {
            setIndex(index + 1);
        }
    }
    return (
        <div className="images-carousel">
            <i className="fa-regular fa-circle-xmark close-btn" onClick={() => setImgCarousel(null)}></i>
            <div className="carousel-container">
                <i className="fa-solid fa-circle-chevron-left prev-btn" onClick={handlePrev}></i>
                <div className="carousel-img-container">
                    <img src={imagesDetail[index].imgUrl} alt={imagesDetail[index].imgTitle} />
                </div>
                <i className="fa-solid fa-circle-chevron-right frwd-btn" onClick={handleFrwd}></i>
            </div>
        </div>
    );
}

export default Carousel;
