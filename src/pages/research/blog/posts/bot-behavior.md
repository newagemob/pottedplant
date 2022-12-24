---
title: "Bot Behavior"
author: "I.M. Wright"
category: "programming"
date: "2022-12-19"
bannerImage: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/W2I6OCDQIMI6VIKWABELMLG3KE.jpg&w=1484"
tags:
    - programming
    - instagram
    - bot
    - selenium
    - python
---

It’s hard for me to use the internet like a normal person. Scrolling the feed isn’t fun, even if I enjoy what I’m seeing. I’m all about that curation, baby. I definitely rely on my people to send me memes and even most current events, because I like what I like, and I don’t really go outside those channels. So the goal was to engage with people to grow my businesses Instagram account, without one, hiring a social media manager, or two, looking spammy and disingenuous.

Most bots are just aimed at farming as many likes and followers as possible — as opposed to facilitating long term growth and authentic engagement. I wanted to create a bot that would help me grow my account organically, and that would be efficient to use.

Selenium is a powerful tool for automating web browsers, and it can be used to build a web scraper for Instagram (or any other website). In this article, we'll go over the bare bones of building a Selenium web scraper for Instagram.

First, you'll need to install Selenium. This can be done using pip, the Python package manager. Simply run pip install selenium in your terminal.

Next, you'll need to download the ChromeDriver executable. This is a separate component that allows Selenium to control the Chrome browser. You can download the appropriate version for your system from the ChromeDriver website.

Once you have Selenium and ChromeDriver installed, you can start building your web scraper. Here is the basic structure of a Selenium web scraper in Python:

```python
from selenium import webdriver

# create a Chrome browser instance
driver = webdriver.Chrome()

# navigate to the Instagram login page
driver.get('https://www.instagram.com/accounts/login/')

# enter your username and password
username_field = driver.find_element_by_name('username')
password_field = driver.find_element_by_name('password')

username_field.send_keys('your_username')
password_field.send_keys('your_password')

# submit the login form
login_button = driver.find_element_by_xpath('//button[@type="submit"]')
login_button.click()

# navigate to your profile page
driver.get('https://www.instagram.com/your_username/')

# scrape the data you want from the page
# for example, you might want to extract the number of followers and the list of recent posts
followers_count = driver.find_element_by_xpath('//span[@class="g47SY "]').text
recent_posts = driver.find_elements_by_xpath('//div[@class="v1Nh3 kIKUG _bz0w"]')

# do something with the data you've extracted
print(f'Number of followers: {followers_count}')
for post in recent_posts:
    print(post.text)

# close the browser
driver.quit()
```

This is just a basic example of what you can do with Selenium and Instagram. You can use it to automate all sorts of tasks, such as liking and commenting on posts, following and unfollowing users, and more. With a little bit of creativity and some basic programming skills, you can build a Selenium web scraper that will help you grow any social account organically and efficiently.
