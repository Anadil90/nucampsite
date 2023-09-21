import { Col, Row } from 'reactstrap';
import DisplayCardAnimated from './DisplayCardAnimated';
import { selectFeaturedCampsite } from '../campsites/campsitesSlice';
import { selectFeaturedPromotion } from '../promotions/promotionsSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';



const DisplayList = () => {
    const items = [selectFeaturedCampsite(), selectFeaturedPromotion(), selectFeaturedPartner()]

    return(
        <Row>
            {items.map((item, idx) => {
                return (
                    item && (
                        <Col md className='m-1' key={idx}>
                            <DisplayCardAnimated item={item} />
                        </Col>
                    )
                );
            })}
        </Row>
    )
}

export default DisplayList;
