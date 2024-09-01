//utility.js
const API_END_POINTS = {
  dev: 'http://localhost:3000',
  prod: 'https://course-hub-backend-sepia.vercel.app/',
};

const getApiEndpoint = (env) => {
  return API_END_POINTS[env || 'dev'];
};

const FALL_BACK_ERROR_MESSAGE = 'Something went wrong!';

//  stale
function getTutorRoute(path, role) {
  let route = path;

  if (role === 'admin') {
    route = `/tutor${path}`;
  }

  return route;
}

export {
  API_END_POINTS,
  FALL_BACK_ERROR_MESSAGE,
  getTutorRoute,
  getApiEndpoint,
};
