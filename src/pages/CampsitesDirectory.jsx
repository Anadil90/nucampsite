import { Container, Row, Col, Button } from 'reactstrap';
import CampsitesDetail from '../features/campsites/CampsiteDetail';
import CampsitesList from '../components/CampsitesList';
import { campsitesAtRandom } from '../components/campsitesSlice';

const CampsitesDirectoryPage = () => {
    let selectedCampsite = campsitesAtRandom();

    const toggleCampsite = () => {
        selectedCampsite = campsitesAtRandom()
        console.log(selectedCampsite)
    }

    return (
        <Container>
            <Button onClick = {() => {toggleCampsite()}}>
            Random Campsites</Button>
            <Row>
                <Col sm="5" md="7">
                    <CampsitesList />
                </Col>
                <Col sm="7" md="5">
                    <CampsitesDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsitesDirectoryPage;