import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const filterData = (query, data) => {
  if (!query) {
    return;
  }
  // if (!query) {
  //   return data;
  // } else {
  //   return data.filter((d) => d.toLowerCase().includes(query));
  // }
};

const data = 'setListingsByFilteredQuery';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dataFiltered = filterData(searchQuery, data);

  return (
    <form style={{ width: '80%', marginLeft: '15px', border: '#398378!important', outlined: false }}>
      <TextField
        style={{ width: '80%', border: '#398378!important' }}
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Find a trade..."
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "#398378" }} />
      </IconButton>
    </form>
  )
};

export default SearchBar;