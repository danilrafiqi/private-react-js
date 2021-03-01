import { Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Layout from "../../templates/Layout";

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState();
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const getPostDetail = async (postId) => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + postId
      );
      setPostDetail(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostDetail(params.id);
  }, []);

  return (
    <Layout>
      <Grid container spacing={6}>
        {loading === true && <div>loading . . .</div>}

        {postDetail && (
          <div>
            <div>{postDetail.title}</div>
            <div>{postDetail.body}</div>
          </div>
        )}
      </Grid>
    </Layout>
  );
};

export default PostDetail;
