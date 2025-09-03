import { test, expect } from '@playwright/test';

test.describe('Mobile Responsive Design', () => {
  const pages = [
    { path: '/', title: 'Homepage' },
    { path: '/about', title: 'About Page' },
    { path: '/services', title: 'Services Page' },
    { path: '/approach', title: 'Approach Page' },
    { path: '/contact', title: 'Contact Page' },
    { path: '/blog', title: 'Blog Page' }
  ];

  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Mobile Large', width: 414, height: 896 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop Small', width: 1024, height: 768 },
    { name: 'Desktop', width: 1200, height: 800 },
    { name: 'Desktop Large', width: 1440, height: 900 }
  ];

  viewports.forEach(viewport => {
    test.describe(`${viewport.name} (${viewport.width}x${viewport.height})`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
      });

      pages.forEach(pageInfo => {
        test(`${pageInfo.title} renders correctly`, async ({ page }) => {
          await page.goto(pageInfo.path);
          
          // Wait for page to load
          await page.waitForLoadState('domcontentloaded');
          
          // Check that the page title is present
          await expect(page.locator('h1').first()).toBeVisible();
          
          // Check that navigation is present (either desktop nav or mobile menu button)
          const desktopNav = page.locator('nav.hidden.md\\:flex');
          const mobileMenuButton = page.locator('button[aria-label*="menu" i], button:has-text("Menu"), .hamburger, [data-testid="mobile-menu-button"], button:has([data-icon="menu"]), button:has(svg)');
          const headerElement = page.locator('header');
          
          if (viewport.width < 768) {
            // On mobile, either the mobile menu button should be visible, or at least the header
            const isMobileMenuVisible = await mobileMenuButton.count() > 0 && await mobileMenuButton.first().isVisible();
            const isHeaderVisible = await headerElement.count() > 0 && await headerElement.first().isVisible();
            expect(isMobileMenuVisible || isHeaderVisible).toBeTruthy();
          } else {
            // On desktop, the navigation should be visible
            await expect(desktopNav).toBeVisible();
          }
          
          // Check that content doesn't overflow horizontally
          const body = page.locator('body');
          const bodyBox = await body.boundingBox();
          expect(bodyBox?.width).toBeLessThanOrEqual(viewport.width);
          
          // Verify that images are responsive
          const images = page.locator('img:visible');
          const imageCount = await images.count();
          
          for (let i = 0; i < imageCount; i++) {
            const image = images.nth(i);
            const imgBox = await image.boundingBox();
            if (imgBox) {
              expect(imgBox.width).toBeLessThanOrEqual(viewport.width);
            }
          }
        });
      });

      test('Navigation menu works on all screen sizes', async ({ page }) => {
        await page.goto('/');
        
        if (viewport.width < 768) {
          // Mobile navigation - check for hamburger menu or verify header navigation
          const mobileMenuButton = page.locator('button[aria-label*="menu" i], button:has-text("Menu"), .hamburger, [data-testid="mobile-menu-button"], button:has([data-icon="menu"]), button:has(svg)');
          const headerElement = page.locator('header');
          
          const mobileButtonExists = await mobileMenuButton.count() > 0;
          if (mobileButtonExists && await mobileMenuButton.first().isVisible()) {
            await mobileMenuButton.first().click();
            // Check if navigation becomes visible after click
            await page.waitForTimeout(300); // Wait for animation
            const navLinks = page.locator('nav a, [role="navigation"] a');
            const linkCount = await navLinks.count();
            expect(linkCount).toBeGreaterThan(0);
          } else {
            // If no mobile menu, at least verify the header is present
            await expect(headerElement).toBeVisible();
          }
        } else {
          // Desktop navigation
          await expect(page.locator('nav a[href="/about"]')).toBeVisible();
          await expect(page.locator('nav a[href="/services"]')).toBeVisible();
          await expect(page.locator('nav a[href="/approach"]')).toBeVisible();
          await expect(page.locator('nav a[href="/contact"]')).toBeVisible();
          await expect(page.locator('nav a[href="/blog"]')).toBeVisible();
        }
      });
    });
  });
});

