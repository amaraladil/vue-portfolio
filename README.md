## Vue Portfolio with Tailwind CSS and MongoDB

This project is a personal portfolio website built with Vue.js, Tailwind CSS, and MongoDB.

### Technologies Used

- **Frontend:**
  - **Vue.js:** A progressive JavaScript framework for building user interfaces. Vue.js: [https://vuejs.org/](https://vuejs.org/)
  - **Tailwind CSS:** A utility-first CSS framework for rapidly building modern websites. Tailwind CSS: [https://tailwindcss.com/](https://tailwindcss.com/)
- **Backend:**
  - **MongoDB:** A NoSQL document-oriented database used for efficiently storing and managing portfolio data. Learn more at [MongoDB](https://www.mongodb.com/).
  - **Node.js with Netlify Edge Functions:** Provides backend functionality to fetch and process data from MongoDB, enabling seamless integration and dynamic content delivery.

### Project Description

This portfolio website showcases your skills and experience in an interactive and visually appealing way. It utilizes Vue.js for building dynamic and responsive components, Tailwind CSS for a clean and consistent design, and MongoDB for storing portfolio data like project descriptions and links.

### Features

- **Interactive User Interface:** The Vue.js framework allows for a smooth and engaging user experience with features like single-page navigation and dynamic content loading.
- **Customizable Design:** Tailwind CSS provides a wide range of utility classes for building a unique and personalized portfolio layout.
- **Project Management:** MongoDB stores portfolio data, such as project descriptions, images, and links, making it easy to add, update, and manage your portfolio content.

### Getting Started

1. **Prerequisites**

   - **Node.js**: Ensure you have Node.js installed (version 14 or higher recommended). [Download Node.js](https://nodejs.org/)
   - **Netlify CLI**: Install the Netlify CLI for running edge functions locally. [Netlify CLI Documentation](https://docs.netlify.com/cli/get-started/)
   - **MongoDB**: Set up a MongoDB database. [MongoDB Installation Guide](https://www.mongodb.com/docs/manual/installation/)

2. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/vue-portfolio.git
   ```

3. **Install Dependencies:**

   ```bash
   cd vue-portfolio
   npm install or npm i
   ```

4. **Environment Variables**

   Replace Your Portfolio Title and Your MongoDB Connection String with your actual values.

   ```env
   VUE_APP_TITLE=Your Portfolio Title
   MONGO_URI=Your MongoDB Connection String
   ```

5. **Folder Structure**

   ```markdown
   ├── public/ # Static assets (e.g., favicon, index.html)
   ├── src/
   │ ├── assets/ # Images, icons, and other static files
   │ ├── components/ # Vue components
   │ ├── router/ # Vue Router configuration
   │ ├── store/ # Vuex store (if used)
   │ ├── views/ # Page-level components
   │ ├── App.vue # Root Vue component
   │ └── main.js # Entry point for the application
   ├── .env # Environment variables
   ├── package.json # Project dependencies and scripts
   └── vue.config.js # Vue CLI configuration
   ```

6. **Configure MongoDB:**

   - Set up a MongoDB database and configure the connection details in the project's configuration files.

7. **Run the Development Server:**

   ```bash
   netlify dev
   ```

   This will start the development server and open the application in your web browser - includes running the backend as a edge function.

### Deployment

- The deployment process will depend on your chosen hosting provider.
- Build the Vue application for production using `npm run build`.
- Deploy the built files (usually located in the `dist` folder) to your hosting platform.

### Testing

To run unit tests, use the following command:

```bash
npm run test
```

### Additional Notes

- This is a basic structure for a Vue portfolio project using Tailwind CSS and MongoDB.
- You can customize the design, features, and functionalities based on your specific needs and preferences.
- Refer to the official documentation for Vue.js, Tailwind CSS, and MongoDB for detailed usage instructions and advanced features.
