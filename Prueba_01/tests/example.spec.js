// npm init playwright@latest
import { IMAGE_ENDPOINT } from '../src/constants.js'
import { test, expect } from '@playwright/test'

// Test simples con playwright (https://playwright.dev/)
const LOCALHOST = 'localhost:5173'

test('page shows text, image and button', async ({ page }) => {
  await page.goto(LOCALHOST)
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')
  const button = await page.getByRole('button')

  const textContent = await text.textContent()
  const imgSrc = await image.getAttribute('src')
  const buttonText = await button.innerText()

  expect(textContent).not.toBe(null)
  expect(imgSrc?.startsWith(IMAGE_ENDPOINT)).toBeTruthy()
  expect(buttonText).not.toBe(null)
})
