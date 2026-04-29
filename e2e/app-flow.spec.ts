import { expect, test } from '@playwright/test'

const ORDER_ROWS = 'table[aria-label="Orders"] tbody tr'

test.describe('orders app flow', () => {
  test('filters, searches, sorts, and handles empty state on desktop', async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.goto('/')

    await expect(page.getByRole('heading', { name: 'Orders' })).toBeVisible()
    await expect(page.locator(ORDER_ROWS)).toHaveCount(6)

    await page.locator('#order-status-filter').click()
    await page.getByRole('option', { name: 'Picking' }).click()
    await expect(page.locator(ORDER_ROWS)).toHaveCount(2)
    await expect(page.locator(ORDER_ROWS).first()).toContainText('#1017')

    await page.locator('#order-date-sort').click()
    await page.getByRole('option', { name: 'Oldest first' }).click()
    await expect(page.locator(ORDER_ROWS).first()).toContainText('#1013')

    await page.locator('#orders-search').fill('youssef')
    await expect(page.locator(ORDER_ROWS)).toHaveCount(1)
    await expect(page.locator(ORDER_ROWS).first()).toContainText('#1017')

    await page.locator('#orders-search').fill('zzz-not-found')
    await expect(page.getByText('No orders found')).toBeVisible()
    await expect(
      page.getByText('Try adjusting your filters or search to see more results.')
    ).toBeVisible()
  })

  test('persists theme mode after reload', async ({ page }) => {
    await page.goto('/')

    const themeToggle = page.getByRole('button', { name: 'Enable dark theme' })
    await themeToggle.click()
    await expect(page.locator('main[data-theme="dark"]')).toBeVisible()

    await page.reload()
    await expect(page.locator('main[data-theme="dark"]')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Enable light theme' })).toBeVisible()
  })

  test('uses card layout on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    await expect(page.locator('table[aria-label="Orders"]')).toBeHidden()
    await expect(page.locator('article[aria-label^="Order "]')).toHaveCount(6)
  })
})
