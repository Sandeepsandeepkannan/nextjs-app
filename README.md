Next.js App Router – Routing Implementation
This project demonstrates the use of Next.js App Router with advanced routing features to build authentication flows and dynamic pages.

Features

Next.js App Router based routing
Route Groups for authentication pages (Sign In & Sign Up)
Dynamic Routes for pages with URL-based data
Catch-All Routes for handling multiple path segments
Clean and scalable folder structure
SEO-friendly file-based routing

Routing Concepts Used

Route Groups ( ) for organizing pages without affecting URLs
Dynamic Routes [param] for rendering pages based on dynamic URL values
Catch-All Segments [...param] for flexible nested routing
Server Components with async route parameters

Example Routes

/signin – User sign-in page (Route Group)
/signup – User sign-up page (Route Group)
/blogs/[blogid] – Dynamic blog details page
/docs/[...slug] – Catch-all documentation routes
