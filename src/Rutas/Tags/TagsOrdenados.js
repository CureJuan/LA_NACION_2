import React from "react";

function Tags({ articles }) {
  var copy = [];
  const repetidos = [];

  const tag = articles?.articles.map((article) => {
    return article.taxonomy.tags;
  });
    console.log(tag.text);
    
  for (var i = 0; i < 30; i++) {
    tag[i].map((todos) => {
     
      copy = Object.keys(todos).map((i) => todos[i]);
      copy.forEach(function (slug) {
        repetidos[slug] = (repetidos[slug] || 0) + 1;
      });
    });
  }
  console.log("repetidos", repetidos.sort());

  return (
    <>
      <h3>todos: {repetidos}</h3>
    </>
  );
}

export default Tags;
