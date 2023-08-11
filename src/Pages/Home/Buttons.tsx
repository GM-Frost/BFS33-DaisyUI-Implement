const Buttons = () => {
  return (
    <>
      <h1 className="text-center font-bold uppercase mt-10">
        Button Components
      </h1>
      <div className="flex gap-4 justify-center mt-10">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
    </>
  );
};

export default Buttons;
