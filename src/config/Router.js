import Home from "../containers/pages/Home";
import PostCreate from "../containers/pages/PostCreate";
import PostDetail from "../containers/pages/PostDetail";
import PostList from "../containers/pages/PostList";
import PostUpdate from "../containers/pages/PostUpdate";
import Todo from "../containers/pages/Todo";
import TodoDetail from "../containers/pages/TodoDetail";

const routes = [
  {
    path: "/",
    label: "Home",
    component: Home,
  },
  {
    path: "/todo",
    label: "Todo",
    component: Todo,
  },
  {
    path: "/todo/:id",
    label: "Todo Detail",
    component: TodoDetail,
  },
  {
    path: "/posts",
    label: "Posts",
    component: PostList,
  },
  {
    path: "/posts/create",
    label: "Posts Create",
    component: PostCreate,
  },
  {
    path: "/posts/:id/update",
    label: "Posts Update",
    component: PostUpdate,
  },
  {
    path: "/posts/:id",
    label: "Posts Detail",
    component: PostDetail,
  },
];

export default routes;
