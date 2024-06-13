import { useRouteError, Link } from 'react-router-dom';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      {error.status === 404 ? (
        <p>The page you are looking for does not exist.</p>
      ) : (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      )}
      <Link to="/" className="error-link">
        Go back to the home page
      </Link>
    </div>
  );
}