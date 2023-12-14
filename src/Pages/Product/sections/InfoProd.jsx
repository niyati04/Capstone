export default function InfoProd() {
  const prodDetailData = [
    "Oversized fit",
    "100% ployster",
    "Machine wash",
    "Country origin : India",
  ];
  return (
    <div className="desc_prod_point_container">
      <div>
        <p className="title_of_prod_details_text">Description</p>
        <p className="extra_detail_text">
          Truthfully, True Classic has made a T-shirt that appeals to the
          masses. The brand taps into our collective insecurities and promises
          to calm them — with something you can buy, of course. To be fair,
          design considerations like these are rarely seen on these sort of
          entry-level shirts. Sure, they're supposed to fit well, but most cheap
          shirts are a little more universal — baggy here, too tight here and
          perhaps a little less adept at surviving the wash cycle.
        </p>
      </div>
      <div>
        <p className="title_of_prod_details_text">Product details</p>
        {prodDetailData?.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </div>
    </div>
  );
}
