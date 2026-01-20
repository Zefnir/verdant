# 🌿Verdant

A collaboration platform where users can communicate and share stuff with each other. It serves as a small hub especially for developers to invite others and share their work. This web app is mainly built for learning purposes as it has all basic functions like CRUD and authentication. 

## 🔨 Main Technologies
- `Nextjs:` A powerful framework that makes routing, SEO, organizing and much more stuff easier for me
  
- `Typescript:` It’s hard to migrate from JavaScript at first, but it greatly improves the developer experience by helping catch type errors and making code more maintainable
  
- `Tailwind:` A utility-first CSS framework that makes styling fast, consistent, and highly customizable. I love how it speeds up making impressive designs
  
- `Shadcn UI:` A library of ready-to-use components that look great and are easy to customize, saving me time while keeping the UI polished and accessible
  
- `Supabase:` It's very convenient by solving authentication, image uploading, storing data and realtime function for me at the same time

## ⭐ Features
- 📺 **Create channel and workspace:** You can create channel and workspace to organize your content in seperate sections
  
- 💬 **Send Message:** Messages are organized based on your workspace and channel
  
- 🖼️ **Image Upload:** Basic image uploading function, optimized by Nextjs default behaviours
  
- 🧵 **Thread:** Thread appears when you reply to another message, it should displayed on the right of the screen
  > 🚧 _(In progress)_

- ⌚ **Realtime:** All content is automatically updated when changes are made
  > 🚧 _(In progress)_
  
- 📜 **Task Manager:** A small place to organize all your tasks, this is useful for developers in general
  > ⌛ _(Coming Soon)_
  
- 🔐 **Security**
  - **Authentication**: User authentication handled by Supabase Auth (email/password), OAuth with Google, Github, and Microsoft
    
  - **Row Level Security (RLS)**: Database access restricted per user and workspace
    > 🚧 _(In progress)_
    
  - **Protected Routes**: Only authenticated users can access private pages
    > 🚧 _(In progress)_
    
  - **Secure File Uploads**: Image uploads managed by Supabase Storage with access rules and size limit
    > ⌛ _(Coming Soon)_

## 🧙‍♂️ Process
  ### Setup & Mental Model
  I started by putting myself in the shoes of a user looking for a lightweight chat application for their developer team. If Verdant appeared in their search results (assuming the SEO does its job), the homepage would be the first impression. Because of that, it needs to be both visually engaging and informative enough to encourage users to explore and try the application.
  
  ### Homepage
  The homepage is built using a hero section template from [Tailark](https://tailark.com/hero-section) which I adapted to fit Verdant’s branding and purpose. The focus is on clearly communicating what the app does while maintaining a clean, modern layout that feels approachable to developers. Also it saves time to focus on other core functions of the app.
  ![Preview](assets/background-5.jpg)

  
  ### Database & Authentication
  Verdant uses Supabase for data storage and backend services, including image uploads, real-time functionality, and security features. As long as the configuration and syntax follow the official documentation, connecting to and fetching data is straightforward.
  
  Authentication is implemented using email/password as well as OAuth providers such as Google, GitHub, and Microsoft.
  
  ### CRUD
  Core CRUD functionality is implemented using Supabase’s APIs. Most operations are simple to set up; however, integrating the rich text editor (Tiptap) required additional configuration and experimentation to get working smoothly.
  
  ### Security
 Security is handled using Row Level Security (RLS) provided by Supabase, along with session-based authentication checks before allowing access to protected routes or mutations. Additional improvements, such as stricter image size limits and more thorough input sanitization are planned for future updates.
  
  ### Current & Upcoming Updates
  At the moment, my main focus is polishing the application, with an emphasis on improving security. After that, I plan to implement features such as infinite scrolling, threads, and enhanced real-time interactions. There are many future ideas as well like task management, interface customization, better UI contrast, etc, but the priority is to complete and stabilize the core application before expanding its feature set.
  
## ⚖️ Challenges


