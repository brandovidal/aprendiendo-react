// @ts-check
import { test, expect } from '@playwright/test'

const LOCALHOST_API = 'http://127.0.0.1:5173'

test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_API)

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Cat/)
})
