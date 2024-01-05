const AnimeTitle = ({ori, japanese}) => {
  return (
    <div className="mx-8 text-center text-White font-bold text-3xl mt-20">
      {ori}
      <span className="block text-center  text-White font-thin text-xs mt-2">
        {japanese}
      </span>
    </div>
  );
};

export default AnimeTitle;
