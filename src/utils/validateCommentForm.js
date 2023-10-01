export const validateCommentForm = (values) => {
    const errors = {};
  
    if (!values.rating) {
      errors.rating = "Required";
    } else if (values.author.length < 2) {
        
      errors.author = "Must Be At Least 2 Characters";
    } else if (values.commentText.length > 15) {
      errors.text = "Must Be 15 Characters or Less";
       
    }
  
    return errors;
  };
  