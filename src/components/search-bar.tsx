export default function SearchBar() {
    return (
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search...."
          className="w-full border border-gray-400 rounded-md p-2"
        />
        <span className="absolute right-3 top-3 text-gray-500">🔍</span>
      </div>
    );
  }
  