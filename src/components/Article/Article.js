import { Col, Card } from "react-bootstrap";

const Article = ({ ...article }) => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiempre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const date = new Date(article?.display_date);
  const formatDate = (date) => {
    let formatted_date =
      date.getDate() +
      " de " +
      months[date.getMonth()] +
      " de " +
      date.getFullYear();
    return formatted_date;
  };

  return (
    <Col md={3} sm={12} className="card__separation" key={article._id}>
      <Card className="card__color">
        <Card.Img
          variant="top"
          src={article.promo_items?.basic?.url}
          width="200"
          height="260"
        />
        <Card.Body>
          <Card.Title className="card-title__color">
            {article.headlines.basic}
          </Card.Title>
          <Card.Text className="fecha">{formatDate(date)}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Article;
