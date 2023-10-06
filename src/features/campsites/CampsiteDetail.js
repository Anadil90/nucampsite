
import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsitesDetail = ({campsite}) => {
    const {image, name, description} = campsite;
    
    return (
        <Col md="12" className="m-4">
            <CardImg top src={image} alt={name} />
            <CardText>{description}</CardText>
        </Col>
        
    )
}

export default CampsitesDetail;