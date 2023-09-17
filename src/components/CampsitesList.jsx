
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { CAMPSITES } from '../app/shared/CAMPSITES';
import { selectAllCampsites } from './campsitesSlice';
import { campsitesAtRandom} from './campsitesSlice';

const CampsitesList = () => {
    const returnAllCampsites = selectAllCampsites();
    //render the Campsitecard component in a bootstrap grid
    return (
        <Row>
            <Col className='ms-auto'>
                {// map through the CAMPSITES array and return each campsite in a column
                    CAMPSITES.map((campsite) => {
                        return (
                            <Col className='m-4' md='5' key={campsite.id}>
                                <CampsiteCard campsite={campsite}/>
                            </Col>
                        )
                    })
                }
            </Col>
        </Row>
    )
}

export default CampsitesList;