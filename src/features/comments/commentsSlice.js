import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectComnmentsByCampsiteId = (campsiteId) => {
    return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId));
}