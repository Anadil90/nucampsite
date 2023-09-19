
import { Container, Row, Col } from 'reactstrap';
import CampsitesList from '../components/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <SubHeader current='directory' />
            <CampsitesList />
        </Container>
    )
}

export default CampsitesDirectoryPage;