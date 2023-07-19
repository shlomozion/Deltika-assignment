import Logo from "../Images/mortgage-calculator.svg";

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="logo">
          <img src={Logo} width={60} />
        </div>
        <div className="company-name">
          <div>Deltika Property calculator</div>
        </div>
      </div>
    </div>
  );
}
