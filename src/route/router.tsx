import Layout from "@/Layout/Layout";
import CreateList from "@/page/CreateList";
import ItemList from "@/page/ItemList";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Route = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <ItemList />,
        },
        {
          path: "/create",
          element: <CreateList />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Route;
