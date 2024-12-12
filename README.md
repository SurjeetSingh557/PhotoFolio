# Photofolio App
[PhotoFolio](https://shreyas-ingale.github.io/Photofolio/) is an online photo album react app that allows users to upload, organize, and share their digital photos.

##  Getting Started 
-  Fork the Project in your Repository.
-  Clone the Forked Repository in your Local System.
-  Run 'npm install'.
-  Run 'npm start'.
-  Enjoy :)

For any issues related to the project, raise an ISSUE in the respective Repository.

## Functionalities
- PhotoFolio App allow users to maintain images by category in various Albums.
- It provides options for users to save, preview, and download images.
- The application has user-friendly interface and have a visually appealing design that encourages users to explore and use the platform regularly.

## Technologies Used
- React
- Firebase
- HTML - CSS
- react-loader-spinner
- react-toastify

## Component Structure
The PhotoFolio app is built using 6 components:
- AlbumForm: Displays a form to create a new album in the database
- AlbumsList: Displays a list of albumns fetched from the database
- ImageForm: Displays a form to create and update images in a specific album
- ImagesList: Displays a list of images in a specific album
- Carousel: Displays images in a model window as a carousel
- Navbar: Displays the logo image and text

## API Structure
The firebase API would look like this:
- albums To store all the albums
- images To store all the images associated with a particular album
