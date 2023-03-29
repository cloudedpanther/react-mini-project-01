export default function SearchBar({ inputValue, setInputValue }) {
  const handleInputChange = (e) => {
    setInputValue({ ...inputValue, keyword: e.target.value });
  };

  const handleCheckboxCheck = (e) => {
    setInputValue({ ...inputValue, onlyStocked: e.target.checked });
  };

  return (
    <div>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        value={inputValue.keyword}
        onChange={handleInputChange}
      />
      <br />
      <input
        type="checkbox"
        name="onlyStocked"
        id="onlyStocked"
        onChange={handleCheckboxCheck}
      />
      <label htmlFor="onlyStocked">Only show products in stock</label>
    </div>
  );
}
