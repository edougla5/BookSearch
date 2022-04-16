import React, { useRef, useState } from "react";
import { Input, Button } from "semantic-ui-react";
import nav from "react-materialize";
import "materialize-css/dist/css/materialize.css";
// child component
// get the search value from the input box. oh ok it's a prop

const Header = (props) => {
  // const [title, setTitle] = useState('')
  const [searchVal, setSearchVal] = useState("");
  const [isDisabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  const reset = () => {
    setSearchVal("");
    setDisabled(true);
    setDisabled(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.search(searchVal);
    reset();
  }

  return (
    <nav className="navbar">
      <div class="nav-wrapper">
        <form className="search" onSubmit={handleSubmit}>
          <div class="input-field">
            <input
              id="search"
              type="search"
              href="#!"
              onChange={handleChange}
              disabled={isDisabled}
              value={searchVal}
              placeholder="search books..."
            />
            <label class="label-icon" for="search">
              <i class="material-icons scale-transition" href="#!">
                search
              </i>
              <i class="material-icons scale-transition scale-out" href="#!">
                search
              </i>
            </label>
            <i class="material-icons" onClick={reset}>
              close
            </i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Header;
