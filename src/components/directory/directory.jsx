import DirectoryItem from '../directory-item/directory-item';

const Directory = ({ categories }) => {
    return (
        <div className="flex flex-wrap w-[100%] justify-between bg-white ">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
    )
}

export default Directory;