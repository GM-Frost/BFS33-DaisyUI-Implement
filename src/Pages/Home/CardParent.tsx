import Card from "./Card";

const cardItems = [
  {
    id: 1,
    image:
      "https://www.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-42-57d65d1aca63c__880.jpg",
    title: "Gotto",
    desc: "This is the Mr. Goat",
  },
  {
    id: 2,
    image:
      "https://www.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-31-57d65cdee96c1__880.jpg",
    title: "Leopad",
    desc: "This is the Mrs. Leonardo",
  },
  {
    id: 3,
    image:
      "https://www.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-89-57d65d996f879__880.jpg",
    title: "King",
    desc: "This is the His Highness King",
  },
  {
    id: 4,
    image:
      "https://www.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-59-57d65d3de26dc__880.jpg",
    title: "Panda",
    desc: "This is the KungFu Panda",
  },
  {
    id: 5,
    image:
      "https://www.boredpanda.com/blog/wp-content/uploads/2016/09/animals-dressed-like-humans-zoo-porraits-yago-partal-97-57d65da803147__880.jpg",
    title: "Polaritas",
    desc: "This is the Mr. Bear from the North",
  },
];

const CardParent = () => {
  return <Card cardItems={cardItems} />;
};

export default CardParent;
