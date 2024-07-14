import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CreateTripPage } from "./pages/create-trip";
import { ErrorPage } from "./pages/error-page";
import { TripDetailsPage } from "./pages/trip-details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
]);

export function App() {

  return <RouterProvider router={router} />

}
