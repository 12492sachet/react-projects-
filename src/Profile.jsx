function Profile() {
  const imgageUrl = "./src/assets/unnamed.jpg";
  const handleClick = (e) => (e.target.style.display = "none");
  return <img onClick={(e) => handleClick(e)} src={imgageUrl}></img>;
}
export default Profile;
