import React, { useState } from "react"
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Nav,
  TabContent,
  TabPane,
  Label,
  Button,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  InputGroup,
} from "reactstrap"
import classnames from "classnames"
import ReactApexChart from "react-apexcharts"
import MapsGoogle from "pages/Maps/MapsGoogle"

//Simple bar
import SimpleBar from "simplebar-react"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Images
import avatar from "../../assets/images/users/avatar-1.jpg"

const CryptoExchange = props => {

  //meta title
  document.title = "Exchange | Skote - React Admin & Dashboard Template";

  const series = [
    {
      data: [{
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33]
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11]
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65]
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24]
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47]
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31]
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02]
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02]
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01]
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02]
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91]
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612]
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612]
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95]
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67]
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4]
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9]
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45]
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35]
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53]
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19]
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620]
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620]
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61]
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58]
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86]
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16]
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4]
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81]
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578]
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579]
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96]
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92]
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22]
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08]
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25]
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97]
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602]
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95]
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02]
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591]
      },
      {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592]
      },
      {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34]
      },
      {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86]
      },
      {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01]
      },
      {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25]
      },
      {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99]
      },
      {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81]
      },
      {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96]
      },
      {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39]
      },
      {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27]
      },
      {
        x: new Date(1538870400000),
        y: [6596.44, 6601, 6590, 6596.55]
      },
      {
        x: new Date(1538872200000),
        y: [6598.91, 6605, 6596.61, 6600.02]
      },
      {
        x: new Date(1538874000000),
        y: [6600.55, 6605, 6589.14, 6593.01]
      },
      {
        x: new Date(1538875800000),
        y: [6593.15, 6605, 6592, 6603.06]
      },
      {
        x: new Date(1538877600000),
        y: [6603.07, 6604.5, 6599.09, 6603.89]
      },
      {
        x: new Date(1538879400000),
        y: [6604.44, 6604.44, 6600, 6603.5]
      },
      {
        x: new Date(1538881200000),
        y: [6603.5, 6603.99, 6597.5, 6603.86]
      },
      {
        x: new Date(1538883000000),
        y: [6603.85, 6605, 6600, 6604.07]
      },
      {
        x: new Date(1538884800000),
        y: [6604.98, 6606, 6604.07, 6606]
      },
      ]
    },
  ]

  const options = {
    chart: {
      type: 'candlestick',
      height: 310,
      toolbar: false,
      zoom: {
        enabled: true,
      }
    },
    plotOptions: {
      candlestick: {
        colors: {
          upward: '#34c38f',
          downward: '#f46a6a'
        }
      }
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }
  }

  const notofications = [
    {
      date: "15 Mor",
      desc: "If several languages coalesce of the resulting.",
    },
    {
      date: "14 Mor",
      desc: "New common language will be more simple and regular than the existing.",
    },
    {
      date: "13 Mor",
      desc: "It will seem like simplified English as a skeptical Cambridge.",
    },
    { date: "13 Mor", desc: "To achieve this, it would be necessary." },
    { date: "12 Mor", desc: "Cum sociis natoque penatibus et magnis dis." },
    {
      date: "11 Mor",
      desc: "New common language will be more simple and regular than the existing.",
    },
    {
      date: "10 Mor",
      desc: "It will seem like simplified English as a skeptical Cambridge.",
    },
    { date: "9 Mor", desc: "To achieve this, it would be necessary." },
  ]

  const [isMenu, setisMenu] = useState(false)
  const [activeTab, setActiveTab] = useState("1")

  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }

  const toggleMenu = () => {
    setisMenu(!isMenu)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        
        <Container fluid>
        <h3>Network</h3>
          {/* <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <div className="d-flex">
                    <div className="me-3">
                      <img
                        src={avatar}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <div className="flex-grow-1 align-self-center">
                      <div className="text-muted">
                        <h5>Henry wells</h5>
                        <p className="mb-1">henrywells@abc.com</p>
                        <p className="mb-0">Id no: #SK0234</p>
                      </div>
                    </div>
                    <Dropdown
                      direction="left"
                      isOpen={isMenu}
                      toggle={toggleMenu}
                    >
                      <DropdownToggle
                        type="button"
                        tag="button"
                        className="btn btn-light"
                      >
                        <i className="mdi mdi-wallet me-2 " />
                        <span className="d-none d-sm-inline-block">
                          Wallet Balance <i className="mdi mdi-chevron-down" />
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-md dropdown-menu-end">
                        <div className="dropdown-item-text">
                          <div>
                            <p className="text-muted mb-2">Available Balance</p>
                            <h5 className="mb-0">$ 9148.23</h5>
                          </div>
                        </div>

                        <DropdownItem divider />

                        <DropdownItem href="#">
                          BTC : <span className="float-end">1.02356</span>
                        </DropdownItem>
                        <DropdownItem href="#">
                          ETH : <span className="float-end">0.04121</span>
                        </DropdownItem>
                        <DropdownItem href="#">
                          LTC : <span className="float-end">0.00356</span>
                        </DropdownItem>

                        <DropdownItem divider />

                        <DropdownItem
                          className="text-primary text-center"
                          href="#"
                        >
                          Learn more
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}

          {/* <Row>
            <Col xl="8">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Price</h4>

                  <Row>
                    <Col xl="3" sm="4">
                      <div className="d-flex">
                        <div className="avatar-sm me-3">
                          <span className="avatar-title rounded-circle bg-warning bg-soft text-warning font-size-22">
                            <i className="mdi mdi-bitcoin" />
                          </span>
                        </div>

                        <div className="flex-grow-1">
                          <p className="text-muted mb-2">Bitcoin</p>
                          <h5>1.02356 BTC</h5>
                        </div>
                      </div>
                    </Col>

                    <Col xl="3" sm="4">
                      <div className="mt-4 mt-sm-0">
                        <p className="text-muted mb-2">In USD</p>
                        <h5>6310.22 USD</h5>
                      </div>
                    </Col>

                    <Col xl="3" sm="4">
                      <div className="mt-4 mt-sm-0">
                        <p className="text-muted mb-2">Last 24 hrs</p>
                        <h5>
                          0.24 % <i className="mdi mdi-arrow-up text-success" />
                        </h5>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4">                   
                      <ReactApexChart
                        series={series}
                        options={options}
                        type="candlestick"
                        height={310}
                        id="candlestick-chart" 
                        className="apex-charts"
                      />                   
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl="4">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Buy / Sell</h4>

                  <div>
                    <p className="text-muted mb-2">
                      <i className="mdi mdi-wallet me-1" /> Wallet Balance
                    </p>
                    <h5>$ 9148.23</h5>
                  </div>

                  <div className="mt-4">
                    <Nav pills className="bg-light rounded" role="tablist">
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "1",
                          })}
                          onClick={() => {
                            toggleTab("1")
                          }}
                        >
                          Buy
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: activeTab === "2",
                          })}
                          onClick={() => {
                            toggleTab("2")
                          }}
                        >
                          Sell
                        </NavLink>
                      </NavItem>                      
                    </Nav>

                    <TabContent activeTab={activeTab} className="mt-4">
                      <TabPane tabId="1" id="buy-tab">
                        <h5 className="font-size-14 mb-4">Buy Coin</h5>

                        <div>
                          <div>
                            <Label>Add Amount :</Label>
                            <InputGroup className="mb-3">
                              <Label className="input-group-text">Amount</Label>
                              <select
                                className="form-select"
                                style={{ maxWidth: "90px" }}
                              >
                                <option value="1" defaultValue>
                                  BTC
                                </option>
                                <option value="2">ETH</option>
                                <option value="3">LTC</option>
                              </select>
                              <Input type="text" className="form-control" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Label className="input-group-text">Price</Label>
                              <Input type="text" className="form-control" placeholder="Price"/>
                              <Label className="input-group-text">$</Label>
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Label className="input-group-text">Total</Label>
                              <Input type="text" className="form-control" placeholder="Total"/>
                            </InputGroup>
                          </div>

                          <div className="text-center">
                            <Button
                              type="button"
                              color="success"
                              className="w-md"
                            >
                              Buy Coin
                            </Button>
                          </div>
                        </div>
                      </TabPane>
                      <TabPane tabId="2" id="sell-tab">
                        <h5 className="font-size-14 mb-4">Sell Coin</h5>

                        <div>
                          <div>
                            <Label>Add Amount :</Label>
                            <InputGroup className="mb-3">
                              <Label className="input-group-text">Amount</Label>
                              <select
                                className="form-select"
                                style={{ maxWidth: "90px" }}
                              >
                                <option value="1" defaultValue>
                                  BTC
                                </option>
                                <option value="2">ETH</option>
                                <option value="3">LTC</option>
                              </select>
                              <Input type="text" className="form-control" />
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Label className="input-group-text">Price</Label>
                              <Input type="text" className="form-control" placeholder="Price"/>
                              <Label className="input-group-text">$</Label>
                            </InputGroup>

                            <InputGroup className="mb-3">
                              <Label className="input-group-text">Total</Label>
                              <Input type="text" className="form-control"/>
                            </InputGroup>
                          </div>

                          <div className="text-center">
                            <Button
                              type="button"
                              color="danger"
                              className="w-md"
                            >
                              Sell Coin
                            </Button>
                          </div>
                        </div>
                      </TabPane>                      
                    </TabContent>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row> */}

          <Row>
            <Col xl="6">
              <Card  style={{height:'400px'}}>
                <CardBody>
                  <h4 className="card-title mb-4">Order book</h4>

                  <div className="table-responsive">
                    <table className="table table-bordered mb-0">
                      <thead>
                       
                        <tr>
                          <th scope="col">Description</th>
                          <th scope="col">Location</th>
                          <th scope="col">Client</th>
                          <th scope="col">Total Modules	</th>
                          <th scope="col">Total Gateways	</th>
                          <th scope="col">Total Messages	</th>
                          <th>Commission Date	</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Heesch Monitoring</td>
                          <td>Bernheze, The Netherlands</td>
                          <td>Gemeente Bernheze</td>
                          <td>21</td>
                          <td>1</td>
                          <td>5.015.176</td>
                          <td>May 31, 2018</td>
                        </tr>
                        {/* <tr>
                          <td>0.0301</td>
                          <td>0.0301</td>
                          <td>187.16</td>
                          <td>0.0165</td>
                          <td>0.0165</td>
                          <td>102.60</td>
                        </tr>
                        <tr>
                          <td>0.0523</td>
                          <td>0.0523</td>
                          <td>325.21</td>
                          <td>0.0348</td>
                          <td>0.0348</td>
                          <td>216.39</td>
                        </tr>
                        <tr>
                          <td>0.0432</td>
                          <td>0.0432</td>
                          <td>268.62</td>
                          <td>0.0321</td>
                          <td>0.0321</td>
                          <td>199.60</td>
                        </tr>
                        <tr>
                          <td>0.0246</td>
                          <td>0.0246</td>
                          <td>152.96</td>
                          <td>0.0403</td>
                          <td>0.0403</td>
                          <td>250.59</td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
            <MapsGoogle />
            
            </Col>
            {/* <Col xl="6">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Notifications</h4>

                  <SimpleBar style={{ maxHeight: "310px" }}>
                    <ul className="verti-timeline list-unstyled">
                      {notofications.map((notification, key) => (
                        <li key={key} className="event-list">
                          <div className="event-timeline-dot">
                            <i className="bx bx-right-arrow-circle font-size-18" />
                          </div>
                          <div className="d-flex">
                            <div className="me-3">
                              <h5 className="font-size-14">
                                {notification.date}{" "}
                                <i className="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2" />
                              </h5>
                            </div>
                            <div className="flex-grow-1">
                              <div>{notification.desc}</div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </SimpleBar>
                </CardBody>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default CryptoExchange
