# Timezone-Project
This is my first full stack project





# Time Zone Clock Application  

A **React + Vite** application designed for managing and displaying customizable clocks with user-defined time zones and offsets. It offers a modular architecture, real-time updates, and a user-friendly interface for time zone operations.

---

## Features  

- **Local and Global Clocks**: Displays both the local clock and customizable clocks for other time zones.  
- **Add/Edit/Delete Clocks**: Create new clocks, edit existing ones, or remove them.  
- **Dynamic Time Difference**: Shows the difference between local and target time zones.  
- **Real-Time Updates**: Automatically updates the clocks in real-time.  
- **Component-Based Architecture**: Designed with reusable React components for maintainability.  
- **Modern Tooling**: Built with Vite for fast development and hot module replacement (HMR).  

---

## Getting Started  

### Installation  

1. Clone the repository:  

   ```bash  
   git clone https://github.com/your-repo.git  
   cd your-repo  
   ```  

2. Install dependencies using Yarn:  

   ```bash  
   yarn install  
   ```  

3. Start the development server:  

   ```bash  
   yarn dev  
   ```  

4. Open the app in your browser at `http://localhost:5173`.  

---

### Directory Structure  

```plaintext  
src/  
├── assets/  
│   └── react.svg  
├── components/  
│   ├── clock_list/  
│   │   ├── clock_collections.jsx  
│   │   └── index.jsx  
│   ├── local_clock/  
│   │   └── index.jsx  
├── constants/  
│   └── constants.js  
├── hook/  
│   └── useClock.jsx  
├── shared/  
│   ├── clock_actions/  
│   │   └── clock_actions.jsx  
│   ├── clock_form/  
│   │   └── clock_form.jsx  
│   ├── clock_display/  
│   │   ├── clock_display.jsx  
│   │   └── index.module.css  
├── App.jsx  
├── App.css  
└── index.css  
```  

---

### Key Components  

1. **ClockDisplay**:  
   - Displays individual clock details like title, time, timezone, and time difference.  
   - Provides delete functionality with a dynamic UI to mark deleted clocks.  

2. **ClockForm**:  
   - Allows users to create or edit clocks.  
   - Supports timezone and offset adjustments dynamically.  

3. **ClockActions**:  
   - Handles clock management actions: Create, Edit, and Delete.  
   - Maintains the state for action mode (create/edit) and clock list.  

4. **LocalClock**:  
   - Displays the local clock information, showcasing the current time, title, and timezone.  

5. **useClock Hook**:  
   - Manages clock creation and calculates time differences dynamically.  

6. **Constants**:  
   - Contains predefined time zones and their offsets for global accessibility.  

---

### Scripts  

- `yarn dev`: Start the development server with hot reloading.  
- `yarn build`: Build the app for production.  
- `yarn lint`: Run ESLint checks to ensure code quality.  
- `yarn preview`: Preview the production build locally.  

---

### Technologies Used  

- **React**: For building user interfaces.  
- **Vite**: Modern development environment for fast builds.  
- **date-fns**: For managing date and time calculations.  
- **CSS Modules**: Scoped and reusable styles for components.  

---

### Future Enhancements  

- **Drag-and-Drop Interface**: Enable users to reorder clocks dynamically.  
- **Timezone Database Integration**: Add support for dynamic timezone data fetching from APIs.  
- **Notifications**: Set alarms or reminders for specific time zones.  
- **Persistent Storage**: Save clock data in local storage or a database.  

---

### License  

This project is licensed under the [MIT License](LICENSE).  

Feel free to contribute or report issues to improve the application! 😊  

--- 

Let me know if you'd like further tweaks! 😊
