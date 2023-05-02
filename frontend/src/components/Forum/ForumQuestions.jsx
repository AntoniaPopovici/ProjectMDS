import React from "react";
import ForumItem from "./ForumItem";

const ForumQuestions = ({questions}) => {

  return (
    <div>
      {questions.map((q) => (
        <div className="card post-body">
            <ForumItem question={q} />

            {/* <Link to={`/forum/question/${q.id}`} >
              see more
            </Link> */}
        </div>
      ))}
    </div>
  );
}

export default ForumQuestions;