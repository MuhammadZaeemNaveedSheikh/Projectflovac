import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Pdate, Type, Value, ValueinUSD, Status, Coin } from "./CryptoCol";

import TableContainer from "../../../components/Common/TableContainer";

//Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "assets/scss/datatables.scss";

import { cryptoOrderData } from "../../../common/data";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import { getCryptoOrders } from "store/crypto/actions";

const CryptoOrders = props => {

  //meta title
  document.title = "Network - Modules";

  const { orders, onGetOrders } = props;
  const [activeTab, setActiveTab] = useState("2");

  useEffect(() => {
    onGetOrders();
  }, [onGetOrders]);

  const handleChange = date => {
    // setStartDate(date)
  };

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  // Table Data


  const columns = useMemo(
    () => [
      {
        Header: "EUI",
        accessor: "pdate",
        filterable: true,
        Cell: cellProps => {
          return <Pdate {...cellProps} />;
        },
      },
      {
        Header: "Description",
        accessor: "type",
        filterable: true,
        Cell: cellProps => {
          return <Type {...cellProps} />;
        },
      },
      {
        Header: "Gateway",
        accessor: "coin",
        filterable: true,
        Cell: cellProps => {
          return <Coin {...cellProps} />;
        },
      },
      {
        Header: "Frequency",
        accessor: "value",
        filterable: true,
        Cell: cellProps => {
          return <Value {...cellProps} />;
        },
      },
      {
        Header: "Last Heartbeat",
        accessor: "valueInUsd",
        filterable: true,
        Cell: cellProps => {
          return <ValueinUSD {...cellProps} />;
        },
      },
      // {
      //   Header: "Status",
      //   accessor: "status",
      //   Cell: cellProps => {
      //     return <Status {...cellProps} />;
      //   },
      // },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
        

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-3">Network - Modules</h4>

                  <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                    {/* <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggleTab("1");
                        }}
                      >
                        All Orders
                      </NavLink>
                    </NavItem> */}
                    {/* <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggleTab("1");
                        }}
                      >
                        Processing
                      </NavLink>
                    </NavItem> */}
                  </ul>

                  <TabContent activeTab={activeTab} className="p-3">
                    <TabPane tabId="1" id="all-order">
                      <Form>
                        <Row className="mb-4">
                          <Col sm={6} className="col-xl">
                            <FormGroup className="mb-3">
                              <Label className="form-label">Date :</Label>
                              <DatePicker
                                onChange={handleChange}
                                className="form-control"
                                placeholderText="Select date"
                              />
                            </FormGroup>
                          </Col>

                          <Col sm={6} className="col-xl">
                            <FormGroup className="mb-3">
                              <Label className="form-label">Coin</Label>
                              <select className="form-control select2-search-disable">
                                <option value="BTC" defaultValue>
                                  Bitcoin
                                </option>
                                <option value="ETH">Ethereum</option>
                                <option value="LTC">litecoin</option>
                              </select>
                            </FormGroup>
                          </Col>

                          <Col sm={6} className="col-xl">
                            <FormGroup className="mb-3">
                              <Label className="form-label">Type</Label>
                              <select className="form-control select2-search-disable">
                                <option value="BU" defaultValue>
                                  Buy
                                </option>
                                <option value="SE">Sell</option>
                              </select>
                            </FormGroup>
                          </Col>

                          <Col sm={6} className="col-xl">
                            <FormGroup className="mb-3">
                              <Label className="form-label">Status</Label>
                              <select className="form-control select2-search-disable">
                                <option value="CO" defaultValue>
                                  Completed
                                </option>
                                <option value="PE">Pending</option>
                              </select>
                            </FormGroup>
                          </Col>

                          <Col sm={6} className="col-xl align-self-end">
                            <div className="mb-3">
                              <Button
                                type="button"
                                color="primary"
                                className="w-md"
                              >
                                Add Order
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>

                      <TableContainer
                        columns={columns}
                        data={cryptoOrderData}
                        isGlobalFilter={true}
                        isAddOptions={false}
                        customPageSize={10}
                      />
                    </TabPane>
                    <TabPane tabId="2" id="processing">
                      <div>
                        <TableContainer
                          columns={columns}
                          data={cryptoOrderData}
                          isGlobalFilter={true}
                          isAddOptions={false}
                          customPageSize={10}
                        />
                      </div>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

CryptoOrders.propTypes = {
  orders: PropTypes.array,
  onGetOrders: PropTypes.func,
};

const mapStateToProps = ({ crypto }) => ({
  orders: crypto.orders,
});

const mapDispatchToProps = dispatch => ({
  onGetOrders: () => dispatch(getCryptoOrders()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CryptoOrders));
