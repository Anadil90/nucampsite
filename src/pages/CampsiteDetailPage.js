import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/commentsList';
import SubHeader from '../components/SubHeader';
import Error from '../components/error';
import Loading from '../components/loading';

    

const CampsiteDetailPage = () => {
    const { campsiteId } = useParams();
    const campsite = useSelector(selectCampsiteById(campsiteId));
    const isLoading = useSelector((state) => state.campsites.isLoading);
    const errorMsg = useSelector((state) => state.campsites.errorMsg);

    let content = null;

    if(isLoading) {
        content = <Loading />     
    }

    else if(errorMsg) {
        content = <Error />
    }

    else {
        content = (
            <>
                <CampsiteDetail campsite={campsite} />
                <CommentsList campsiteId={campsiteId} />
            </>
        )
    }

    return (
        <Container>
            {campsite && <SubHeader current={campsite.name} detail={true} /> }
            <Row>
               {content} 
            </Row>
        </Container>
    )
}

export default CampsiteDetailPage;