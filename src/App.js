import React from "react";
import Box from "./components/Box/index";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Articles from "./components/Articles/Articles";
import { useFetch } from "./hooks/useFetch";
import { useState } from "react";
import Loading from "./components/common/Loading";
import Submenu from "./components/Submenu/Submenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Temas from "./Rutas/Temas/Temas";
import Tags from "./Rutas/Tags/Tags";
import Tags10 from "./Rutas/Tags/Tags10";
import TagsOrdenados from "./Rutas/Tags/TagsOrdenados";

function App() {
  const [endpoint, setEndpoint] = useState("articles");
  const { data, loading, error } = useFetch(endpoint);
  const { results: articles } = data;

  const findArticles = (article) => {
    setEndpoint(`articles?=${article}`);
  };
  if (loading) return <Loading />;
  if (error) return <h3>!!Ocurrió un ERROR !!!</h3>;

  return (
    <Router>
      <Header />
      <Box title={"Acumulado Grilla"} />
      <Submenu />
      <Switch>
        <Route exact path="/">
          <div className="wrapper">
            <Articles articles={articles} />
          </div>
        </Route>
        <Route exact path="/tema">
          <div className="wrapper">
            <Temas articles={articles} />
          </div>
        </Route>
        <Route exact path="/tags">
          <div className="wrapper">
            <Tags articles={articles} />
          </div>
        </Route>
        <Route exact path="/tags10">
          <div className="wrapper">
            <Tags10 articles={articles} />
          </div>
        </Route>
        <Route exact path="/tags/slug">
          <div className="wrapper">
            <TagsOrdenados articles={articles} />
          </div>
        </Route>
      </Switch>
      <Footer />
      <hr />
    </Router>
  );
}

export default App;
