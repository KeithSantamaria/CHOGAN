import {useState} from 'react';
import GridView from '../../components/home/GridView.component';
import UserView from '../../components/home/UserView.component';
import '../../css/home/home.css';

import {Col, Row, Container} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTh, faList} from "@fortawesome/free-solid-svg-icons";


export default function Home() {
    /**
     * Mock Data
     */
    const [projects, setProjects] = useState([
        {id: 1, name: 'Project Chogan', des: 'Project Chogandas jhbd jasda asds a Casdsad  Chogandas jhbd jasda asds a Casdsad   Chogandas jhbd jasda asds a Casdsad   Chogandas jhbd jasda asds a Casdsad Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', tags: ["React", "Docker", "Java","React", "Docker", "Java", "React", "Docker", "Java","Java", "React", "Docker", "Java"]},
        {id: 2, name: 'Project1', des: 'Project Chogansadasdasdasda Chogandas jhbd jasda asds a Casdsad  Chogandas jhbd jasda asds a Casdsad   Chogandas jhbd jasda asds a Casdsad', tags: ["React", "Docker", "Java"]},
        {id: 3, name: 'Project1', des: 'Project Chogan', tags: ["React", "Docker", "Java"]},
        {id: 4, name: 'Project1', des: 'Project Chogan', tags: ["React", "Docker", "Java"]},
        {id: 5, name: 'Project1', des: 'Project Chogan', tags: ["React", "Docker", "Java"]},
        {id: 6, name: 'Project1', des: 'Project Chogan', tags: ["React", "Docker", "Java"]},
        {id: 7, name: 'Project1', des: 'Project Chogan', tags: ["React", "Docker", "Java"]}
    ]);

    const [folders, setFolders] = useState([
        {id: 1, name: 'School'},
        {id: 2, name: 'Work'},
        {id: 3, name: 'School'},
        {id: 4, name: 'Work'},
 
    ]);

    const [tabs, setTabs] = useState("grid");

    const RenderTabs = () => {
        if(tabs === 'grid') {
            return <GridView projects={projects} folders={folders}/>;
        }

        if(tabs === 'list') {
            return <h1>List</h1>;
        }
        return null;
    }

  return (
    <div>
        <Row>
            <Col sm={9} className="home-container-wrapper">
                <Row className="tabs-container-wrapper">
                    <Col className="tabs-wrapper" >
                        <FontAwesomeIcon className="fa-icon fa-icon-1" icon={faTh} onClick={() => setTabs('grid')}/>
                        <FontAwesomeIcon className="fa-icon fa-icon-2" icon={faList} onClick={() => setTabs('list')}/>
                    </Col>

                    <Col className="proj-info-wrapper">
                        <div style={{float: 'right'}}>
                            <span>Projects {projects.length}</span>
                            <span>Folders 2</span>
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
