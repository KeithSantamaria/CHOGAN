import React, {useMemo} from 'react'
import ProjectSideNav from './ProjectSideNav'
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {selectProjectApp, setTags} from "../redux/projectAppSlice";
import axios from "axios";
import {Button, Card, Modal} from "react-bootstrap";
import WidgetForm from "./TagForm";

function ProjectTags() {
    const projectAppState = useAppSelector(selectProjectApp);
    const [modalShow, setModalShow] = React.useState(false);
    const handleOpen = () => setModalShow(true);
    const handleClose = () => setModalShow(false);
    const dispatch = useAppDispatch();

    const getTags = () => {
        // Test query string works; comment when ready to test prod
        const queryString = `http://localhost:42069/api/read/project/tags`;
        const body = {
            params: {
                projectId: "60c2aecdc4c64aa2db316e6d"
            }
        }
        axios
            .get(queryString, body)
            .then((response) => {
                console.log("response", response);
                const tagData = response.data;
                dispatch(setTags(tagData));
            })
            .catch((error) => {
                console.log("There was an error: ", error);
            });
    };


    useMemo(() => {
        getTags();
    }, []);

    const widgetModal = () => {
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Create New Tag
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <WidgetForm project={projectAppState.project} />
                </Modal.Body>
            </Modal>
        );
    };
    return (
        <div>
            <ProjectSideNav />

            {projectAppState.tags.map((tag: any) => {
                return (
                    <Card>
                        <Card.Body>
                            <Card.Title>{tag.tagName}</Card.Title>
                            <Card.Text>{tag.tagDescription}</Card.Text>
                            <Button variant="danger" value={tag.tagId} onClick={e =>removeTags((e.target as HTMLButtonElement).value)}>Delete</Button>
                            <Button variant="info">Modify</Button>
                        </Card.Body>
                    </Card>
                );
            })}
            <Button variant="primary" onClick={handleOpen}>
                New Tag
            </Button>
            {widgetModal()}
        </div>
    );

    function removeTags (id:String) {
        const queryDeleteString = `http://localhost:42069/api/delete/project/tag`;
        const body = {
            params: {
                tagId: id
            }
        }
        console.log("request body: ", queryDeleteString, body)

        axios
            .delete(queryDeleteString, body)
            .then((response) => {
                console.log("response", response);
                const tagData = response.data;
                dispatch(setTags(tagData));
            })
            .catch((error) => {
                console.log("There was an error on deleting: ", error);
            });

    }

}

export default ProjectTags
