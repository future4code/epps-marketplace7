import styled from "styled-components";
import DetailsIcon from "@material-ui/icons/Details";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";

export const LogoHeader = styled.img`
  width: 250px;
`;

export const TopBar = styled(Toolbar)`
  justify-content: space-between;

  .Home-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
  .Homebtn-container {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    gap: 10px;
    justify-content: space-evenly;

    input,
    select {
      height: 1.8rem;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  border: 1px solid black;
  margin: 10px;
  width: 250px;
  background-color: #494949;
  color: #f5f3fc;
  border-radius: 5px;

  P {
    padding: 5px;
  }

  .description {
    height: 100px;
    overflow-y: auto;

    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #8661b6;
      border: 1px solid #494949;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #a98fde;
    }
  }

  span {
    color: #a98fde;
    font-weight: bold;
  }

  h3 {
    background-color: #8661b6;
    border-radius: 5px 5px 0 0;
    padding: 5px;
    margin: 0;
  }
`;

export const StyledDetailsIcon = styled(DetailsIcon)`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #a98fde;
`;

export const JobsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

export const SearchBar = styled(TextField)`
  flex-grow: 1;
  .MuiInputBase-input {
    padding: 5px 10px;
  }
`;

export const RegularInput = styled(TextField)`
  .MuiInputBase-input {
    padding: 5px 10px;
    width: 100px;
    min-width: 60px;
  }
`;

export const SelectInput = styled(TextField)`
  .MuiOutlinedInput-input {
    padding: 10px 5px;
  }
  .MuiSelect-select {
    min-width: 100px;
  }
`;

export const MenuItem = styled.h5`
  display: flex;
  color: #333;
  align-items: center;
  margin: 10px;
  &:hover {
    color: #8661b6;
  }
`;
