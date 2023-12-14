import star from "../../assets/star.svg";

export default function index() {
  let advertiseData = [
    {
      advName: "SALE UP TO 50%",
      advImg: star,
    },
    {
      advName: "SALE UP TO 50%",
      advImg: star,
    },
    {
      advName: "SALE UP TO 50%",
      advImg: star,
    },
    {
      advName: "SALE UP TO 50%",
      advImg: star,
    },
    {
      advName: "SALE UP TO 50%",
      advImg: star,
    },
  ];
  return (
    <section>
      <div className="marquee_text_container">
        <div className="scroll-container">
          <div className="scroll-text">
            {advertiseData?.map((ads, index) => {
              return (
                <p key={index}>
                  {ads?.advName}
                  <img src={ads?.advImg} alt="50%Off" loading="lazy" />
                </p>
              );
            })}

            {/* <p>
              SALE UP TO 50%{" "}
              <img src="./assets/star.svg" alt="50%Off" loading="lazy" />
            </p>
            <p>
              SALE UP TO 50%{" "}
              <img src="./assets/star.svg" alt="50%Off" loading="lazy" />
            </p>
            <p>
              SALE UP TO 50%{" "}
              <img src="./assets/star.svg" alt="50%Off" loading="lazy" />
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
