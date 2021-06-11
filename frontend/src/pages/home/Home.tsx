import {useState, useEffect} from 'react';
import GridView from '../../components/home/GridView.component';
import UserView from '../../components/home/UserView.component';
import HomeListView from '../../components/home/HomeListView';
import '../../css/home/home.css';

import {Col, Row} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTh, faList} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    const [active, setActive] = useState(false);
    const [tabs, setTabs] = useState("grid");

    const toggle = () => { 
        if(active === false) {
            setActive(true);
        }
        if(active === true) {
            setActive(false);
        }
        return null;
    }

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

    const [folders, setFolders] = useState([
        {id: 1, name: 'School'},
        {id: 2, name: 'Work'},
        {id: 3, name: 'School'},
        {id: 4, name: 'Work'},
    ]);

    const RenderTabs = () => {
        if(tabs === 'grid') {
            // toggle();
            return <GridView projects={projects} folders={folders}/>;
        }

        if(tabs === 'list') {
            // toggle();
            return <HomeListView />;
        }
        return null;
    }

    const handleGridView = () => {
        toggle();
        setTabs('grid');
    }

    const handleListView = () => {
        toggle();
        setTabs('list');
    }
  

  return (
    <div className="body">
        <Row>
            <Col sm={9} className="home-container-wrapper">
                <Row className="tabs-container-wrapper">
                    <Col className="tabs-wrapper" >
                        <FontAwesomeIcon style={active ? {color: 'black'} : {color: 'gray'}} className="fa-icon fa-icon-1" icon={faTh} onClick={() => handleGridView()}/>
                        <FontAwesomeIcon style={!active ? {color: 'black'} : {color: 'gray'}} className="fa-icon fa-icon-2" icon={faList} onClick={() => handleListView()}/>
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
