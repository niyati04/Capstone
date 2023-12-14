import rating_img from "../../../assets/star-rating.svg";
import Image from "../../../Components/Image";



export default function ProdRatingShareColor() {
    const colorData = [
        {
          colorName: "Black",
        },
        {
          colorName: "Red",
        },
        {
          colorName: "Grey",
        },
        {
          colorName: "Green",
        },
      ];
  return (
    <div className="prod_name_rating_share_color_container">
    <p className="oversized_text">Oversized</p>
    <h3 className="prod_text">
      Oversized T-shirt Black Model no 145678-MSUW
    </h3>
    <div className="rating_share_container">
      <div className="rating_container">
        <Image
          outsideClassName="rating_img_container"
          src={rating_img}
          alt={rating_img}
        />
        <p>
          4.5 / 5 <span>(25 reviews)</span>
        </p>
      </div>
      <button>SHARE</button>
    </div>
    <div className="line_after_rating_container" />
    <p className="color_text_title">Color</p>
    <div className="color_container">
      {colorData?.map((item, index) => {
        return (
          <div key={index} className="color_name_container">
            <div className="color_self" />
            <span>{item?.colorName}</span>
          </div>
        );
      })}
    </div>
  </div>
  )
}