test.describe('Image Placeholders', () => {
  const pagesWithImages = [
    { path: '/about', images: 2 },
    { path: '/services', images: 3 },
    { path: '/approach', images: 4 },
    { path: '/contact', images: 1 },
    { path: '/blog', images: 1 }
  ];

  pagesWithImages.forEach(pageInfo => {
    test(`Image placeholders work correctly on ${pageInfo.path}`, async ({ page }) => {
      await page.goto(pageInfo.path);
      await page.waitForLoadState('domcontentloaded');
      
      // Find all image placeholder containers
      const imagePlaceholders = page.locator('.group:has(img)');
      const placeholderCount = await imagePlaceholders.count();
      
      expect(placeholderCount).toBeGreaterThanOrEqual(pageInfo.images);
      
      // Test hover functionality on first image placeholder
      if (placeholderCount > 0) {
        const firstPlaceholder = imagePlaceholders.first();
        
        // Hover over the image
        await firstPlaceholder.hover();
        
        // Check if overlay appears with description
        await expect(firstPlaceholder.locator('div:has-text("Aspect Ratio")')).toBeVisible();
        
        // Move mouse away and check overlay disappears
        await page.mouse.move(0, 0);
        await page.waitForTimeout(500); // Wait for transition
        await expect(firstPlaceholder.locator('div:has-text("Aspect Ratio")')).toBeHidden();
      }
    });
  });
});

test.describe('Cross-Page Navigation', () => {
  test('Navigation flow works correctly', async ({ page }) => {
    // Start from homepage
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Newchecks Solutions');
    
    // Navigate to About
    await page.click('nav a[href="/about"]');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('About');
    
    // Navigate to Services
    await page.click('nav a[href="/services"]');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('Services');
    
    // Navigate to Approach
    await page.click('nav a[href="/approach"]');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('Approach');
    
    // Navigate to Contact
    await page.click('nav a[href="/contact"]');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('Contact');
    
    // Navigate to Blog
    await page.click('nav a[href="/blog"]');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('HR Insights');
    
    // Return to Home
    await page.click('nav a[href="/"]');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('h1')).toContainText('Strategic Excellence');
  });
});

test.describe('Homepage Content', () => {
  test('Homepage displays comprehensive content sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    // Check main hero section
    await expect(page.locator('h1')).toContainText('Strategic Excellence');
    
    // Check "Why Choose Us" section
    await expect(page.locator('h2:has-text("Why Choose Newchecks Solutions")')).toBeVisible();
    await expect(page.locator('text=Expert Team')).toBeVisible();
    await expect(page.locator('text=Proven Results')).toBeVisible();
    await expect(page.locator('text=Compliance First')).toBeVisible();
    await expect(page.locator('text=Quality Assured')).toBeVisible();
    
    // Check "Our Core Services" section
    await expect(page.locator('h2:has-text("Our Core Services")')).toBeVisible();
    await expect(page.locator('h3:has-text("Permanent Staffing")')).toBeVisible();
    await expect(page.locator('h3:has-text("Contract Staffing")')).toBeVisible();
    await expect(page.locator('h3:has-text("HR Outsourcing")')).toBeVisible();
    
    // Check "Success Stories" section
    await expect(page.locator('h2:has-text("Success Stories")')).toBeVisible();
    await expect(page.locator('div:has-text("85%")').first()).toBeVisible();
    await expect(page.locator('div:has-text("500+")').first()).toBeVisible();
    await expect(page.locator('div:has-text("95%")').first()).toBeVisible();
    
    // Check Call to Action section
    await expect(page.locator('h2:has-text("Ready to Transform Your HR Operations?")')).toBeVisible();
    await expect(page.locator('a:has-text("Get Free Consultation")')).toBeVisible();
    await expect(page.locator('a:has-text("Learn Our Approach")')).toBeVisible();
  });
  
  test('Homepage buttons and links work correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    // Test "Learn About Us" button
    const learnAboutUsButton = page.locator('a:has-text("Learn About Us")');
    await expect(learnAboutUsButton).toBeVisible();
    await learnAboutUsButton.click();
    await page.waitForLoadState('domcontentloaded');
    await page.waitForURL('**/about');
    expect(page.url()).toContain('/about');
    
    // Go back to homepage
    await page.goto('/');
    
    // Test "Explore Services" button
    await page.click('a:has-text("Explore Services")');
    await page.waitForLoadState('domcontentloaded');
    expect(page.url()).toContain('/services');
    
    // Go back to homepage
    await page.goto('/');
    
    // Test "View All Services" button
    await page.click('a:has-text("View All Services")');
    await page.waitForLoadState('domcontentloaded');
    expect(page.url()).toContain('/services');
    
    // Go back to homepage
    await page.goto('/');
    
    // Test "Get Free Consultation" button
    await page.click('a:has-text("Get Free Consultation")');
    await page.waitForLoadState('domcontentloaded');
    expect(page.url()).toContain('/contact');
    
    // Go back to homepage
    await page.goto('/');
    
    // Test "Learn Our Approach" button
    await page.click('a:has-text("Learn Our Approach")');
    await page.waitForLoadState('domcontentloaded');
    expect(page.url()).toContain('/approach');
  });
});