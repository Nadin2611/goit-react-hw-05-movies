import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { routes } from 'routes';
import Layout from './Layot/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
// const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));
const ActorDetailsPage = lazy(() => import('../pages/ActorDetailsPage'));
const ActorPage = lazy(() => import('../pages/ActorPage'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/register" element={<RegisterPage />} /> */}
          <Route path={routes.MOVIES} element={<MoviesPage />} />
          <Route path={routes.MOVIES_ID} element={<MovieDetailsPage />}>
            <Route path={routes.CAST} element={<Cast />} />
            <Route path={routes.REVIEWS} element={<Reviews />} />
          </Route>
          <Route path={routes.ACTORS} element={<ActorPage />}></Route>
          <Route path={routes.ACTORS_ID} element={<ActorDetailsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
};
