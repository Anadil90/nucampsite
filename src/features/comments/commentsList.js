import { Col } from 'reactstrap';
import Comment from './comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm' 
import { useSelector } from 'react-redux';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    if(comments && comments.length > 0) {
        const handleSubmit = (values) => {
            const comment = {
                campsiteId: parseInt(campsiteId),
                rating: values.rating,
                author: values.author,
                text: values.commentText
            };
            console.log(comment)
        
        
        }
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment) => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                    )
                })}
                <CommentForm campsiteId={campsiteId}/>
            </Col>
        )
    }

    return (
        <Col md='5' className='m-1'>no comments yet</Col>
    )
}

export default CommentsList;
