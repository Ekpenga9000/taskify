/**
 * An array of public routes that do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/about",
];

/**
 * An array of routes that are used for authentication.
 * @type {string[]}
 */

export const authRoutes = [
    "/login",
    "/register",
];


/**
 * An array of private routes that require authentication.
 * @type {string[]}
 */

export const privateRoutes = [
    "/dashboard",
    "/settings",
    "/stats",
    "/profile",
    "/rank", 
    "/logout",
];

/*
    * The prefix for the API routes.
    * Routes that start with this prefix are used for API authentication purposes.
    * @type {string}
*/
export const apiAuthPrefix = "/api/auth";

/*
    * The default redirect route after a successful login.
    * @type {string}
*/

export const DEFAULT_LOGIN_REDIRECT = "/dashboard";