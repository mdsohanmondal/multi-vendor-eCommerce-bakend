## Branch Naming Convention

তোমার কাজের ধরন অনুযায়ী নাম দেওয়া হয়। Industry-তে সবাই এই pattern follow করে:

| কাজের ধরন     | Pattern    | উদাহরণ                        |
| ------------- | ---------- | ----------------------------- |
| নতুন feature  | `feature/` | `feature/add-login-page`      |
| Bug fix       | `fix/`     | `fix/navbar-crash`            |
| জরুরি bug fix | `hotfix/`  | `hotfix/payment-broken`       |
| Code cleanup  | `chore/`   | `chore/remove-unused-imports` |
| Design/UI     | `style/`   | `style/update-button-color`   |

# নতুন কিছু add করার জন্য

git checkout -b feature/add-dark-mode

# Bug fix করার জন্য

git checkout -b fix/login-redirect-bug

---

# 🌿 Git Mastery — বাংলায় সম্পূর্ণ গাইড

> **Stash · Rebase · Cherry-pick · Branch · Remote** — সব কিছু এক জায়গায়

---

## 🌿 Branch — সমান্তরাল কাজের জগৎ

### সবচেয়ে দরকারি Branch Commands

```bash
# নতুন branch তৈরি করো
git branch feature-login

# সেই branch-এ যাও
git checkout feature-login

# (অথবা এক লাইনে দুটো কাজ)
git checkout -b feature-login

# কোন কোন branch আছে দেখো
git branch

# main-এ ফিরে যাও
git checkout main
```

---

### 🔀 Merge — branch-এর কাজ শেষে main-এ আনো

```bash
# প্রথমে main-এ যাও
git checkout main

# তারপর feature branch merge করো
git merge feature-login
```

---

### ⚠️ Merge Conflict — সবচেয়ে ভয়ের জিনিস!

Conflict হয় যখন **দুটো branch-এ একই file-এর একই জায়গায়** আলাদা changes থাকে।

Git তখন file-এর ভেতরে এরকম দেখায়:

```
<<<<<<< HEAD (main branch এর code)
button color = blue
=======
button color = red
>>>>>>> feature-login (তোমার branch এর code)
```

**সমাধান:** তুমি manually ঠিক করো কোনটা রাখবে, তারপর:

```bash
git add .
git commit -m "resolve merge conflict"
```

---

### 🧪 এখনই Practice করো!

```bash
# ১. নতুন folder বানাও
mkdir git-practice && cd git-practice
git init

# ২. একটা file বানাও
echo "Hello World" > index.txt
git add . && git commit -m "first commit"

# ৩. নতুন branch বানাও ও কিছু পরিবর্তন করো
git checkout -b my-feature
echo "New feature added" >> index.txt
git add . && git commit -m "add feature"

# ৪. main-এ ফিরে merge করো
git checkout main
git merge my-feature
```

---

## ☁️ Remote Repo — GitHub-এ তোমার Code

তোমার computer-এ যে Git repo আছে সেটা **local**। GitHub-এ যখন সেটা upload করো, সেটা হয় **remote**।

```
তোমার PC (local)  ←→  GitHub (remote)
```

---

### প্রথমবার GitHub-এ Project তোলার ধাপ

**ধাপ ১ — GitHub-এ নতুন repo বানাও**

GitHub-এ গিয়ে **"New Repository"** বানাও, নাম দাও।

**ধাপ ২ — Local repo-কে GitHub-এর সাথে connect করো**

```bash
git remote add origin https://github.com/তোমার-username/repo-name.git
```

> `origin` হলো remote-এর একটা **nickname**। যেকোনো নাম দেওয়া যায়, কিন্তু সবাই `origin` ব্যবহার করে।

**ধাপ ৩ — প্রথমবার Push করো**

```bash
git push -u origin main
```

> `-u` মানে "upstream set করো" — এরপর থেকে শুধু `git push` লিখলেই হবে।

---

### 🔄 Daily Workflow (সবচেয়ে জরুরি অংশ)

```bash
# ১. নতুন branch বানাও
git checkout -b feature/add-profile

# ২. কাজ করো, তারপর commit করো
git add .
git commit -m "add user profile page"

# ৩. GitHub-এ push করো
git push origin feature/add-profile
```

---

### 📥 অন্য কারো code নেওয়া

```bash
# পুরো repo প্রথমবার নামাও
git clone https://github.com/someone/repo.git

# আগে থেকে clone করা থাকলে, latest update নাও
git pull origin main
```

---

### Push vs Pull — পার্থক্য

| Command     | কাজ                                            |
| ----------- | ---------------------------------------------- |
| `git push`  | তোমার code **GitHub-এ পাঠাও**                  |
| `git pull`  | GitHub থেকে latest code **নিয়ে আসো**          |
| `git clone` | GitHub থেকে repo **প্রথমবার নামাও**            |
| `git fetch` | Update আছে কিনা **শুধু চেক করো**, merge করে না |

---

### 🤝 Pull Request (PR) — Team workflow-এর হৃদয়

Real project-এ কেউ সরাসরি `main`-এ push করে না। বরং:

```
তুমি feature branch-এ কাজ করো
        ↓
GitHub-এ push করো
        ↓
Pull Request খোলো (বলো "এই code main-এ নিন")
        ↓
Teammate review করে approve করে
        ↓
Merge হয় main-এ
```

