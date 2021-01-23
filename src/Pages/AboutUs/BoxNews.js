import React from 'react'
import styled from 'styled-components'
import news1 from '../../components/images/breaking-news.png'
import news2 from '../../components/images/breaking-news-2.png'
import news3 from '../../components/images/breaking-news-3.png'

const Body = styled.div`
  display: flex;
  justify-content: space-around;

  .BoxNew {
      border: 1px solid #E4E4E4;
      max-width:270px;
      max-height: 300px;
      overflow: auto;
      text-align: center;
      padding: 1%;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 250px;
    max-height: 250px;
  }

  margin-bottom: 5%;
`

const HeadNews = styled.h2`
  text-align: center;
  padding: 2%;
`


export default class BoxNews extends React.Component {
  render() {
    return (
      <div>
        <HeadNews>Notícias</HeadNews>
        <Body>
          <div className="BoxNew">
            <img src={news1} alt="" /> <br />
            <h3>
              Future Ninja é eleito melhor site de jobs das Américas.
            </h3>{" "}
          </div>
          <div className="BoxNew">
            <img src={news2} alt="" /> <br />
            <h3>
              Future Ninja é eleito melhor site de jobs das Américas.
            </h3>{" "}
          </div>
          <div className="BoxNew">
            <img src={news3} alt="" /> <br />
            <h3>
              Future Ninja é eleito melhor site de jobs das Américas.
            </h3>{" "}
          </div>
        </Body>
      </div>
    );
  }
}