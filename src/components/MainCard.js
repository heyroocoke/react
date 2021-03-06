const MainCard = ({img,onHeartClick,alreadyFavorite}) => {
  const hearIcon = alreadyFavorite ? "đ": "đ¤" ;

  return(
    <div className="main-card">
      <img
        src={img}
        alt="ęł ěě´"
        width="400"
      />
      <button onClick={onHeartClick}>{hearIcon}</button>
    </div>
  );
};

export default MainCard;