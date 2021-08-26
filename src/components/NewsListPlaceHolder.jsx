const NewsListPlaceHolder = () => {
  return (
    <a href="_blank" className="card">
      <div className="pulse-animation shadow-md bg-white news-list-item">
        <div className=" default-m-p flex-center thumbnail"></div>
        <div className="pulse-animation news-item-content">
          <div>
            <h3 className="text-2xl font-bold visited:text-gray-600">&nbsp;</h3>
          </div>

          <div className="pulse-animation flex justify-between">
            <div className="flex text-sm text-align">
              <h5 className="text-gray-500 mr-2">&nbsp;</h5>
            </div>
            <div className="flex text-align">
              <h5 className="text-gray-500 mr-2">&nbsp;</h5>
            </div>
          </div>
        </div>
        <div className="flex-center default-m-p">
          <span className="chevron right"></span>
        </div>
      </div>
    </a>
  );
};

export default NewsListPlaceHolder;
