import React, { useEffect, useState, useMemo } from "react";
import { withRouter, Link } from "react-router-dom";
import TableContainer from "../../../components/Common/TableContainer";
import {
    Card,
    CardBody,
    Col,
    Container,
    Row,
    UncontrolledTooltip,
} from "reactstrap";
import * as Yup from "yup";
import { jobApply } from "../../../common/data";

import { JobTitle, CompanyName, Type, ApplyDate, Status } from "./ApplyJobsCol";

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";
import DeleteModal from "components/Common/DeleteModal";

import {
    getApplyJob as OnGetApplyJob,
    deleteApplyJob as OnDeleteApplyJob,
} from "store/jobs/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

const ApplyJobs = () => {

    //meta title
    document.title = "Job Apply | Skote - React Admin & Dashboard Template";

    const dispatch = useDispatch();

    const { jobApply } = useSelector((state) => ({
        jobApply: state.JobReducer.jobApply,
    }));

    const [apply, setApply] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        dispatch(OnGetApplyJob());
    }, [dispatch]);

    useEffect(() => {
        setApply(jobApply);
    }, [jobApply]);

    // delete
    const onClickData = (apply) => {
        setApply(apply);
        setDeleteModal(true);
    };

    const handleDeleteApplyJob = () => {
        if (apply) {
            dispatch(OnDeleteApplyJob(apply));
            setDeleteModal(false);
        }
    };

    const columns = useMemo(
        () => [
            {
                Header: "No",
                accessor: "no",
                filterable: true,
            },
            {
                Header: "Job Title",
                accessor: "jobTitle",
                filterable: true,
                Cell: cellProps => {
                    return <JobTitle {...cellProps} />;
                },
            },
            {
                Header: "Company Name",
                accessor: "companyName",
                filterable: true,
                Cell: cellProps => {
                    return <CompanyName {...cellProps} />;
                },
            },
            {
                Header: "Type",
                accessor: "type",
                filterable: true,
                Cell: cellProps => {
                    return <Type {...cellProps} />
                },
            },
            {
                Header: "Apply Date",
                accessor: "applyDate",
                filterable: true,
                Cell: cellProps => {
                    return <ApplyDate {...cellProps} />;
                },
            },
            {
                Header: "Status",
                accessor: "status",
                disableFilters: true,
                Cell: cellProps => {
                    return <Status {...cellProps} />;
                },
            },
            {
                Header: "Action",
                Cell: cellProps => {
                    return (
                        <div className="list-unstyled hstack gap-1 mb-0">
                            <li>
                                <Link
                                    to="/job-details"
                                    className="btn btn-sm btn-soft-primary"                                    
                                >
                                    <i className="mdi mdi-eye-outline" id="viewtooltip" />
                                    <UncontrolledTooltip placement="top" target="viewtooltip">
                                        View
                                    </UncontrolledTooltip>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="#"
                                    className="btn btn-sm btn-soft-danger"
                                    onClick={() => {
                                        const userData = cellProps.row.original;
                                        onClickData(userData);
                                    }}
                                >
                                    <i className="mdi mdi-delete-outline" id="deletetooltip" />
                                    <UncontrolledTooltip placement="top" target="deletetooltip">
                                        Delete
                                    </UncontrolledTooltip>
                                </Link>
                            </li>
                        </div>
                    );
                },
            },
        ],
        []
    );


    return (
        <React.Fragment>
            <DeleteModal
                show={deleteModal}
                onDeleteClick={() => handleDeleteApplyJob()}
                onCloseClick={() => setDeleteModal(false)}
            />
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumbs */}
                    <Breadcrumbs title="Jobs" breadcrumbItem="Job Apply" />
                    <Row>
                        <Col lg="12">
                            <Card>
                                <CardBody>
                                    <TableContainer
                                        columns={columns}
                                        data={jobApply}
                                        isGlobalFilter={true}
                                        isAddUserList={false}
                                        customPageSize={10}
                                    />
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default withRouter(ApplyJobs);
