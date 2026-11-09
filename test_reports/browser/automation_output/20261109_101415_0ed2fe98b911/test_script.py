async def run_test(page, output_dir, page_url):
    try:
        await page.set_viewport_size({"width":1920,"height":1080})
        await page.goto("https://build-with-doss--7yx5grkc.preview.emergentagent.com", wait_until="networkidle", timeout=30000)
        await page.wait_for_selector('[data-testid="hero-section"]', timeout=10000)
        print("PASS: portfolio loads")
        await page.locator('[data-testid="hero-view-projects"]').click(); await page.wait_for_timeout(500)
        print("hero target visible=", await page.locator('#work').is_visible())
        for tid,target in [("nav-about","about"),("nav-skills","skills"),("nav-work","work"),("nav-contact","contact")]:
            el=page.locator(f'[data-testid="{tid}"]'); await el.scroll_into_view_if_needed(); await el.click(); await page.wait_for_timeout(250)
            assert await page.locator(f'#{target}').is_visible()
        print("PASS: nav links")
        initial=await page.locator('html').get_attribute('class'); await page.locator('[data-testid="theme-toggle"]').click(); await page.wait_for_timeout(150); changed=await page.locator('html').get_attribute('class'); assert initial != changed
        print("PASS: theme toggle")
        assert await page.locator('[data-testid="project-card-canopy"]').is_visible()
        assert await page.locator('[data-testid^="project-card-"]').count()==6
        await page.locator('[data-testid="project-details-canopy"]').click(); await page.wait_for_selector('[data-testid="project-modal"]')
        assert await page.locator('[data-testid="project-modal"]').get_attribute('role') == 'dialog'
        assert await page.locator('[data-testid^="modal-link-"][href="#"]').count() >= 1
        print("PASS: Canopy/card count/modal/placeholder")
        await page.locator('[data-testid="project-modal-close"]').click(); assert not await page.locator('[data-testid="project-modal"]').is_visible()
        print("PASS: modal close")
        assert await page.locator('[data-testid="hero-download-resume"]').get_attribute('href') == '/resume.pdf'
        assert (await page.locator('[data-testid="contact-email"]').get_attribute('href')).startswith('mailto:')
        assert await page.locator('[data-testid="contact-github"]').count()==1 and await page.locator('[data-testid="contact-linkedin"]').count()==1
        print("PASS: resume/contact links")
        await page.set_viewport_size({"width":390,"height":844}); await page.reload(wait_until='networkidle'); await page.wait_for_selector('[data-testid="hero-section"]')
        widths=await page.evaluate("[document.documentElement.scrollWidth,document.documentElement.clientWidth]"); assert widths[0] <= widths[1]+1, widths
        assert await page.locator('[data-testid="project-card-canopy"]').is_visible()
        print("PASS: mobile no overflow and Canopy visible", widths)
        await page.emulate_media(reduced_motion='reduce'); duration=await page.evaluate("getComputedStyle(document.querySelector('.marquee > div')).animationDuration"); print('reduced animation duration=',duration); assert duration in ['0s','0.01ms']
        print("PASS: reduced motion")
        error_text = await page.evaluate("""() => { const errorElements = Array.from(document.querySelectorAll('.error, [class*="error"], [id*="error"]')); return errorElements.map(el => el.textContent).join(', '); }""")
        if error_text: print(f"Found error message: {error_text}")
        else: print("No error messages found on the page")
        print("TEST RESULT: PASS (functional flows)")
    except AssertionError as e:
        print(f"FINDING: {e}")
        raise
    except Exception as e:
        print(f"SCRIPT ERROR: {e}")
        raise
