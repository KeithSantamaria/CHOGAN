import {useState, useMemo} from 'react';
import GridView from '../../components/home/GridView.component';
import UserView from '../../components/home/UserView.component';
import HomeListView from '../../components/home/HomeListView';
import TopNavbar from '../../components/TopNavbar';


import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getAllProjects, selectProjectApp, setProjects} from '../../redux/projectAppSlice';
import axios from 'axios';
import '../../css/home/home.css';

import {Col, Row, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTh, faList} from "@fortawesome/free-solid-svg-icons";
import { currentUser } from '../../redux/userSlice';
import ProjectCard from '../../components/home/ProjectCard.component';

export default function Home() {
    const projectAppState= useAppSelector(selectProjectApp);
    const userAppState= useAppSelector(currentUser);
    const dispatch = useAppDispatch();
    const [activeGrid, setActiveGrid] = useState(true);
    const [activeList, setActiveList] = useState(false);
    const [tabs, setTabs] = useState("grid");
    const projects = useAppSelector((state) => state.projectApp.projects);

    const getProjects = () => {
        const body ={params:{userId: userAppState.id}};
        dispatch(getAllProjects(body));
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
      <>
        <TopNavbar/>
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
                                {projectAppState.projects.map(({project}:any) => {
                                    <ProjectCard project={project} />
                                })}
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
    </>
  );
}
