import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { loadOptions } from "../../Service/api";

const Searchbar = ({ inputChange }) => {
  const [input, setInput] = useState('');

  const handleInput = (inputData) => {
    setInput(inputData);
    inputChange(inputData);
    setInput('')
  };

  return (
    <div className="relative z-10 flex items-center justify-center ">
      <div className="w-full rounded-lg min-w-lg bg-white/30 backdrop-blur-lg border-opacity-30">
        <AsyncPaginate
          className="searchbar-input"
          placeholder="Search for cities"
          debounceTimeout={600}
          value={input}
          onChange={handleInput}
          loadOptions={loadOptions}
          additional={{ page: 1 }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
