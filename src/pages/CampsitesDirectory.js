import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import CampsitesDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../components/CampsitesList';
import {selectCampsiteById } from '../features/campsites/campsitesSlice';


const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId] = useState(0)//set intial state to the id of the first item in campsites array
    return (
        <Container>
            
            <Row>
                <Col sm="5" md="7">
                    <CampsitesList />
                </Col>
                <Col sm="7" md="5">
                    <CampsitesDetail campsite={campsiteId} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage;