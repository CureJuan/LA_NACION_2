import { Row } from "react-bootstrap";
import Article from "../Article/Article";

const Articles = ({ articles }) => {
  return (
    <Row className="justify-content-center">
      {articles?.articles?.length > 0 &&
        articles?.articles.map((article) => <Article {...article} />)}
    </Row>
  );
};

export default Articles;
