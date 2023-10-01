// @ts-check
import { test, expect } from '@playwright/test'
import { CAT_ENDPOINT_RANDOM_FACT_URL } from '../src/contants'

const LOCALHOST_URL = 'http://localhost:5173'

test('has title', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_ENDPOINT_RANDOM_FACT_URL)).toBeTruthy()
})
