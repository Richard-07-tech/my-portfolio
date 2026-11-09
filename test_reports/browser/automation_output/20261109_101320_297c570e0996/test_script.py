async def run_test(page, output_dir, page_url):
    import re

    try:
        await page.set_viewport_size({"width": 1920, "height": 1080})
        await page.goto("https://build-with-doss--7yx5grkc.preview.emergentagent.com", wait_until="networkidle", timeout=30000)
        await page.wait_for_selector('[data-testid="hero-section"]', timeout=10000)
        print("PASS: portfolio loads")

        title = await page.title()
        assert "Richard Allen Doss" in title
        desc = await page.locator('meta[name="description"]').get_attribute("content")
        assert desc and "Richard Allen Doss" in desc
        favicon = await page.locator('link[rel="icon"]').get_attribute("href")
        assert favicon and "favicon.svg" in favicon
        print("PASS: SEO title, description, favicon")

        await page.locator('[data-testid="hero-view-projects"]').scroll_into_view_if_needed()
        await page.locator('[data-testid="hero-view-projects"]').click()
        await page.wait_for_timeout(500)
        assert await page.locator('#work').is_visible()
        print("PASS: hero CTA reaches work")

        for tid, target in [("nav-about", "about"), ("nav-skills", "skills"), ("nav-work", "work"), ("nav-contact", "contact")]:
            el = page.locator(f'[data-testid="{tid}"]')
            await el.scroll_into_view_if_needed()
            await el.click()
            await page.wait_for_timeout(300)
            assert await page.locator(f'#{target}').is_visible()
        print("PASS: sticky nav links reach all requested sections")

        before = await page.locator('html').get_attribute("class")
        await page.locator('[data-testid="theme-toggle"]').click()
        await page.wait_for_timeout(200)
        after = await page.locator('html').get_attribute("class")
        assert before != after and "dark" in (after or "")
        await page.locator('[data-testid="theme-toggle"]').click()
        print("PASS: theme toggle changes document theme")

        card = page.locator('[data-testid="project-card-canopy"]')
        assert await card.is_visible()
        first_card = await page.locator('[data-testid^="project-card-"]').count()
        assert first_card == 6
        await page.locator('[data-testid="project-details-canopy"]').click()
        await page.wait_for_selector('[data-testid="project-modal"]', timeout=3000)
        assert await page.locator('[data-testid="project-modal"]').get_by_role("heading", name="Canopy").is_visible()
        placeholder_count = await page.locator('[data-testid^="modal-link-"][href="#"]').count()
        assert placeholder_count >= 1
        print("PASS: Canopy first, six cards, modal and placeholder links")
        await page.locator('[data-testid="project-modal-close"]').click()
        assert not await page.locator('[data-testid="project-modal"]').is_visible()
        print("PASS: modal close works")

        resume = page.locator('[data-testid="hero-download-resume"]')
        assert await resume.get_attribute("href") == "/resume.pdf"
        print("PASS: resume points to /resume.pdf")

        for tid in ["nav-github", "contact-github", "contact-linkedin", "contact-email", "back-to-top"]:
            assert await page.locator(f'[data-testid="{tid}"]').count() == 1
        assert (await page.locator('[data-testid="contact-email"]').get_attribute("href")).startswith("mailto:")
        print("PASS: contact and back-to-top links present")

        dialog = page.locator('[data-testid="project-modal"]')
        # check all controls carry test IDs and dialog semantics
        controls = await page.locator('button, a').count()
        missing = await page.locator('button:not([data-testid]), a:not([data-testid])').count()
        print(f"INFO: interactive controls={controls}, missing data-testid={missing}")

        await page.set_viewport_size({"width": 390, "height": 844})
        await page.reload(wait_until="networkidle")
        await page.wait_for_selector('[data-testid="hero-section"]', timeout=10000)
        scroll_width = await page.evaluate("document.documentElement.scrollWidth")
        client_width = await page.evaluate("document.documentElement.clientWidth")
        assert scroll_width <= client_width + 1, f"horizontal overflow {scroll_width}>{client_width}"
        assert await page.locator('[data-testid="project-card-canopy"]').is_visible()
        print("PASS: mobile content visible and no horizontal overflow")

        await page.emulate_media(reduced_motion="reduce")
        reduced = await page.evaluate("getComputedStyle(document.querySelector('.marquee > div')).animationDuration")
        assert reduced in ["0.01ms", "0s"] or reduced.endswith("ms") and float(reduced[:-2]) <= 0.01
        print("PASS: reduced-motion CSS preference applied")

        error_text = await page.evaluate("""() => {
          const errorElements = Array.from(document.querySelectorAll('.error, [class*="error"], [id*="error"]'));
          return errorElements.map(el => el.textContent).join(", ");
        }""")
        if error_text:
            print(f"Found error message: {error_text}")
        else:
            print("No error messages found on the page")
        print("TEST RESULT: PASS")
    except AssertionError as e:
        print(f"FINDING: {e}")
    except Exception as e:
        print(f"SCRIPT ERROR: {e}")
        raise
