
const Button = ({ text, className, id }) => {
  const handleClick = (event) => {
    event.preventDefault();

    const targetId = id?.trim();
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    const offset = window.innerHeight * 0.15;
    const scrollTo =
      target.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: scrollTo, behavior: "smooth" });
  };

  return (
    <a className={`${className ?? ""} cta-wrapper`} onClick={handleClick}>
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;