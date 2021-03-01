import { Button, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PostListCard from "../../organism/PostListCard";
import Layout from "../../templates/Layout";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(0);

  const history = useHistory();

  const getPost = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
        console.log("data", res.data);
      })
      .catch((e) => {
        setLoading(false);
        console.log("error", e);
      });
  };

  const deletePost = (id) => {
    axios
      .delete("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        setActive(0);
        setPosts((prev) => {
          let newData = [...prev];
          newData.splice(id, 1);
          return newData;
        });
        console.log("ini respon deletePost", res);
      })
      .catch((e) => {
        setActive(0);
        console.log("error deletePost", e);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <Layout>
      <Grid container>
        <Button
          color="primary"
          variant="contained"
          onClick={() => history.push("/posts/create")}
        >
          Create
        </Button>
      </Grid>

      {loading && (
        <Grid container>
          <div
            style={{
              textAlign: "center",
            }}
          >
            Loading . . .
          </div>
        </Grid>
      )}
      <Grid container spacing={6}>
        {!loading &&
          posts.map((post) => {
            return (
              <Grid item xs={6} sm={3} key={post.id}>
                <PostListCard
                  title={post.title}
                  body={post.body}
                  onDelete={() => {
                    deletePost(post.id);
                    setActive(post.id);
                  }}
                  onEdit={() => history.push(`/posts/${post.id}/update`)}
                  onDetail={() => history.push(`/posts/${post.id}`)}
                  loading={active === post.id ? true : false}
                />
              </Grid>
            );
          })}
      </Grid>
    </Layout>
  );
};

export default PostList;
