import { Card, Button } from "react-bootstrap";
import React from "react";
import "../../App.css";
const MoreDeets = () => {
  const cardInfo = [
    {
      image:
        "https://images.pexels.com/photos/261204/pexels-photo-261204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: " Nita Lake Lodge — Whistler, B.C., Cuttack",
      text: "Comfort is paramount at this lakeside property  and heated floors offer an intimate counterpoint to the town's sportier side. The lodge is a short jaunt from the Creekside lifts and offers free shuttles and ski storage lockers at the base of Whistler Mountain; come summertime, you'll have your pick of complimentary cruiser bikes, paddleboards, canoes, and kayaks. The spa mak, the  a , a barrel-aged old fashioned, or a local spin",
      price: "PRICE $500",
    },

    {
      image:
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: " Rosewood Castiglion del Bosco — Montalcino, Kalahandi",
      price: "PRICE $500",
      text: "This hotel is the sprawling Tuscan estate you've always dreamed of staying in.The property is spread over 5,000 acres but manages to feel intimate with just 23 stylishly decorated suites and 11 villas. The place is full of local delights, including the on-site Brunello di Montalcino winery, an 18-hole golf course, a cooking school and on-site garden, a spa with La Prairie treatments, and an infinity pool. Oh, and you can organize.",
    },
    {
      image:
        "https://images.pexels.com/photos/1488515/pexels-photo-1488515.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: " Gleneagles — Auchterarder, Scotland, Bhubaneswar.",

      price: "PRICE $500",
      text: "Set on 850 acres of Perthshire’s Ochil Hills, this grand sporting hotel is  . As well as being home to three championship golf courses, it’s the launch pad for an invigorating range of country pursuits, from horseback riding to hiking, fly fishing to archery—all with the benefit of expert guides. Then there’s the hotel itself: grandiose, elegant, and reminiscent of its early h a turn—Gleneagles offers complimentary Barbour jackets ",
    },
    {
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",

      price: "PRICE $500",
      title: " Aranwa Paracas Resort & Spa — jajpur",
      text: "Set in a pine forest in France’s toniest ski resort, this 48-room hideaway fully embraces its winter-wonderland theme with a design scheme inspired by a 19th-century Austro-Hungarian castle. The folk murals, stained glass, and crackling fireplaces may evoke a scene out of the Brothers Grimm, but don’t be fooled by the fairy-tale surroundings—this place is all about over-the-top luxury. That means an Hermès-designed horse-drawn carriage,",
    },

    {
      image:
        "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      price: "PRICE $500",
      title: " Tutka Bay Lodge — Homer, Alaska, Kendrapara.",
      text: "Set in a pine forest in France’s toniest ski resort, this 48-room hideaway fully embraces its winter-wonderland theme with a design scheme inspired by a 19th-century Austro-Hungarian castle. The folk murals, stained glass, and crackling fireplaces may evoke a scene out of the Brothers Grimm, but don’t be fooled by the fairy-tale surroundings—this place is all about over-the-top luxury. That means an Hermès-designed horse-drawn carriage,",
    },
    {
      image:
        "https://images.pexels.com/photos/2548535/pexels-photo-2548535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      price: "PRICE $500",
      title: " Airelles Courchevel, Les Airelles — Khandagiri",
      text: "Set in a pine forest in France’s toniest ski resort, this 48-room hideaway fully embraces its winter-wonderland theme with a design scheme inspired by a 19th-century Austro-Hungarian castle. The folk murals, stained glass, and crackling fireplaces may evoke a scene out of the Brothers Grimm, but don’t be fooled by the fairy-tale surroundings—this place is all about over-the-top luxury. That means an Hermès-designed horse-drawn carriage,",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "80%" }} key={index} className="box">
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Header className="text-center">{card.title}</Card.Header>

          <Card.Text>{card.text}</Card.Text>
          <Button variant="dark" className="hotelbutton">
            {card.price}
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return <div className="grid">{cardInfo.map(renderCard)}</div>;
};

export default MoreDeets;
