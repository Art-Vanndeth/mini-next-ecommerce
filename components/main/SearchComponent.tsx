
import React, { useState, ChangeEvent } from "react";
import { TextInput } from "flowbite-react";
type SearchComponentProps = {
  onFilter: (searchTerm: string) => void;
};

const SearchComponent: React.FC<SearchComponentProps> = ({ onFilter }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    onFilter(value); // Trigger filtering as the user types
  };

  return (
    <form className="relative left-18 mt-[45px] w-96">
      <TextInput
        type="text"
        placeholder="Searching..." required
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchComponent;




