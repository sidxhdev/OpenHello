# 👋 OpenHello

**OpenHello** is a beginner-friendly open source project built with  
⚡ Vite + ⚛️ React + 🎨 Tailwind CSS and deployed on ▲ Vercel.

The goal of this project is simple:  
Help beginners make their **first Pull Request (PR)** by adding their details to the contributors list.  
Once your PR is merged, your **Hello Card** will appear on the live Contributors page 🚀.

🌍 **Live Demo:** [open-hello.vercel.app](https://open-hello.vercel.app/)  
📂 **Repo:** [GitHub](https://github.com/sidxhdev/OpenHello.git)

---

## 🚀 Why OpenHello?

- Many beginners struggle with their **first PR**.  
- OpenHello makes the process **super simple**: just fork → edit → commit → PR.  
- No need to set up a local dev environment.  
- After your PR is merged, your Hello Card is instantly live on Vercel 🎉.

---

## 🛠 How to Contribute (Beginner Friendly)

Follow these simple steps to add yourself to the Contributors list:

### 1. Fork this Repository
Click the **Fork** button at the top right of this page.  
This creates a copy of the repo in your GitHub account.

### 2. Navigate to `contributorsData.jsx`
In your forked repo:
- Go to `src/data/contributorsData.jsx`  
- Click **Edit (✏️)**

### 3. Add Your Details
Inside the array, add your object in this format:

```javascript
{
  name: "Your Name",
  photoUrl: "https://avatars.githubusercontent.com/your-github-username",
  githubUrl: "https://github.com/your-github-username",
}
```

### 4. Commit Your Changes
- Scroll down to the **Commit changes** section
- Add a commit message like: `Add [Your Name] to contributors`
- Click **Commit changes**

### 5. Create a Pull Request
- Go back to the original repository: [OpenHello](https://github.com/sidxhdev/OpenHello)
- Click **New Pull Request**
- Select your fork and branch
- Add a title like: `Add [Your Name] to contributors`
- Click **Create Pull Request** to dev branch

### 6. Wait for Review
- Your PR will be reviewed and merged
- Once merged, your Hello Card will appear on the live site! 🎉

---

## 🧑‍💻 For Developers (Local Setup)

If you want to explore or contribute code beyond just adding a Hello Card:

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/openhello.git
cd openhello
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

- The project will start at **[http://localhost:5173/](http://localhost:5173/)**
- Any changes you make will hot-reload automatically.

### 4. Build for Production
```bash
npm run build
```

- This generates the production-ready files in the `dist/` folder.
- Preview locally:
```bash
npm run preview
```

### 5. Recommended Branching for Dev Contributions

- Create a new branch for your feature/fix:
```bash
git checkout -b my-feature
```

- Make your changes, commit, and push to your fork:
```bash
git add .
git commit -m "Describe your change"
git push origin my-feature
```

- Open a pull request from your branch to the project's **`dev`** branch.

---

## 🤝 Contributing Guidelines

- Keep your Hello Card details accurate and appropriate
- Follow the existing code style and formatting
- Test your changes locally before submitting a PR
- Be respectful and patient during the review process

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

Thanks to all contributors who help make this project a welcoming space for beginners to learn open source contribution! 

---

**Happy Contributing! 🚀**


