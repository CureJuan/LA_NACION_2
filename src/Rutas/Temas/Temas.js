import { Row } from "react-bootstrap";
import Tema from "../Tema/Tema";

const Temas = ({ articles }) => {
  return (
    <Row className="justify-content-center">
      {articles?.articles?.length > 0 &&
        articles?.articles.map((article) => <Tema {...article} />)}
    </Row>
  );
};

export default Temas;
