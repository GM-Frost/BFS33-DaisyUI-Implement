interface CardItem {
  id: number;
  image: string;
  title: string;
  desc: string;
}
interface CardProps {
  cardItems: CardItem[];
}
const Card: React.FC<CardProps> = ({ cardItems }) => {
  return (
    <>
      <h1 className="text-center font-bold uppercase mt-10">card Components</h1>
      <div className="flex justify-center gap-4 p-5 flex-wrap">
        {cardItems.map((cardItem) => (
          <div className="card w-96 glass" key={cardItem.id}>
            <figure>
              <img src={cardItem.image} alt="car!" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cardItem.title}</h2>
              <p>{cardItem.desc}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn More!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
