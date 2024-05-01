import { useState } from "react";

function Search() {
  const [searchMusic, setSearchMusic] = useState("");

  return (
    <form>
      <input
        value={searchMusic}
        onChange={(e) => setSearchMusic(e.target.value)}
        placeholder="Search posts..."
      />
      <button>Search</button>
    </form>
  );
}

export default Search;
