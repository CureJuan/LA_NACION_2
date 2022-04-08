import { Col, Card } from "react-bootstrap";

const Tema = ({ ...article }) => {
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

  return article.subtype === "7" ? (
    <Col md={3} sm={12} className="card__separation">
      <Card className="card__color" key={article._id}>
        <Card.Img
          variant="top"
          src={article?.promo_items?.basic?.url}
          width="200"
          height="260"
        />
        <Card.Body>
          <Card.Title className="card-title__color">
            {article.headlines.basic}
          </Card.Title>

          <Card.Text className="fecha">{formatDate(date)}</Card.Text>

          <Card.Text>Subtype: {article?.subtype}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ) : null;
};
export default Tema;
