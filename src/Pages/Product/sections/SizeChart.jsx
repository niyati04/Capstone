export default function SizeChart() {
  const allSizeData = [
    {
      size: "XS",
    },
    {
      size: "S",
    },
    {
      size: "M",
    },
    {
      size: "L",
    },
    {
      size: "XL",
    },
    {
      size: "XLL",
    },
  ];
  return (
    <div className="size_sizechart_container">
      <div className="size_sizechart_wrapper">
        <p>Size</p>
        <button>Size chart</button>
      </div>
      <div className="diff_size_box_container">
        {allSizeData.map((item, index) => {
          return (
            <button key={index} className="per_size_container">
              <p>{item?.size}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
