import ReactImageMagnify from "react-image-magnify";
import ModalImage from "react-modal-image";
import Image from "../../../Components/Image";
import prod_img from "../../../assets/image1.png";
import prod_img1 from "../../../assets/image2.png";
import prod_img2 from "../../../assets/image3.png";
import prod_img3 from "../../../assets/image4.png";
import prod_img4 from "../../../assets/image5.png";

export default function ProdView() {
  const dataImg = [
    {
      imgName: prod_img1,
    },
    {
      imgName: prod_img2,
    },
    {
      imgName: prod_img3,
    },
    {
      imgName: prod_img4,
    },
  ];
  return (
    <div className="shop_view_container">
      <div className="left_shop_container">
        <div className="img_view_container">
          {/* <ReactImageMagnify
            {...{
              smallImage: {
                alt: "prod_img",
                isFluidWidth: true,
                src: prod_img,
              },
              largeImage: {
                src: prod_img,
                width: 450,
                height: 1000,
              },
              isHintEnabled: true,
            }}
          /> */}
           <ModalImage
                    // className="per_img_container1"
                    small={prod_img}
                    large={prod_img}
                    // alt="Image description"
                  />
        </div>
        {/* <Image
          outsideClassName="img_view_container"
          src={prod_img}
          alt={prod_img}
        /> */}
      </div>
      <div className="right_shop_container">
        <div className="four_img_container">
          <div className="out_of_four_img_container">
            {dataImg?.map((item, index) => {
              return (
                <div className="per_img_container" key={index}>
                  <ModalImage
                    // className="per_img_container1"
                    small={item?.imgName}
                    large={item?.imgName}
                    // alt="Image description"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
