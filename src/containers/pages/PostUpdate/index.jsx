import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import PostForm from "../../organism/PostForm";
import Layout from "../../templates/Layout";

const PostUpdate = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [postDetail, setPostDetail] = useState();
  const params = useParams();
  const updatePost = (titleVal, bodyVal, postId) => {
    setLoading(true);
    axios
      .put(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          title: titleVal,
          body: bodyVal,
          userId: 1,
          id: postId,
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

  const getPostDetail = async (postId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      setPostDetail(res.data);
      setTitle(res.data.title);
      setBody(res.data.body);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostDetail(params.id);
  }, []);

  return (
    <Layout loading={loading}>
      {postDetail && (
        <PostForm
          isUpdate={true}
          title={title}
          onTitleChange={setTitle}
          body={body}
          onBodyChange={setBody}
          onSubmit={() => updatePost(title, body, params.id)}
        />
      )}
    </Layout>
  );
};

export default PostUpdate;
