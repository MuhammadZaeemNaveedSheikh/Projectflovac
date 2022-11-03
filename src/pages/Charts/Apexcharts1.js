import React from "react";

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"
import LineColumnArea from "../AllCharts/apex/LineColumnArea"
import RadialChart from "../AllCharts/apex/RadialChart"
import PieChart from "../AllCharts/apex/PieChart"
import DonutChart from "../AllCharts/apex/dountchart"

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Apexchart1 = () => {

  //meta title
  document.title="Apex Charts | Skote - React Admin & Dashboard Template";

  return (
    <React.Fragment>

    <div className="page-content">
     <div className="container-fluid"> 
        <Breadcrumbs title="Charts" breadcrumbItem="Statistics - Vacuumstation" /> 
        <Row>
    {/* <Col lg={6}>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Line with Data Labels</CardTitle>
          <LineApexChart dataColors='["--bs-primary", "--bs-success"]'/>
        </CardBody>
      </Card>
    </Col> */}
    <Col lg={6}>
           <Card>
             <CardBody>
               <CardTitle className="mb-4"> Average Opening Time </CardTitle>
               <SplineArea dataColors='["--bs-primary", "--bs-success"]'/>
             </CardBody>
           </Card>
         </Col>

    <Col lg={6}>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Vacuum in Area</CardTitle>
          <DashedLine dataColors='["--bs-primary", "--bs-danger", "--bs-success"]'/>
        </CardBody>
      </Card>
    </Col>
  </Row>
     

       <Row>
         
       <Col lg={6}>
           <Card>
             <CardBody>
               <CardTitle className="mb-4">Alarms</CardTitle>
               <PieChart dataColors='["--bs-success","--bs-primary", "--bs-danger","--bs-info", "--bs-warning"]'/>
             </CardBody>
           </Card>
         </Col>
         <Col lg={6}>
           <Card>
             <CardBody>
               <CardTitle className="mb-4">
               Valve Activations{" "}
               </CardTitle>
               <ColumnWithDataLabels dataColors='["--bs-primary"]'/>
             </CardBody>
           </Card>
         </Col>
       </Row>

       {/* <Row>
        
         <Col lg={6}>
           <Card>
             <CardBody>
               <CardTitle className="mb-4">Bar Chart</CardTitle>
               <BarChart dataColors='["--bs-success"]'/>
             </CardBody>
           </Card>
         </Col>
       </Row>

       <Row>
         <Col lg={6}>
           <Card>
             <CardBody>
               <CardTitle className="mb-4">
                 Line, Column & Area Chart{" "}
               </CardTitle>
               <LineColumnArea dataColors='["--bs-danger","--bs-primary", "--bs-success"]'/>
             </CardBody>
           </Card>
         </Col>
         <Col lg={6}>
           <Card>
             <CardBody>
               <CardTitle className="mb-4">Radial Chart</CardTitle>
               <RadialChart dataColors='["--bs-primary","--bs-success", "--bs-danger", "--bs-warning"]'/>
             </CardBody>
           </Card>
         </Col>
       </Row>

       <Row>
        
         <Col lg={6}>
           <Card>
             <CardBody>
               <CardTitle className="mb-4">Donut Chart</CardTitle>
               <DonutChart dataColors='["--bs-success","--bs-primary", "--bs-danger","--bs-info", "--bs-warning"]'/>
             </CardBody>
           </Card>
         </Col>
       </Row>  */}
      </div>
   </div> 
 </React.Fragment> 
 
   
  )
}

export default Apexchart1
