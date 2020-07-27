import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import Layout from '../../../components/Layout';
import SchoolRow from '../../../components/SchoolRow';
import verify from '../../../ethereum/academic/verify';
import { Link } from '../../../routes';
import CryptoJS from 'crypto-js';
class StudentPage extends Component {
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
        <h1>All verified schools</h1>
        <Link route={"/Academic/school/index"}>
          <a>back</a>
        </Link>
        <Table>
          <Header>
            <Row>
              <HeaderCell>School&ensp;Address</HeaderCell>
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

export default StudentPage;