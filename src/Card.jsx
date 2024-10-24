import Profile from "./assets/unnamed.jpg";
import Profile2 from "./assets/WhatsApp Image 2024-10-08 at 07.37.09_faec1986.jpg";
function Card() {
  return (
    <>
      <div className="Card">
        <img src={Profile2} alt="profle" />
        <h1>Marklyne</h1>
        <p>I'm a student at Multimedia University, I take Jonalism</p>
      </div>
      <div className="Card">
        <img src={Profile} alt="profle" />
        <h1>Lewis</h1>
        <p>
          I'm a student at Moi University I take Mechanical Engineering and
          Energy Production
        </p>
      </div>
    </>
  );
}
export default Card;
