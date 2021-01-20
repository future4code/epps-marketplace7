import styled from "styled-components";
import DetailsIcon from "@material-ui/icons/Details";
import TextField from "@material-ui/core/TextField";

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

  span {
    color: #a98fde;
    font-weight: bold;
  }

  h3:nth-child(1) {
    background-color: #8661b6;
    border-radius: 5px 5px 0 0;
    padding: 5px;
  }
`;

export const StyledDetailsIcon = styled(DetailsIcon)`
  position: absolute;
  right: 0;
  bottom: 0;
  color: #a98fde;
`;