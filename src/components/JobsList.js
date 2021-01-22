import React from "react";
import axios from "axios";
import { baseUrl } from "./Parameters";
import { JobCard } from "./JobCard";
import { JobsContainer, SearchBar, SelectInput, Wrapper } from "../Styled";
import { RegularInput } from "./../Styled";
import MenuItem from "@material-ui/core/MenuItem";

export class JobsList extends React.Component {
  state = {
    jobs: [],
    jobsFilter: {
      searchName: "",
      minValue: -Infinity,
      maxValue: Infinity,
    },
    selectedOrder: "",
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = async () => {
    try {
      const res = await axios.get(baseUrl);
      this.setState({ jobs: res.data.jobs });
    } catch (err) {
      console.log(err);
    }
  };

  // FUNÇÃO PARA ORDERNAR LISTA
  sortItems = (jobA, jobB) => {
    const { selectedOrder } = this.state;

    if (selectedOrder === "asc") {
      return jobA.value - jobB.value;
    } else if (selectedOrder === "desc") {
      return jobB.value - jobA.value;
    }
  };

  // CAPTURA SE ORDEM É CRESCENTE OU DECRESCENTE
  orderType = (e) => {
    this.setState({
      selectedOrder: e.target.value,
    });
  };

  onChangeSearchName = (e) => {
    this.setState({
      jobsFilter: {
        ...this.state.jobsFilter,
        searchName: e.target.value,
      },
    });
  };

  onChangeMinValue = (e) => {
    this.setState({
      jobsFilter: {
        ...this.state.jobsFilter,
        minValue: Number(e.target.value),
      },
    });
  };

  onChangeMaxValue = (e) => {
    this.setState({
      jobsFilter: {
        ...this.state.jobsFilter,
        maxValue: Number(e.target.value),
      },
    });
  };

  // FUNÇÃO DE RENDERIZAÇÃO DO QUE FOR FILTRADO
  filterJobs = () => {
    const { jobs } = this.state;

    let filteredJobs = jobs
      .filter(
        (job) =>
          job.title
            .toLowerCase()
            .includes(this.state.jobsFilter.searchName.toLowerCase()) ||
          job.description
            .toLowerCase()
            .includes(this.state.jobsFilter.searchName.toLowerCase())
      )
      .filter(
        (job) => job.value >= (this.state.jobsFilter.minValue || -Infinity)
      )
      .filter(
        (job) => job.value <= (this.state.jobsFilter.maxValue || Infinity)
      );

    return filteredJobs;
  };

  render() {
    // RENDERIZA O QUE FOR FILTRADO
    const filteredJobs = this.filterJobs();
    // ORDENA O QUE FOI RENDERIZADO E RENDERIZA
    const orderedJobs = filteredJobs.sort(this.sortItems);
    return (
      <Wrapper>
        <div className="header">
          <SearchBar
            // id="outlined-helperText"
            label="Buscar Job"
            onChange={this.onChangeSearchName}
            // placeholder="Digite o serviço ou descrição"
            variant="outlined"
          />
          <RegularInput
            // id="outlined-helperText"
            type="Number"
            min="0"
            onChange={this.onChangeMinValue}
            label="De (R$)"
            defaultValue=""
            variant="outlined"
          />
          <RegularInput
            // id="outlined-helperText"
            type="Number"
            min="0"
            onChange={this.onChangeMaxValue}
            label="Até (R$)"
            defaultValue=""
            variant="outlined"
          />
          <SelectInput
            select
            label="Ordem"
            value={this.state.selectedOrder}
            onChange={this.orderType}
            variant="outlined"
          >
            <MenuItem value="asc">Pelo menor valor</MenuItem>
            <MenuItem value="desc">Pelo maior valor</MenuItem>
          </SelectInput>
        </div>
        <JobsContainer>
          {orderedJobs.map((job) => {
            return (
              <JobCard
                title={job.title}
                description={job.description}
                value={job.value}
                paymentMethods={job.paymentMethods}
                dueDate={job.dueDate}
              />
            );
          })}
        </JobsContainer>
      </Wrapper>
    );
  }
}
