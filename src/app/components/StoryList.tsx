const StoryList = () => {
  const circles = Array.from({ length: 8 });
  return (
    <div className="w-[630px] mx-auto">
      <div className="flex flex-wrap gap-4">
        {circles.map((_, index) => (
          <div
            key={index}
            className="w-[42px] h-[42px] bg-gray-600 rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default StoryList;
