import { Col } from 'reactstrap';
import Comment from './comment';
import { selectComnmentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
    const comments = selectComnmentsByCampsiteId(campsiteId)

    if(comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                    )
                })}
            </Col>
        )
    }

    return (
        <Col md='5' className='m-1'>no comments yet</Col>
    )
}

export default CommentsList;