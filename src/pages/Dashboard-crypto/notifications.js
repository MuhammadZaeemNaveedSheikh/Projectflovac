import React from "react";
import { Col, Card, CardBody } from "reactstrap";

//Simple bar
import SimpleBar from "simplebar-react";

//Import Images
import img1 from "./7.jpg";
import img2 from "./7.jpg";
import img3 from "./7.jpg";

const Notifications = () => {
  return (
    <React.Fragment>
      <Col xl="12">
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Notifications</h4>
            <SimpleBar style={{ maxHeight: "390px" }}>
              <ul className="list-group">
                <li className="list-group-item border-0">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src={img1} alt="" height="18" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">Wijsstraat</h5>
                      <p className="text-muted">
                      Verbinding verbroken met module
                      </p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          {/* <i className="mdi mdi-account me-1" /> Joseph */}
                        </p>
                      </div>
                      <p className="text-muted mb-0">1 Hour Ago</p>
                    </div>
                  </div>
                </li>
                <li className="list-group-item border-0">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src={img1} alt="" height="18" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">Bomenpark AAI</h5>
                      <p className="text-muted">
                      Verbinding verbroken met module
                      </p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          {/* <i className="mdi mdi-account me-1" /> Joseph */}
                        </p>
                      </div>
                      <p className="text-muted mb-0">1 Hour Ago</p>
                    </div>
                  </div>
                </li>      <li className="list-group-item border-0">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src={img1} alt="" height="18" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">Camping</h5>
                      <p className="text-muted">
                      Verbinding verbroken met module
                      </p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          {/* <i className="mdi mdi-account me-1" /> Joseph */}
                        </p>
                      </div>
                      <p className="text-muted mb-0">1 Hour Ago</p>
                    </div>
                  </div>
                </li>      <li className="list-group-item border-0">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar-xs">
                        <span className="avatar-title rounded-circle bg-light">
                          <img src={img1} alt="" height="18" />
                        </span>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="font-size-14">Bomenpark Klep</h5>
                      <p className="text-muted">
                      Verbinding verbroken met module
                      </p>

                      <div className="float-end">
                        <p className="text-muted mb-0">
                          {/* <i className="mdi mdi-account me-1" /> Joseph */}
                        </p>
                      </div>
                      <p className="text-muted mb-0">1 Hour Ago</p>
                    </div>
                  </div>
                </li>
              </ul>
            </SimpleBar>
          </CardBody>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Notifications;
