import { Col } from 'reactstrap';

const Error = ({errorMsg}) => {
    return (
        <Col>
            <h1>{errorMsg}</h1>
        </Col>
    )
}

export default Error;