import {useState, useMemo} from 'react';
import GridView from '../../components/home/GridView.component';
import UserView from '../../components/home/UserView.component';
import HomeListView from '../../components/home/HomeListView';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectProjectApp, setProjects, setProjectEndpointsState } from '../../redux/projectAppSlice';
import { store } from '../../redux/store';
import axios from 'axios';

import '../../css/home/home.css';

import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTh, faList} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const projectAppState= useAppSelector(selectProjectApp);
    const dispatch = useAppDispatch();


    const [activeGrid, setActiveGrid] = useState(true);
    const [activeList, setActiveList] = useState(false);

    const [tabs, setTabs] = useState("grid");

    const projects = useAppSelector((state) => state.projectApp.sampleProjects);

    const getProjects = () => {
        // Test query string works; comment when ready to test prod
        const queryString = `http://localhost:42069/api/read/projects?userId=69`;

        // Production query string; uncomment when ready to test prod
        // const queryString = `http://localhost:42069/api/read/project?projectId=${projectId}`; 
        axios
          .get(queryString)
          .then((response) => {
            console.log("response", response);
            const projectData = response.data;
            dispatch(setProjects(projectData));
          })
          .catch((error) => {
            console.log("There was an error: ", error);
          });
      };

      useMemo(() => {
        getProjects();
      }, []);

    const RenderTabs = () => {
        if(tabs === 'grid') {
            return <GridView projects={projects}/>;
        }

        if(tabs === 'list') {
            return <HomeListView projects={projects} />;
        }
        return null;
    }

    const handleGridView = () => {
        setActiveList(false);
        setActiveGrid(true);
        setTabs('grid');
    }

    const handleListView = () => {
        setActiveList(true);
        setActiveGrid(false);
        setTabs('list');
    }
  

  return (
    <div className="body">
        <Row>
            <Col sm={9} className="home-container-wrapper">
                <Row className="tabs-container-wrapper">
                    <Col className="tabs-wrapper" >
                        <FontAwesomeIcon style={activeGrid ? {color: 'black'} : {color: 'gray'}} className="fa-icon fa-icon-1" icon={faTh} onClick={() => handleGridView()}/>
                        <FontAwesomeIcon style={activeList ? {color: 'black'} : {color: 'gray'}} className="fa-icon fa-icon-2" icon={faList} onClick={() => handleListView()}/>
                    </Col>

                    <Col className="proj-info-wrapper">
                        <div style={{float: 'right'}}>
                            <span>Projects {projects.length}</span>
                            {/* <span>Folders 2</span> */}
                        </div>
                    </Col>
                </Row>

                <RenderTabs/>
            </Col>

            <Col sm >
                <span className="user-container-wrapper">
                    <UserView projects={projects}/>
                </span>
            </Col>
        </Row>
    </div>
  );
}
