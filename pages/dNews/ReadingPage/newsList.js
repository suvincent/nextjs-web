import React, { Component } from 'react';
import { Table, Button, Label } from 'semantic-ui-react';
import Layout from '../../../components/Layout_dNews';
import SchoolRow from '../../../components/SchoolRow';
import verify from '../../../ethereum/academic/verify';
import { Link } from '../../../routes';

class newsList extends Component {
  static async getInitialProps() {
    const schoolCount = await verify.methods.getSchoolsCount().call();

    const schools = await Promise.all(
      Array(parseInt(schoolCount)).fill().map((element, index) => {
        return verify.methods.schools(index).call();
      })
    );

    console.log(schools);

    return { schools };
  }

  renderRows() {
    return this.props.schools.map((school, index) => {
      return (
        <SchoolRow 
          key={index}
          school={school}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <h1>All qualified News</h1>
        <Link route={"/dNews/media/Certificate"}>
          <a>back</a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>News&ensp;Title</HeaderCell>
              <HeaderCell>News&ensp;hash&ensp;value</HeaderCell>
            </Row>
          </Header>
          <Body>
            {this.renderRows()}
          </Body>
        </Table>
      </Layout>
    );
  }
}

export default newsList;