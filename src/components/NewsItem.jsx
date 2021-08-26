import { Link } from "react-router-dom";
const NewsItem = ({
  id,
  author,
  url,
  title,
  publishedDate,
  abstract,
  thumbnail,
}) => {
  return (
    <Link to={"/article-details/" + id}>
      <div className="shadow-md bg-white news-list-item">
        <div className=" default-m-p flex-center thumbnail">
          <img src={thumbnail} alt={title} width="75" height="75" />
        </div>
        <div className="news-item-content">
          <div>
            <h3 className="text-2xl font-bold visited:text-gray-600">
              {title}
            </h3>
          </div>

          <div className="flex justify-between">
            <div className="flex text-sm text-align">
              <h5 className="text-gray-500 mr-2">{author}</h5>
            </div>
            <div className="flex text-align">
              <h5 className="text-gray-500 mr-2">{publishedDate}</h5>
            </div>
          </div>
        </div>
        <div className="flex-center default-m-p">
          <span className="chevron right"></span>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
