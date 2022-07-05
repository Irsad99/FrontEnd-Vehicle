import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../style_custom/Card_custom";

function Cards(props) {
  return (
      <Card key={props.id} bg={props.image} backdrop={props.backdrop}>
        <div>
          <Link to={`/detail/${props.id}`} className="LinkStyle">
            <h4>{props.title}</h4>
          </Link>

          <p>{props.city}</p>
        </div>
      </Card>
  );
}

export default Cards;
