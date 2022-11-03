import React from "react"
import { Container, Row, Col } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import Apexchart1 from "pages/Charts/Apexcharts1";
//Import Components
import CardUser from "./card-user"
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import Earning from "./earning"
import SalesAnalytics from "./sales-analytics"
import TotalSellingProduct from "./total-selling-product"
import Tasks from "./tasks"
import ChatBox from "./chat-box"

const DashboardSaas = props => {
  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Orders",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-archive-in",
      title: "Revenue",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Average Price",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "From previous period",
    },
  ]

  //meta title
  document.title = "Analytics"

  return (
    <React.Fragment>
      <Apexchart1 />
      {/* <div className="page-content">
        <Container fluid>
        
          <Breadcrumbs title="Dashboards" breadcrumbItem="Saas" />

       
          <CardUser />

          <Row>
         
            <CardWelcome />

            <Col xl="8">
              <Row>
           
                <MiniWidget reports={reports} />
              </Row>
            </Col>
          </Row>

          <Row>
      
            <Earning dataColors='["--bs-primary"]' />

      
            <SalesAnalytics dataColors='["--bs-primary", "--bs-success", "--bs-danger"]' />
          </Row>

          <Row>
  
            <TotalSellingProduct />

      
            <Tasks />

            <ChatBox />
          </Row>
        </Container>
      </div> */}

    </React.Fragment>
  )
}

export default DashboardSaas
