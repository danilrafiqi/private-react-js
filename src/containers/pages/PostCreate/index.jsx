import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PostForm from "../../organism/PostForm";
import Layout from "../../templates/Layout";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const createPost = (titleVal, bodyVal) => {
    setLoading(true);
    axios
      .post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: titleVal,
          body: bodyVal,
          userId: 1,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log("res", res);
        history.push("/posts");
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };
  return (
    <Layout loading={loading}>
      <PostForm
        isUpdate={false}
        title={title}
        onTitleChange={setTitle}
        body={body}
        onBodyChange={setBody}
        onSubmit={() => createPost(title, body)}
      />
    </Layout>
  );
};

export default PostCreate;
