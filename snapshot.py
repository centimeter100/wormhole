#!/usr/bin/env python3

from playwright.sync_api import sync_playwright
import os, hashlib

osugacha = "https://osugacha.com"

os.makedirs("snapshots", exist_ok=True)

def save_js(response):
    url = response.url
    if ".js" not in url.split("?")[0]:
        return
    try:
        body = response.body()
    except Exception:
        return
    name = os.path.basename(url.split("?")[0]) or "inline.js"
    with open(f"snapshots/{name}", "wb") as f:
        f.write(body)
    print("saved", url)

with sync_playwright() as p:
    browser = p.chromium.launch(channel="chromium", headless=True)
    page = browser.new_page()
    page.on("response", save_js)
    page.goto(osugacha, wait_until="networkidle")
    page.wait_for_timeout(3000)
    browser.close()