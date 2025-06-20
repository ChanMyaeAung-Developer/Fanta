const BannerText = ({ activeData}) => {
  return (
    <section className="py-12 text-center">
      <div className="container">
        <div
          style={{ backgroundColor: activeData.bgColor }}
          className="text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl"
        >
          <p className="font-bold text-xl max-w-[800px] mx-auto leading-normal">
            Fanta is a popular carbonated soft drink with a sweet, fruity orange flavor. Originally created in Germany during World War II, it is now produced by The Coca-Cola Company and sold worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerText;