---

### ⚠️ একটা Common সমস্যা — Push Reject

```bash
# এই error দেখলে ঘাবড়াবে না
! [rejected] main -> main (fetch first)
```

**কারণ:** GitHub-এ নতুন কিছু আছে যা তোমার কাছে নেই।

```bash
# সমাধান: আগে pull করো, তারপর push
git pull origin main
git push origin main
```

---

## 🗂️ Git Stash — কাজ "সরিয়ে রাখো"

### সমস্যাটা কী?

ধরো তুমি একটা feature-এ কাজ করছো, হঠাৎ boss বলল **"এখনই একটা bug fix করো!"** কিন্তু তোমার current কাজ এখনো commit করার মতো ready না।

**Stash হলো একটা temporary drawer** — কাজ সেখানে রেখে অন্য কাজ করো, পরে ফিরে নাও।

```bash
# কাজ stash করো (সরিয়ে রাখো)
git stash

# stash-এ কী কী আছে দেখো
git stash list

# কাজ ফিরিয়ে আনো
git stash pop
```

### Real Example

```bash
# feature branch-এ কাজ করছিলে
git checkout -b feature/dashboard
# কিছু কাজ করলে কিন্তু commit করোনি

# হঠাৎ bug fix দরকার!
git stash                    # কাজ সরিয়ে রাখো

git checkout fix/login-bug   # bug fix করো
git add . && git commit -m "fix login bug"
git push origin fix/login-bug

# আবার নিজের কাজে ফিরে আসো
git checkout feature/dashboard
git stash pop                # কাজ ফিরিয়ে আনো
```

### Stash-এ নাম দেওয়া (একাধিক stash থাকলে)

```bash
git stash save "dashboard half done"
git stash save "navbar styling"

git stash list
# stash@{0}: dashboard half done
# stash@{1}: navbar styling

# নির্দিষ্ট stash ফিরিয়ে আনো
git stash pop stash@{1}
```

---

## 🔁 Git Rebase — history সুন্দর রাখো

### Merge vs Rebase পার্থক্য

**Merge করলে:**

```
main:    A --- B --- C ------- M  ← merge commit
                      \       /
feature:               D --- E
```

**Rebase করলে:**

```
main:    A --- B --- C --- D --- E  ← সোজা, পরিষ্কার
```

Rebase মূলত বলে: _"আমার কাজগুলো এমনভাবে দেখাও যেন main-এর সর্বশেষ কাজের পরে করেছি।"_

### কীভাবে করবে

```bash
# feature branch-এ আছো
git checkout feature/add-profile

# main-এর latest কাজ নিজের branch-এ আনো
git rebase main
```

### Rebase Conflict হলে

```bash
# conflict fix করো, তারপর
git add .
git rebase --continue

# অথবা rebase বাতিল করতে
git rebase --abort
```

### ⚠️ গুরুত্বপূর্ণ নিয়ম

> যে branch অন্যরাও use করছে, সেখানে **কখনো rebase করবে না।**
>
> শুধু নিজের local/feature branch-এ rebase করো।

---

## 🍒 Git Cherry-pick — শুধু একটা commit নাও

### সমস্যাটা কী?

ধরো তোমার `feature` branch-এ ৫টা commit আছে। কিন্তু main-এ শুধু **একটা নির্দিষ্ট commit** দরকার, বাকিগুলো না।

**Cherry-pick = পুরো branch না নিয়ে শুধু দরকারি commit তুলে নাও।**

```bash
# আগে commit-এর ID দেখো
git log --oneline

# এরকম দেখাবে:
# a1b2c3d fix payment gateway bug
# e4f5g6h add dark mode
# i7j8k9l update navbar
# m1n2o3p add profile page

# শুধু payment fix টা main-এ নাও
git checkout main
git cherry-pick a1b2c3d
```

### Real Example

```bash
# hotfix branch-এ একটা critical bug fix করেছো
git checkout -b hotfix/payment-bug
# fix করলে
git commit -m "fix payment gateway timeout"

# এই fix টা develop branch-এও দরকার
git checkout develop
git cherry-pick <commit-id>
```

---

## 📊 তিনটার তুলনা — কখন কোনটা

| পরিস্থিতি                                       | Command           |
| ----------------------------------------------- | ----------------- |
| কাজ অসম্পূর্ণ, অন্য কাজ করতে হবে                | `git stash`       |
| Feature branch-কে main-এর সাথে up-to-date রাখতে | `git rebase`      |
| একটা নির্দিষ্ট commit অন্য branch-এ নিতে        | `git cherry-pick` |

---

## 🧪 Practice করো

```bash
# Stash practice
git checkout -b feature/test
echo "incomplete work" > test.txt
git add .
git stash save "my incomplete work"
git stash list
git stash pop

# Cherry-pick practice
git log --oneline        # একটা commit ID নাও
git checkout main
git cherry-pick <সেই ID>
```

---

> 💡 **Tip:** এই পর্বটা clear হলে এরপর শিখতে পারো — `git bisect`, `git reflog`, এবং `git worktree`।
>
> কোনো প্রশ্ন থাকলে জানাও! 😊
