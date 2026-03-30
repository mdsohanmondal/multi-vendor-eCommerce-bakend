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
