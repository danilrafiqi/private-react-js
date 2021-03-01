import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";

const PostForm = ({
  title,
  body,
  onTitleChange,
  onBodyChange,
  onSubmit,
  isUpdate,
}) => {
  return (
    <Grid container spacing={6}>
      <Grid xs={12} sm={12} lg={12} md={12}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="filled"
          value={title}
          onChange={(e) => {
            onTitleChange(e.target.value);
          }}
        />
      </Grid>
      <Grid xs={12} sm={12} lg={12} md={12}>
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="filled"
          value={body}
          onChange={(e) => {
            onBodyChange(e.target.value);
          }}
        />
      </Grid>
      <Button variant="contained" color="primary" onClick={onSubmit}>
        {isUpdate ? "Update" : "Create"}
      </Button>
    </Grid>
  );
};

export default PostForm;
