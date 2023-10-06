import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from './CampsiteCard';
import { selectAllCampsites } from '../features/campsites/campsitesSlice';
import Error from './error';
import Loading from './loading';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites)
    console.log(campsites)
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errorMsg = useSelector((state) => state.campsites.errorMsg);

    if(isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        )
    }

    if(errorMsg) {
        return (
            <Row>
                <Error errorMsg={errorMsg}/>
            </Row>
        )
    }

    //render the Campsitecard component in a bootstrap grid
    return (
        <Row>
            <Col className='ms-auto'>
                {// map through the CAMPSITES array and return each campsite in a column
                    campsites.map((campsite) => {
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