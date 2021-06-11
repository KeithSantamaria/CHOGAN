import {useState, useEffect} from 'react';
import GridView from '../../components/home/GridView.component';
import UserView from '../../components/home/UserView.component';
import HomeListView from '../../components/home/HomeListView';
import '../../css/home/home.css';

import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTh, faList} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [activeGrid, setActiveGrid] = useState(true);
    const [activeList, setActiveList] = useState(false);

    const [tabs, setTabs] = useState("grid");

    /**
     * Mock Data
     */
    const [projects, setProjects] = useState([
        {id: 1, name: 'xroject Chogan', des: 'xroject Chogandas ', tags: ["React"]},
        {id: 2, name: 'cProject1', des: 'Project Chogansadasdasdasda', tags: ["React", "Docker", "Java"]},
        {id: 3, name: 'bProject1', des: 'Project Chogan', tags: ["React", "Docker"]},
        {id: 4, name: 'aProject1', des: 'Project Chogan', tags: ["React", "Java"]},
        {id: 5, name: 'aProject1', des: 'Project Chogan', tags: ["React", "Java"]},
        {id: 6, name: 'aProject1', des: 'Project Chogan', tags: ["React", "Java"]},
        {id: 7, name: 'aProject1', des: 'Project Chogan', tags: ["React", "Java"]},
        {id: 8, name: 'aProject1', des: 'Project Chogan', tags: ["React", "Java"]},

    ]);

    // const [folders, setFolders] = useState([
    //     {id: 1, name: 'School'},
    //     {id: 2, name: 'Work'},
    //     {id: 3, name: 'School'},
    //     {id: 4, name: 'Work'},
    // ]);

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
