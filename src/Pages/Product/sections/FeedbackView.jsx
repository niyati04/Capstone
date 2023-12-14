import Image from "../../../Components/Image";
import rating_img from "../../../assets/star-rating.svg";
import profileImg from "../../../assets/profile1.png";

export default function FeedbackView() {
  const feedbackData = [
    {
      custName: "Brooklyn Simmons",
      custRating: "4.5",
      custReviewDate: "25/12/2023",
      CustFeedback: ` Made from organic cotton, this shirt is loosely knit for
            an airy feel which goes well with its relaxed silhouette.
            The garment-dye process also gives the tee more character.
            We prefer the straight-hemmed Slub Classic Pocket Tee. It
            has a great hand and tons of slubby texture to distance
            itself from the undershirt fare. It's made in LA and comes
            i `,
    },
    {
        custName: "Brooklyn Simmons",
        custRating: "4.5",
        custReviewDate: "25/12/2023",
        CustFeedback: ` Made from organic cotton, this shirt is loosely knit for
              an airy feel which goes well with its relaxed silhouette.
              The garment-dye process also gives the tee more character.
              We prefer the straight-hemmed Slub Classic Pocket Tee. It
              has a great hand and tons of slubby texture to distance
              itself from the undershirt fare. It's made in LA and comes
              i `,
      },
      {
        custName: "Brooklyn Simmons",
        custRating: "4.5",
        custReviewDate: "25/12/2023",
        CustFeedback: ` Made from organic cotton, this shirt is loosely knit for
              an airy feel which goes well with its relaxed silhouette.
              The garment-dye process also gives the tee more character.
              We prefer the straight-hemmed Slub Classic Pocket Tee. It
              has a great hand and tons of slubby texture to distance
              itself from the undershirt fare. It's made in LA and comes
              i `,
      },
  ];
  return (
    <div className="review_feedback_container">
      <p className="title_of_prod_details_text">Review</p>
      {feedbackData?.map((item, index) => {
        return (
          <div key={index} className="avtar_name_rating_date_wrapper">
            <div className="avtar_reviewdate_container">
              <div className="avtar_review_container">
                <Image
                  outsideClassName="avtar_img_container"
                  src={profileImg}
                  alt={"pic"}
                />
                <div className="name_review_wrapper">
                  <p>{item?.custName}</p>
                  <div className="review_star_container">
                    <Image
                      outsideClassName="review_img_container"
                      src={rating_img}
                      alt={rating_img}
                    />
                    <span>{item?.custRating} / 5 </span>
                  </div>
                </div>
              </div>
              <span>{item?.custReviewDate}</span>
            </div>
            <p className="review_content_container">“{item?.CustFeedback}“</p>
          </div>
        );
      })}

      <button className="view_more_btn">View more</button>
    </div>
  );
}
