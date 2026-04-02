# How to Deploy Your Portfolio 🚀

Your portfolio is a static website (HTML, CSS, and JavaScript), which makes it very easy and **free** to host. Here are the three best ways to get your site online.

---

## Option 1: GitHub Pages (Recommended)
Since you already have a GitHub profile, this is the most professional way.

### Step 1: Push Your Code to GitHub
If you haven't uploaded your local project to GitHub yet, follow these steps in your terminal (inside the `e:/portfolio` folder):

1.  **Initialize Git**:
    ```powershell
    git init
    ```
2.  **Add all files**:
    ```powershell
    git add .
    ```
3.  **Commit your changes**:
    ```powershell
    git commit -m "Initial portfolio commit"
    ```
4.  **Create a new Repo**: Go to [GitHub.com](https://github.com/new) and create a repository named `Vivek-Nagare`.
5.  **Connect and Push**:
    ```powershell
    git remote add origin https://github.com/Vicky7795/Vivek-Nagare.git
    git branch -M main
    git push -u origin main
    ```

### Step 2: Enable GitHub Pages
1.  Go to your repository on GitHub.
2.  Click on **Settings** (top menu).
3.  Click on **Pages** in the left sidebar.
4.  Under **Branch**, click the dropdown, select **main**, and click **Save**.
5.  Your site will be live at `https://vicky7795.github.io/Vivek-Nagare/` within 2-3 minutes!

---

## Option 2: Netlify (Instant Drag & Drop)
If you want a live link instantly without using Git commands:

1.  Go to [Netlify](https://app.netlify.com/).
2.  Go to the **Sites** tab and select **Add new site**.
3.  Choose **Deploy manually**.
4.  Open your file explorer (`e:/portfolio`) and **drag and drop** the entire folder into the Netlify box.
5.  You'll get a professional link (like `vicky-portfolio.netlify.app`) immediately!

---

## Option 3: Vercel (Developer Choice)
Great for performance and future scaling.

1.  Go to [Vercel](https://vercel.com/import).
2.  Import your GitHub repository.
3.  Click **Deploy**.
4.  Vercel will give you a production-ready URL automatically.

---

## Important Checklist Before Deploying 🔍
1.  **Asset Paths**: Ensure all images/PDFs are in the `assets` folder and linked relatively (`assets/profile.jpg`).
2.  **Default File**: Your main file **must** be named `index.html`.
3.  **Test Locally**: Open `index.html` in your browser one last time to ensure everything loads.

> [!TIP]
> After deploying, go to your GitHub repository and add your live link to the "About" section. This makes it easy for recruiters to find!
