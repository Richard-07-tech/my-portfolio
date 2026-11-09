async def run_test(page, output_dir, page_url):
    try:
        await page.set_viewport_size({"width":1920,"height":1080}); await page.goto("https://build-with-doss--7yx5grkc.preview.emergentagent.com",wait_until='networkidle',timeout=30000); await page.wait_for_selector('[data-testid="hero-section"]')
        await page.locator('[data-testid="hero-view-projects"]').click(); await page.wait_for_timeout(300)
        for tid,target in [("nav-about","about"),("nav-skills","skills"),("nav-work","work"),("nav-contact","contact")]:
            el=page.locator(f'[data-testid="{tid}"]'); await el.scroll_into_view_if_needed(); await el.click(); await page.wait_for_timeout(200); assert await page.locator(f'#{target}').is_visible()
        before=await page.locator('html').get_attribute('class'); await page.locator('[data-testid="theme-toggle"]').click(); await page.wait_for_timeout(150); assert before != await page.locator('html').get_attribute('class')
        assert await page.locator('[data-testid="project-card-canopy"]').is_visible(); assert await page.locator('[data-testid^="project-card-"]').count()==6
        await page.locator('[data-testid="project-details-canopy"]').click(); await page.wait_for_selector('[data-testid="project-modal"]'); assert await page.locator('[data-testid="project-modal"]').get_attribute('role')=='dialog'; assert await page.locator('[data-testid^="modal-link-"][href="#"]').count()>=1
        await page.locator('[data-testid="project-modal-close"]').click(); await page.wait_for_selector('[data-testid="project-modal"]', state='hidden', timeout=3000)
        assert await page.locator('[data-testid="hero-download-resume"]').get_attribute('href')=='/resume.pdf'; assert (await page.locator('[data-testid="contact-email"]').get_attribute('href')).startswith('mailto:')
        await page.set_viewport_size({"width":390,"height":844}); await page.reload(wait_until='networkidle'); await page.wait_for_selector('[data-testid="hero-section"]'); widths=await page.evaluate("[document.documentElement.scrollWidth,document.documentElement.clientWidth]"); assert widths[0]<=widths[1]+1; assert await page.locator('[data-testid="project-card-canopy"]').is_visible()
        await page.emulate_media(reduced_motion='reduce'); duration=await page.evaluate("getComputedStyle(document.querySelector('.marquee > div')).animationDuration"); assert duration in ['0s','0.01ms']
        print('PASS: all requested functional flows, responsive layout, and reduced motion')
    except AssertionError as e: print(f'FINDING: {e}'); raise
    except Exception as e: print(f'SCRIPT ERROR: {e}'); raise
