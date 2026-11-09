async def run_test(page, output_dir, page_url):
    try:
        await page.set_viewport_size({"width":390,"height":844}); await page.goto("https://build-with-doss--7yx5grkc.preview.emergentagent.com",wait_until='networkidle',timeout=30000); await page.wait_for_selector('[data-testid="practice-marquee"]'); await page.emulate_media(reduced_motion='reduce'); await page.wait_for_timeout(100)
        print('animationDuration=',await page.evaluate("getComputedStyle(document.querySelector('.marquee > div')).animationDuration")); print('animationName=',await page.evaluate("getComputedStyle(document.querySelector('.marquee > div')).animationName")); print('media=',await page.evaluate("matchMedia('(prefers-reduced-motion: reduce)').matches"))
        print('TEST RESULT: computed media inspected')
    except Exception as e: print(f'SCRIPT ERROR: {e}'); raise
