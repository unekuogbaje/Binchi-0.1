const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
     <div 
      className="  min-w-[30%] h-[240px] mx-2 my-4 flex items-center justify-center border-1 border-blue-700 border-solid cursor-pointer ">
        <div 
            className="background-image w-[100%] h-[100%] bg-cover bg-center transform duration-500 hover:scale-110 opacity-90" style={{
          backgroundImage: `url(${imageUrl})`,
        }} />
        <div 
            className="body origin-top-right absolute flex flex-col h-[90px] px-0 py-4 items-center justify-center border-2 border-blue-700 border-solid bg-white opacity-70 transform duration-500 hover:scale-110">
            <h2
                className="font-bold text-[22px] mx-0 ml-[6px] mr-0 text-blue-900 ">
                {title}
            </h2>
            <p
                className="font-light text-blue-800">
                Order now
            </p>
        </div>
      </div>
    );
};

export default DirectoryItem;